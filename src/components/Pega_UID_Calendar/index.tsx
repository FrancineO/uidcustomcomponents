import { useEffect, useRef, useState } from 'react';
import type { EventContentArg, EventClickArg, EventHoveringArg } from '@fullcalendar/core';
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
  Popover
} from '@pega/cosmos-react-core';
import StyledCalendarWrapper from './styles';
import './create-nonce';
import GlobalStyles from './global-styles';
import type { CalendarApi } from '@fullcalendar/core';

type EventImpl = Parameters<CalendarApi['addEvent']>[0];

enum ViewType {
  Day = 'timeGridDay',
  Week = 'timeGridWeek',
  WorkWeek = 'workingWeek',
  Month = 'dayGridMonth'
}

enum TerminGoal {
  FirstContact = 'Erstberatung',
  FollowUp = 'Folgeberatung',
  ApplicationSubmission = 'Bewerbungsabgabe'
}

enum EventType {
  Absence = 'Abwesend',
  Availability = 'Verfügbar',
  Appointment = 'Termin',
  MassEvent = 'Sammel'
}

enum dateTimeType {
  date = 'date',
  time = 'time'
}

type CalendarProps = {
  heading: string;
  dataPage: string;
  createClassname?: string;
  defaultViewMode: 'Monthly' | 'Weekly' | 'Daily';
  nowIndicator: boolean;
  weekendIndicator: boolean;
  getPConnect: any;
};

type Event = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  item: any;
  display: string;
  allDay?: boolean;
  color: string;
  extendedProps?: { [key: string]: any };
};

type DateInfo = {
  view: { type: ViewType };
  startStr?: string;
  start?: Date;
  end?: Date;
};

