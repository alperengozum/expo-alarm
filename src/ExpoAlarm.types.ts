export interface Extra {
  extra?: Record<string, any>;
}

export interface DismissAlarmParams extends Extra {
  searchMode?: string;
}

export interface DismissTimerParams extends Extra {}

export interface SetAlarmParams extends Extra {
  hour?: number;
  minutes?: number;
  days?: number[];
  message?: string;
  ringtoneUri?: string;
  vibrate?: boolean;
  skipUi?: boolean;
}

export interface SetTimerParams extends Extra {
  seconds?: number;
  message?: string;
  skipUi?: boolean;
}

export interface ShowAlarmsParams extends Extra {}

export interface ShowTimersParams extends Extra {}

export interface SnoozeAlarmParams extends Extra {
  snoozeDuration?: number;
}

export interface AlarmResult {
  /**
   * Result code returned by the activity.
   */
  resultCode: ResultCode;
  /**
   * Optional data URI that can be returned by the activity.
   */
  data?: string;
  /**
   * Optional extras object that can be returned by the activity.
   */
  extra?: object;
}

export enum ResultCode {
  /**
   * Indicates that the activity operation succeeded.
   */
  Success = -1,
  /**
   * Means that the activity was canceled, e.g. by tapping on the back button.
   */
  Canceled = 0,
  /**
   * First custom, user-defined value that can be returned by the activity.
   */
  FirstUser = 1,
}