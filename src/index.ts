import { UnavailabilityError } from "expo-modules-core";

import {
  AlarmResult,
  DismissAlarmParams,
  DismissTimerParams,
  SetAlarmParams,
  SetTimerParams,
  ShowAlarmsParams,
  ShowTimersParams,
  SnoozeAlarmParams,
} from "./ExpoAlarm.types";
import ExpoAlarmModule from "./ExpoAlarmModule";

export async function dismissAlarm(
  params: DismissAlarmParams = {},
): Promise<AlarmResult> {
  if (!ExpoAlarmModule) {
    throw new UnavailabilityError("ExpoAlarmModule", "dismissAlarm");
  }
  return ExpoAlarmModule.dismissAlarm(params);
}

export async function dismissTimer(
  params: DismissTimerParams = {},
): Promise<AlarmResult> {
  if (!ExpoAlarmModule) {
    throw new UnavailabilityError("ExpoAlarmModule", "dismissTimer");
  }
  return ExpoAlarmModule.dismissTimer(params);
}

export async function setAlarm(
  params: SetAlarmParams = {},
): Promise<AlarmResult> {
  if (!ExpoAlarmModule) {
    throw new UnavailabilityError("ExpoAlarmModule", "setAlarm");
  }
  return ExpoAlarmModule.setAlarm(params);
}

export async function showAlarms(
  params: ShowAlarmsParams = {},
): Promise<AlarmResult> {
  if (!ExpoAlarmModule) {
    throw new UnavailabilityError("ExpoAlarmModule", "showAlarms");
  }
  return ExpoAlarmModule.showAlarms(params);
}

export async function showTimers(
  params: ShowTimersParams = {},
): Promise<AlarmResult> {
  if (!ExpoAlarmModule) {
    throw new UnavailabilityError("ExpoAlarmModule", "showTimers");
  }
  return ExpoAlarmModule.showTimers(params);
}

export async function snoozeAlarm(
  params: SnoozeAlarmParams = {},
): Promise<AlarmResult> {
  if (!ExpoAlarmModule) {
    throw new UnavailabilityError("ExpoAlarmModule", "snoozeAlarm");
  }
  return ExpoAlarmModule.snoozeAlarm(params);
}

export async function setTimer(
  params: SetTimerParams = {},
): Promise<AlarmResult> {
  if (!ExpoAlarmModule) {
    throw new UnavailabilityError("ExpoAlarmModule", "setTimer");
  }
  return ExpoAlarmModule.setTimer(params);
}