export const PegaUidCalendar = (props: CalendarProps) => {
  const {
    heading = '',
    dataPage = '',
    createClassname = '',
    defaultViewMode = 'Monthly',
    nowIndicator = true,
    weekendIndicator = true,
    getPConnect
  } = props;
  const [events, setEvents] = useState<Array<Event>>([]);
  // const [workingWeek, setWorkingWeek] = useState<boolean>(false);
  const calendarRef = useRef<any | null>(null);
  const theme = useTheme();
  let dateInfo: DateInfo = { view: { type: ViewType.Month } };
  const dateInfoStr = localStorage.getItem('fullcalendar');
  if (dateInfoStr) {
    dateInfo = JSON.parse(dateInfoStr);
    if (dateInfo.view.type === ViewType.Month && dateInfo.end && dateInfo.start) {
      /* If showing Month - find the date in the middle to get the Month */
      const endDate = new Date(dateInfo.end).valueOf();
      const startDate = new Date(dateInfo.start).valueOf();
      const middle = new Date(endDate - (endDate - startDate) / 2);
      dateInfo.startStr = `${middle.toISOString().substring(0, 7)}-01`;
    }
  }

  const [eventInPopover, setEventInPopover] = useState<{
    eventEl: HTMLDivElement | null;
    eventInfo: EventImpl | null;
  }>({ eventEl: null, eventInfo: null });

  const getDateTimeFromIsoString = (
    isoString: string,
    dateOrTime: dateTimeType,
    options: any = {},
    locale: string = 'de-DE'
  ) => {
    const dateTime = new Date(isoString);
    return dateOrTime === dateTimeType.date
      ? dateTime.toLocaleDateString(locale, options)
      : dateTime.toLocaleTimeString(locale, { ...options, hour: '2-digit', minute: '2-digit' });
  };

  const getDefaultView = (): ViewType => {
    if (dateInfo?.view?.type) {
      /* If the context is persisted in session storage - then used this info as default view */
      return dateInfo.view.type;
    }
    let defaultView: ViewType;
    switch (defaultViewMode) {
      case 'Weekly':
        defaultView = ViewType.Week;
        break;
      case 'Daily':
        defaultView = ViewType.Day;
        break;
      default:
      case 'Monthly':
        defaultView = ViewType.Month;
        break;
    }
    return defaultView;
  };
  const [currentViewType, setCurrentViewType] = useState<ViewType>(getDefaultView());

  const addNewEvent = () => {
    if (createClassname) {
      getPConnect().getActionsApi().createWork(createClassname, {
        openCaseViewAfterCreate: false
      });
    }
  };

  const renderEventContent = (eventInfo: EventContentArg) => {
    const def = eventInfo.event._def;
    const obj = def.extendedProps.item;
    const isMonthlyView = currentViewType === ViewType.Month;
    let eventDateStr = `${getDateTimeFromIsoString(obj.StartTime, dateTimeType.time)}`;
    eventDateStr += `-${getDateTimeFromIsoString(obj.EndTime, dateTimeType.time)}`;
    let statusVariant: StatusProps['variant'] = 'info';
    if (obj.Type === EventType.Appointment) {
      switch (obj.Termin.Beratungsart) {
        case TerminGoal.ApplicationSubmission:
          statusVariant = 'success';
          break;
        case TerminGoal.FollowUp:
          statusVariant = 'pending';
          break;
        default:
        case TerminGoal.FirstContact:
          statusVariant = 'info';
          break;
      }
    }
    const eventLabel =
      isMonthlyView && !obj.CompleteDay
        ? `${eventDateStr} ${eventInfo.event.title}`
        : eventInfo.event.title;
    return (
      <>
        <Text variant='h5' className='event-label'>
          {eventLabel}
        </Text>
        {obj.Type === EventType.Appointment && (
          <Status className='event-subject' variant={statusVariant}>
            {obj.Termin.Beratungsart}
          </Status>
        )}
        {obj.Type === EventType.MassEvent && (
          <>
            <Icon name='location-solid' role='img' aria-label='Custom icon' size='s' />
            <Text variant='primary' className='event-label'>
              {obj.Sammeltermin.Address.Ort}
            </Text>
          </>
        )}
      </>
    );
  };

  const loadEvents = () => {
    (window as any).PCore.getDataApiUtils()
      .getData(dataPage, {})
      .then((response: any) => {
        console.log(response);
        if (response.data.data !== null) {
          const tmpevents: Array<Event> = [];
          response.data.data.forEach((item: any) => {
            let color: string;
            let display = 'block';
            let title = '';
            switch (item.Type) {
              case EventType.Availability:
                color = theme.base.colors.green.light;
                display = 'background';
                title = item.Type;
                break;
              case EventType.Appointment:
                color = theme.base.colors.blue.dark;
                title = `${item.Termin.Contact.FullName}`;
                break;
              case EventType.Absence:
                color = theme.base.colors.red.dark;
                title = item.Subject;
                break;
              default:
              case EventType.MassEvent:
                color = theme.base.colors.orange.dark;
                title = item.Subject;
                break;
            }
            // if (item.CompleteDay) {
            //   item.StartTime = '06:00:00';
            //   item.EndTime = '21:00:00';
            // }

            tmpevents.push({
              id: item.pyGUID,
              title,
              start: item.StartTime,
              end: item.EndTime,
              display,
              color,
              allDay: item.CompleteDay,
              item
            });
          });
          setEvents(tmpevents);
        }
      });
  };

  const handleEventClick = (eventClickInfo: EventClickArg) => {
    const eventDetails = eventClickInfo.event.extendedProps;
    getPConnect()
      .getActionsApi()
      .openWorkByHandle(eventDetails.item.pyGUID, eventDetails.item.pxObjClass);
  };

  const handleEventMouseEnter = (mouseEnterInfo: EventHoveringArg) => {
    setEventInPopover({
      eventEl: mouseEnterInfo.el as HTMLDivElement,
      eventInfo: mouseEnterInfo.event as EventImpl
    });
  };

  const handleEventMouseLeave = () => {
    setEventInPopover({ eventEl: null, eventInfo: null });
  };

  const handleDateChange = (objInfo: any) => {
    const calendar = objInfo.view.calendar;
    if (objInfo.view.type === ViewType.Week && currentViewType === ViewType.WorkWeek) {
      calendar.setOption('weekends', false);
    } else {
      calendar.setOption('weekends', weekendIndicator);
      // setWorkingWeek(false);
    }
    switch (currentViewType) {
      case ViewType.Day:
        setCurrentViewType(ViewType.Day);
        document.getElementsByClassName('fc-dailyView-button')[0].classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long', Month: 'long', day: 'numeric' });
        break;
      case ViewType.Week:
        setCurrentViewType(ViewType.Week);
        document
          .getElementsByClassName('fc-weeklyView-button')[0]
          .classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long', Month: 'long', day: 'numeric' });
        break;
      case ViewType.WorkWeek:
        setCurrentViewType(ViewType.WorkWeek);
        document
          .getElementsByClassName('fc-workingWeekView-button')[0]
          .classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long', Month: 'long', day: 'numeric' });
        break;
      default:
      case ViewType.Month:
        setCurrentViewType(ViewType.Month);
        document
          .getElementsByClassName('fc-MonthlyView-button')[0]
          .classList.add('fc-button-active');
        calendar.setOption('dayHeaderFormat', { weekday: 'long' });
        break;
    }
    localStorage.setItem('fullcalendar', JSON.stringify(objInfo));
  };

  const onViewButtonClick = (event: any, viewType: ViewType) => {
    if (calendarRef) {
      const cal: any = calendarRef.current;
      const calendarAPI = cal.getApi();
      // setWorkingWeek(viewType === ViewType.WorkWeek);
      const view = viewType === ViewType.WorkWeek ? ViewType.Week : viewType;
      // setCurrentView(viewType);
      setCurrentViewType(viewType);
      calendarAPI.changeView(view);
      const viewButtons = (event.target as HTMLElement).parentNode?.children;
      for (const button of viewButtons || []) {
        if (!event.target.isEqualNode(button)) button.classList.remove('fc-button-active');
      }
    }
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
                click: event => onViewButtonClick(event, ViewType.Day)
              },
              weeklyView: {
                text: 'Woche',
                click: event => onViewButtonClick(event, ViewType.Week)
              },
              workingWeekView: {
                text: 'Arbeitswoche',
                click: event => onViewButtonClick(event, ViewType.WorkWeek)
              },
              MonthlyView: {
                text: 'Monat',
                click: event => onViewButtonClick(event, ViewType.Month)
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
            height={800}
            contentHeight={800}
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
              currentViewType === ViewType.Day
                ? 'dddd, DD. MMMM YYYY'
                : { year: 'numeric', month: 'long', day: 'numeric' }
            }
            locale='de'
            dayHeaderFormat={{ weekday: 'long', day: 'numeric' }}
            buttonText={{ today: 'Heute', month: 'Monat', week: 'Woche', day: 'Tag' }}
          />
        </CardContent>
      </Card>

      <Popover
        show={!!eventInPopover?.eventEl && !!eventInPopover?.eventInfo}
        target={eventInPopover.eventEl}
        portal
        arrow
        showDelay='long'
        placement='right'
      >
        <Card>
          <CardContent>
            <Text variant='h3' className='event-label'>
              {eventInPopover.eventInfo?._def.title}
            </Text>
            <div>
              <Icon name='calendar-empty' role='img' aria-label='calendar icon' size='s' />
              <Text variant='primary' className='event-label'>
                {getDateTimeFromIsoString(
                  eventInPopover.eventInfo?._def.extendedProps.item.StartTime,
                  dateTimeType.date,
                  {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}
              </Text>
            </div>
            <div>
              <Icon name='clock' role='img' aria-label='clock icon' size='s' />
              <Text variant='primary' className='event-label'>
                {getDateTimeFromIsoString(
                  eventInPopover.eventInfo?._def.extendedProps.item.StartTime,
                  dateTimeType.time
                )}{' '}
                {getDateTimeFromIsoString(
                  eventInPopover.eventInfo?._def.extendedProps.item.EndTime,
                  dateTimeType.time
                )}
              </Text>
            </div>
          </CardContent>
        </Card>
      </Popover>
    </StyledCalendarWrapper>
  );
};

export default withConfiguration(PegaUidCalendar);
