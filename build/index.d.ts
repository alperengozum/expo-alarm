import { AlarmResult, DismissAlarmParams, DismissTimerParams, SetAlarmParams, SetTimerParams, ShowAlarmsParams, ShowTimersParams, SnoozeAlarmParams } from "./ExpoAlarm.types";
export declare function dismissAlarm(params?: DismissAlarmParams): Promise<AlarmResult>;
export declare function dismissTimer(params?: DismissTimerParams): Promise<AlarmResult>;
export declare function setAlarm(params?: SetAlarmParams): Promise<AlarmResult>;
export declare function showAlarms(params?: ShowAlarmsParams): Promise<AlarmResult>;
export declare function showTimers(params?: ShowTimersParams): Promise<AlarmResult>;
export declare function snoozeAlarm(params?: SnoozeAlarmParams): Promise<AlarmResult>;
export declare function setTimer(params?: SetTimerParams): Promise<AlarmResult>;
//# sourceMappingURL=index.d.ts.map