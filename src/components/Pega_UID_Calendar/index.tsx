import { useEffect, useRef, useState } from 'react';
import type { EventContentArg, EventHoveringArg } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import momentPlugin from '@fullcalendar/moment';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import {
  withConfiguration,
  Icon,
  Text,
  Status,
  Card,
  CardHeader,
  CardContent,
  Button,
  useTheme,
  StatusProps,
  Popover,
  Flex,
  Grid,
  CardFooter,
  registerIcon
} from '@pega/cosmos-react-core';
import StyledCalendarWrapper from './styles';
import './create-nonce';
import GlobalStyles from './global-styles';
import type { CalendarApi } from '@fullcalendar/core';
import * as LocationSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/locations-solid.icon';
import * as Plus from '@pega/cosmos-react-core/lib/components/Icon/icons/plus.icon';
import * as CalendarEmptySolid from '@pega/cosmos-react-core/lib/components/Icon/icons/calendar-empty-solid.icon';
import * as ClockSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/clock-solid.icon';
import * as WizardSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/wizard-solid.icon';
import * as UserGroupSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/users-solid.icon';
import * as UserSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/user-solid.icon';
import * as WebcamSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/webcam-solid.icon';
import * as PhoneSolid from '@pega/cosmos-react-core/lib/components/Icon/icons/phone-solid.icon';
import * as Building2Solid from '@pega/cosmos-react-core/lib/components/Icon/icons/building-2-solid.icon';

registerIcon(
  LocationSolid,
  Plus,
  CalendarEmptySolid,
  ClockSolid,
  WizardSolid,
  UserGroupSolid,
  UserSolid,
  WebcamSolid,
  PhoneSolid,
  Building2Solid
);

export type TEventImpl = Parameters<CalendarApi['addEvent']>[0];

export enum EViewType {
  Day = 'timeGridDay',
  Week = 'timeGridWeek',
  WorkWeek = 'workingWeek',
  Month = 'dayGridMonth'
}

export enum ETerminGoal {
  FirstContact = 'Erstberatung',
  FollowUp = 'Folgeberatung',
  ApplicationSubmission = 'Bewerbungsabgabe'
}

export enum EEventType {
  Absence = 'Abwesend',
  Availability = 'Verfügbar',
  Appointment = 'Termin',
  MassEvent = 'Sammel'
}

export enum EDateTimeType {
  date = 'date',
  time = 'time'
}

export enum EBeratungsTyp {
  presence = 'Präsenzberatung',
  online = 'Online',
  phone = 'Telefon',
  office = 'Außendienststelle'
}

export type TCalendarProps = {
  heading?: string;
  dataPage?: string;
  createClassname?: string;
  defaultViewMode?: 'Monthly' | 'Weekly' | 'Daily';
  nowIndicator?: boolean;
  weekendIndicator?: boolean;
  getPConnect: any;
};

export type TEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  item: any;
  display: string;
  allDay?: boolean;
  overlap: boolean;
  color: string;
  extendedProps?: { [key: string]: any };
};

export interface IPegaObject {
  pxUpdateSystemID?: string;
  pxUpdateDateTime?: string;
  pxUpdateOpName?: string;
  pxUpdateOperator?: string;
  pySourcePage?: {
    pxObjClass: string;
    pySourceIdentifier: string;
    pySourceNumber: string;
    pySourceClass: string;
    pySourceType: string;
  };
  pxCreateDateTime?: string;
  pxDPParameters?: {
    pyGUID?: string;
    Typ?: string;
  };
  pxSaveDateTime?: string | null;
  pzLoadTime?: string;
  pzPageNameHash?: string;
  pzInsKey?: string;
  pzPageNameBase?: string;
  pxObjClass: string;
  pxCreateOperator?: string;
  pxCreateSystemID?: string;
  pxCommitDateTime?: string | null;
  pyGUID?: string;
  pxCreateOpName?: string;
}

export interface IAdresse extends IPegaObject {
  Raum: string;
  Hausnummer: string;
  Ort: string;
  Strasse: string;
  PLZ: string;
  Gebaudeteil: string;
  Bezeichnung: string;
}

