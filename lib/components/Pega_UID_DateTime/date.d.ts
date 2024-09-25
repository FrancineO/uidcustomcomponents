export function datetimedisplayformatter(formatter: any): {
    variantVal: string;
    formatVal: string;
};
export function formatExists(formatterVal: any): boolean;
export function getDayJSObject(text: string): object;
export function getRelativeTime(time: string): object;
export function getFullYear(value: string): number;
export function getMaxDate(nextYears: number, currentYear: number, yearFromValue: number): string;
export function getMinDate(previousYears: number, currentYear: number, yearFromValue: number): string;
export function parseClockFormat(clockFormat: number | string): number;
export function correctDateTimeToSeconds(datetime: string, withSeconds: boolean): string;
export function timeCorrectedToSeconds(datetime: string, withSeconds: boolean): string;
export function datetimeFireChangeBlurEvents(errorState: string | undefined, actualValue: string, formattedValue: string, actions: object, propName: string, pConn: object): void;
export function getDateFormat(locale: string, options: object): string;
export function is12HClockFormat(locale: string): boolean;
export function getTimeOptions(withSeconds: boolean, is12h?: boolean): object;
export function getDateTimeOptions(withSeconds: boolean, is12h?: boolean): object;
//# sourceMappingURL=date.d.ts.map