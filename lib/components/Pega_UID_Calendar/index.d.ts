import './create-nonce';
import type { CalendarApi } from '@fullcalendar/core';
export declare type TEventImpl = Parameters<CalendarApi['addEvent']>[0];
export declare enum EViewType {
    Day = "timeGridDay",
    Week = "timeGridWeek",
    WorkWeek = "workingWeek",
    Month = "dayGridMonth"
}
export declare enum ETerminGoal {
    FirstContact = "Erstberatung",
    FollowUp = "Folgeberatung",
    ApplicationSubmission = "Bewerbungsabgabe"
}
export declare enum EEventType {
    Absence = "Abwesend",
    Availability = "Verf\u00FCgbar",
    Appointment = "Termin",
    MassEvent = "Sammel"
}
export declare enum EDateTimeType {
    date = "date",
    time = "time"
}
export declare enum EBeratungsTyp {
    presence = "Pr\u00E4senzberatung",
    online = "Online",
    phone = "Telefon",
    office = "Au\u00DFendienststelle"
}
export declare type TCalendarProps = {
    heading?: string;
    dataPage?: string;
    createClassname?: string;
    defaultViewMode?: 'Monthly' | 'Weekly' | 'Daily';
    nowIndicator?: boolean;
    weekendIndicator?: boolean;
    getPConnect: any;
};
export declare type TEvent = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    item: any;
    display: string;
    allDay?: boolean;
    overlap: boolean;
    color: string;
    extendedProps?: {
        [key: string]: any;
    };
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
export declare type TDateInfo = {
    view: {
        type: EViewType;
    };
    startStr?: string;
    start?: Date;
    end?: Date;
};
export declare const PegaUidCalendar: (props: TCalendarProps) => JSX.Element;
declare const _default: (props: TCalendarProps) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map