export interface IBeratungsstelle extends IPegaObject {
  Adresse: IAdresse;
  Webexlink: string;
  DisplayOrder: number;
  Beschreibung: string;
  Typ: EBeratungsTyp;
  OrganisationseinheitID: string;
  AddressID: string;
}

export interface ITerminTyp extends IPegaObject {
  Order: 1;
  Typ: 'Präsenzberatung';
}

export interface IContact extends IPegaObject {
  FirstName: string;
  FullName: string;
  LastName: string;
  Salutation: string;
}

export interface ITermin extends IPegaObject {
  TerminTyp: Array<ITerminTyp>;
  Beratungsart: ETerminGoal;
  Contact: IContact;
}

export interface IRawEvent extends IPegaObject {
  Beratungsstelle: IBeratungsstelle;
  AuthorID: string;
  EndTime: Date;
  CompleteDay: boolean;
  StartTime: Date;
  Termin: ITermin | null;
  SerieRepeat: string;
  Subject: string;
  BeratungsstelleID: string;
  Weekday: string;
  Type: EEventType;
  ParentSerieID: string;
  Capacity: string;
  IsSerie: boolean;
  SerieEndDate: string;
  TerminID: string;
  MonthDisplayText: string;
}

export type TDateInfo = {
  view: { type: EViewType };
  startStr?: string;
  start?: Date;
  end?: Date;
};

export const PegaUidCalendar = (props: TCalendarProps) => {
  const {
    heading = '',
    dataPage = '',
    createClassname = '',
    defaultViewMode = 'Monthly',
    nowIndicator = true,
    weekendIndicator = true,
    getPConnect
  } = props;

  const [events, setEvents] = useState<Array<TEvent>>([]);
  // const [workingWeek, setWorkingWeek] = useState<boolean>(false);
  const calendarRef = useRef<any | null>(null);
  const theme = useTheme();
  let dateInfo: TDateInfo = { view: { type: EViewType.Month } };
  const dateInfoStr = localStorage.getItem('fullcalendar');
  if (dateInfoStr) {
    dateInfo = JSON.parse(dateInfoStr);
    if (dateInfo.view.type === EViewType.Month && dateInfo.end && dateInfo.start) {
      /* If showing Month - find the date in the middle to get the Month */
      const endDate = new Date(dateInfo.end).valueOf();
      const startDate = new Date(dateInfo.start).valueOf();
      const middle = new Date(endDate - (endDate - startDate) / 2);
      dateInfo.startStr = `${middle.toISOString().substring(0, 7)}-01`;
    }
  }

  const [eventInPopover, setEventInPopover] = useState<{
    eventEl: HTMLDivElement | null;
    eventInfo: TEventImpl | null;
    inPopover: boolean;
    inEl: boolean;
  }>({ eventEl: null, eventInfo: null, inPopover: false, inEl: false });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getDefaultView = (): EViewType => {
    if (dateInfo?.view?.type) {
      /* If the context is persisted in session storage - then used this info as default view */
      return dateInfo.view.type;
    }
    let defaultView: EViewType;
    switch (defaultViewMode) {
      case 'Weekly':
        defaultView = EViewType.Week;
        break;
      case 'Daily':
        defaultView = EViewType.Day;
        break;
      default:
      case 'Monthly':
        defaultView = EViewType.Month;
        break;
    }
    return defaultView;
  };

  const [currentViewType, setCurrentViewType] = useState<EViewType>(getDefaultView());
  const [rawData, setRawData] = useState<Array<IRawEvent>>([]);

  const fillEvents = (data: Array<IRawEvent> = rawData) => {
    const tmpevents: Array<TEvent> = [];
    (data || rawData).forEach((item: IRawEvent) => {
      let color: string;
      let display = 'block';
      let title = '';
      let overlap = false;
      switch (item.Type) {
        case EEventType.Availability: {
          color =
            currentViewType.indexOf('Week') > 0 ? 'transparent' : theme.base.colors.green.light;
          display = 'background';
          title = item.Type;
          overlap = true;
          break;
        }
        case EEventType.Appointment:
          color = theme.base.colors.blue.dark;
          title = `${item.Termin?.Contact.FullName}`;
          break;
        case EEventType.Absence:
          color = theme.base.colors.red.dark;
          title = item.Subject;
          break;
        default:
        case EEventType.MassEvent:
          color = theme.base.colors.orange.dark;
          title = item.Subject;
          break;
      }

      tmpevents.push({
        id: item.pyGUID || '',
        title,
        start: item.StartTime,
        end: item.EndTime,
        display,
        color,
        allDay: item.CompleteDay,
        overlap,
        item
      });
    });
    setEvents(tmpevents);
  };

  const loadEvents = () => {
    setIsLoading(true);
    (window as any).PCore.getDataApiUtils()
      .getData(dataPage, {})
      .then((response: any) => {
        if (response.data.data !== null) {
          setRawData(response.data.data);
          fillEvents(response.data.data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  /* Subscribe to changes to the assignment case */
  useEffect(() => {
    (window as any).PCore.getPubSubUtils().subscribe(
      (window as any).PCore.getEvents().getCaseEvent().ASSIGNMENT_SUBMISSION,
      () => {
        /* If an assignment is updated - force a reload of the events */
        loadEvents();
      },
      'ASSIGNMENT_SUBMISSION'
    );
    return () => {
      (window as any).PCore.getPubSubUtils().unsubscribe(
        (window as any).PCore.getEvents().getCaseEvent().ASSIGNMENT_SUBMISSION,
        'ASSIGNMENT_SUBMISSION'
      );
    };
  }, []);

  useEffect(() => {
    loadEvents();
  }, []);

  const getTypeIcon = (appointmentType: string) => {
    switch (appointmentType) {
      case 'Präsenzberatung':
        return <Icon name='user-solid' />;
      case 'Online':
        return <Icon name='webcam-solid' />;
      case 'Telefon':
        return <Icon name='phone-solid' />;
      case 'Außendienststelle':
      default:
        return <Icon name='building-2-solid' />;
    }
  };

  const getDateTimeFromIsoString = (
    isoString: string,
    dateOrTime: EDateTimeType,
    options: any = {},
    locale: string = 'de-DE'
  ) => {
    const dateTime = new Date(isoString);
    return dateOrTime === EDateTimeType.date
      ? dateTime.toLocaleDateString(locale, options)
      : dateTime.toLocaleTimeString(locale, { ...options, hour: '2-digit', minute: '2-digit' });
  };

  const addNewEvent = () => {
    if (createClassname) {
      getPConnect().getActionsApi().createWork(createClassname, {
        openCaseViewAfterCreate: false
      });
    }
  };

  const renderBeratungsartBadge = (beratungsart: string) => {
    let statusVariant: StatusProps['variant'] = 'info';
    switch (beratungsart) {
      case ETerminGoal.ApplicationSubmission:
        statusVariant = 'success';
        break;
      case ETerminGoal.FollowUp:
        statusVariant = 'pending';
        break;
      default:
      case ETerminGoal.FirstContact:
        statusVariant = 'info';
        break;
    }
    return (
      <Status className='event-subject' variant={statusVariant}>
        {beratungsart}
      </Status>
    );
  };

  const renderEventContent = (eventInfo: EventContentArg) => {
    const def = eventInfo.event._def;
    const obj = def.extendedProps.item;
    const isMonthlyView = currentViewType === EViewType.Month;
    let eventDateStr = `${getDateTimeFromIsoString(obj.StartTime, EDateTimeType.time)}`;
    eventDateStr += `-${getDateTimeFromIsoString(obj.EndTime, EDateTimeType.time)}`;
    const eventLabel =
      isMonthlyView && !obj.CompleteDay
        ? `${eventDateStr} ${eventInfo.event.title}`
        : eventInfo.event.title;
    if (obj.Type === 'Verfügbar' && currentViewType.indexOf('Week') > 0 && !!obj.Beratungsstelle) {
      const bTyp = obj.Beratungsstelle?.Typ || '';
      let left = '0%';
      switch (bTyp) {
        case 'Telefon':
          left = '25%';
          break;
        case 'Online':
          left = '50%';
          break;
        case 'Präsenzberatung':
          left = '75%';
          break;
        default:
      }
      return (
        <div
          className='event-content availability'
          style={{
            backgroundColor: theme.base.colors.green.light,
            left
          }}
        >
          <span>{getTypeIcon(obj.Beratungsstelle.Typ)}</span>
        </div>
      );
    }
    return (
      <div className='event-content'>
        <Text variant='h5' className='event-label'>
          {eventLabel}
        </Text>
        {obj.Type === EEventType.Appointment && renderBeratungsartBadge(obj.Termin.Beratungsart)}
        {obj.Type === EEventType.MassEvent && (
          <>
            <Icon name='location-solid' role='img' aria-label='location icon' size='s' />
            <Text variant='primary' className='event-label'>
              {obj.Sammeltermin.Address.Ort}
            </Text>
          </>
        )}
      </div>
    );
  };

  const handleEventClick = () => {};

  const handleEventMouseEnter = (mouseEnterInfo: EventHoveringArg) => {
    const eventEl = eventInPopover.inPopover
      ? eventInPopover.eventEl
      : (mouseEnterInfo.el as HTMLDivElement);
    const eventInfo = eventInPopover.inPopover
      ? eventInPopover.eventInfo
      : (mouseEnterInfo.event as TEventImpl);

    if (eventInfo?._def.extendedProps.item.Type !== 'Verfügbar') {
      setTimeout(
        () =>
          setEventInPopover({
            eventEl,
            eventInfo,
            inPopover: false,
            inEl: true
          }),
        100
      );
    }
  };

  const handleEventMouseLeave = () => {
    setTimeout(
      () =>
        setEventInPopover({
          eventEl: eventInPopover.inPopover ? eventInPopover.eventEl : null,
          eventInfo: eventInPopover.eventInfo,
          inPopover: eventInPopover.inPopover,
          inEl: false
        }),
      100
    );
  };

  const handlePopoverMouseEnter = () => {
    setEventInPopover({
      eventEl: eventInPopover.eventEl,
      eventInfo: eventInPopover.eventInfo,
      inPopover: true,
      inEl: false
    });
  };

  const handlePopoverMouseLeave = () => {
    setTimeout(
      () =>
        setEventInPopover({
          eventEl: eventInPopover.inEl ? eventInPopover.eventEl : null,
          eventInfo: eventInPopover.eventInfo,
          inPopover: false,
          inEl: eventInPopover.inEl
        }),
      100
    );
  };

  const handleDateChange = (objInfo: any) => {
    const calendar = objInfo.view.calendar;
    if (objInfo.view.type === EViewType.Week && currentViewType === EViewType.WorkWeek) {
      calendar.setOption('weekends', false);
    } else {
      calendar.setOption('weekends', weekendIndicator);
    }
    switch (currentViewType) {
      case EViewType.Day:
        setCurrentViewType(EViewType.Day);
        document.getElementsByClassName('fc-dailyView-button')[0].classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long', Month: 'long', day: 'numeric' });
        fillEvents();
        break;
      case EViewType.Week:
        setCurrentViewType(EViewType.Week);
        document
          .getElementsByClassName('fc-weeklyView-button')[0]
          .classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long', Month: 'long', day: 'numeric' });
        fillEvents();
        break;
      case EViewType.WorkWeek:
        setCurrentViewType(EViewType.WorkWeek);
        document
          .getElementsByClassName('fc-workingWeekView-button')[0]
          .classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long', Month: 'long', day: 'numeric' });
        fillEvents();
        break;
      default:
      case EViewType.Month:
        setCurrentViewType(EViewType.Month);
        document
          .getElementsByClassName('fc-MonthlyView-button')[0]
          .classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long' });
        fillEvents();
        break;
    }
    localStorage.setItem('fullcalendar', JSON.stringify(objInfo));
  };

  const onViewButtonClick = (event: any, viewType: EViewType) => {
    if (calendarRef) {
      const cal: any = calendarRef.current;
      const calendarAPI = cal.getApi();
      const view = viewType === EViewType.WorkWeek ? EViewType.Week : viewType;
      setCurrentViewType(viewType);
      calendarAPI.changeView(view);
      const viewButtons = (event.target as HTMLElement).parentNode?.children;
      for (const button of viewButtons || []) {
        if (!event.target.isEqualNode(button)) button.classList.remove('fc-button-active');
      }
    }
  };

  const openPreviewEventOnClick = () => {
    const eventInfoObj = eventInPopover.eventInfo?._def.extendedProps.item;
    getPConnect().getActionsApi().showCasePreview(eventInfoObj.TerminID, {
      caseClassName: eventInfoObj.Termin.pxObjClass
    });
  };

  const calTable = document.body.querySelector('.fc');
  if (calTable) {
    (calTable as HTMLElement).style.setProperty('opacity', isLoading ? '0.25' : '1');
  }

  return (
    <StyledCalendarWrapper theme={theme}>
      <GlobalStyles theme={theme} />
      <Card>
        <CardHeader
          actions={
            createClassname ? (
              <Button variant='simple' label='Create new event' icon compact onClick={addNewEvent}>
                <Icon name='plus' />
              </Button>
            ) : undefined
          }
        >
          <Text variant='h2'>{heading}</Text>
        </CardHeader>
        <CardContent>
          <FullCalendar
            ref={calendarRef}
            customButtons={{
              dailyView: {
                text: 'Tag',
                click: event => onViewButtonClick(event, EViewType.Day)
              },
              weeklyView: {
                text: 'Woche',
                click: event => onViewButtonClick(event, EViewType.Week)
              },
              workingWeekView: {
                text: 'Arbeitswoche',
                click: event => onViewButtonClick(event, EViewType.WorkWeek)
              },
              MonthlyView: {
                text: 'Monat',
                click: event => onViewButtonClick(event, EViewType.Month)
              }
            }}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: `MonthlyView weeklyView workingWeekView dailyView`
            }}
            plugins={[dayGridPlugin, timeGridPlugin, momentPlugin]}
            initialView={currentViewType}
            selectable
            nowIndicator={nowIndicator}
            weekends={weekendIndicator}
            expandRows
            allDayText='Ganztags'
            slotMinTime='06:00:00'
            slotMaxTime='21:00:00'
            height={currentViewType.indexOf('Week') > 0 ? 1600 : 'auto'}
            contentHeight={currentViewType.indexOf('Week') > 0 ? 1600 : 'auto'}
            slotEventOverlap={false}
            events={events}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            eventMouseEnter={handleEventMouseEnter}
            eventMouseLeave={handleEventMouseLeave}
            datesSet={handleDateChange}
            eventTextColor='#fff'
            eventTimeFormat={{
              hour: 'numeric',
              minute: '2-digit',
              meridiem: false
            }}
            eventDisplay='block'
            slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
            firstDay={1}
            businessHours={{
              // days of week. an array of zero-based day of week integers (0=Sunday)
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: '06:00', // a start time
              endTime: '21:00' // an end time
            }}
            selectConstraint='businessHours'
            // titleFormat={{ year: 'numeric', month: 'long', day: 'numeric' }}
            titleFormat={
              currentViewType === EViewType.Day
                ? 'dddd, DD. MMMM YYYY'
                : { year: 'numeric', month: 'long', day: 'numeric' }
            }
            locale='de'
            dayHeaderFormat={{ weekday: 'long', day: 'numeric' }}
            buttonText={{ today: 'Heute', month: 'Monat', week: 'Woche', day: 'Tag' }}
          />
          {isLoading && (
            <div className='loading-indicator'>
              <p>
                <span>Lade Daten, bitte warten...</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Popover
        show={!!eventInPopover?.eventEl && !!eventInPopover?.eventInfo}
        target={eventInPopover.eventEl}
        portal={false}
        arrow
        showDelay='short'
        placement='right'
        onMouseEnter={handlePopoverMouseEnter}
        onMouseLeave={handlePopoverMouseLeave}
        className='event-popover'
      >
        <Card>
          <CardHeader>
            <Grid
              container={{
                alignItems: 'center',
                cols: 'auto auto',
                colGap: 1
              }}
            >
              <span
                className='event-indicator'
                style={{ backgroundColor: eventInPopover.eventInfo?._def.ui.backgroundColor }}
              ></span>
              <Text variant='h3'>{eventInPopover.eventInfo?._def.title}</Text>
              {(eventInPopover.eventInfo?._def.extendedProps.item.Type === EEventType.Appointment ||
                eventInPopover.eventInfo?._def.extendedProps.item.Type ===
                  EEventType.MassEvent) && (
                <>
                  <div></div>
                  <Text variant='secondary'>
                    {eventInPopover.eventInfo?._def.extendedProps.item.TerminID}
                  </Text>
                </>
              )}
            </Grid>
          </CardHeader>
          <hr className='solid'></hr>
          <CardContent>
            <Grid
              container={{
                alignItems: 'center',
                cols: 'auto auto',
                colGap: 1,
                rowGap: 1
              }}
            >
              <Icon
                name='calendar-empty-solid'
                role='img'
                aria-label='calendar icon'
                size='s'
                className='icon'
              />
              <Text variant='primary' className='event-label'>
                {getDateTimeFromIsoString(
                  eventInPopover.eventInfo?._def.extendedProps.item.StartTime,
                  EDateTimeType.date,
                  {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}
              </Text>
              <Icon
                name='clock-solid'
                role='img'
                aria-label='clock icon'
                size='s'
                className='icon'
              />
              {eventInPopover.eventInfo?._def.extendedProps.item.CompleteDay ? (
                <Text variant='primary' className='event-label'>
                  Ganzer Tag
                </Text>
              ) : (
                <Text variant='primary' className='event-label'>
                  {getDateTimeFromIsoString(
                    eventInPopover.eventInfo?._def.extendedProps.item.StartTime,
                    EDateTimeType.time
                  )}
                  {' - '}
                  {getDateTimeFromIsoString(
                    eventInPopover.eventInfo?._def.extendedProps.item.EndTime,
                    EDateTimeType.time
                  )}
                </Text>
              )}

              {eventInPopover.eventInfo?._def.extendedProps.item.Type ===
                EEventType.Appointment && (
                <>
                  <Icon
                    name='wizard-solid'
                    role='img'
                    aria-label='Beratungsart'
                    size='s'
                    className='icon'
                  />
                  {renderBeratungsartBadge(
                    eventInPopover.eventInfo?._def.extendedProps.item.Termin.Beratungsart
                  )}
                </>
              )}
              {eventInPopover.eventInfo?._def.extendedProps.item.Sammeltermin && (
                <>
                  <Icon
                    name='location-solid'
                    role='img'
                    aria-label='location icon'
                    size='s'
                    className='icon'
                  />
                  <Flex container={{ direction: 'column', alignItems: 'start' }}>
                    <Text variant='primary' className='event-label'>
                      {
                        eventInPopover.eventInfo._def.extendedProps.item.Sammeltermin.Address
                          .Strasse
                      }{' '}
                      {
                        eventInPopover.eventInfo._def.extendedProps.item.Sammeltermin.Address
                          .Hausnummer
                      }
                      ,
                    </Text>
                    <Text variant='primary' className='event-label'>
                      {eventInPopover.eventInfo._def.extendedProps.item.Sammeltermin.Address.PLZ}{' '}
                      {eventInPopover.eventInfo._def.extendedProps.item.Sammeltermin.Address.Ort}
                    </Text>
                  </Flex>
                  <Icon name='users-solid' role='img' aria-label='group icon' size='s' />
                  <Flex container={{ direction: 'column', alignItems: 'start' }}>
                    <Text variant='primary' className='event-label'>
                      {
                        eventInPopover.eventInfo._def.extendedProps.item.Sammeltermin
                          .GenutzteKapazitat
                      }
                      /{eventInPopover.eventInfo._def.extendedProps.item.Sammeltermin.Kapazitaet}{' '}
                      Kapazität
                    </Text>
                  </Flex>
                </>
              )}
              {eventInPopover.eventInfo?._def.extendedProps.item.Beratungsstelle?.Typ && (
                <>
                  {getTypeIcon(
                    eventInPopover.eventInfo._def.extendedProps.item.Beratungsstelle?.Typ
                  )}
                  <Text variant='primary' className='event-label'>
                    {eventInPopover.eventInfo?._def.extendedProps.item.Beratungsstelle?.Typ}
                  </Text>
                </>
              )}
            </Grid>
          </CardContent>
          {(eventInPopover.eventInfo?._def.extendedProps.item.Type === EEventType.Appointment ||
            eventInPopover.eventInfo?._def.extendedProps.item.Type === EEventType.MassEvent) && (
            <>
              <hr className='solid'></hr>
              <CardFooter justify='center'>
                <Button variant='primary' compact onClick={openPreviewEventOnClick}>
                  Open
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </Popover>
    </StyledCalendarWrapper>
  );
};

export default withConfiguration(PegaUidCalendar);
