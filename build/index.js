import { UnavailabilityError } from "expo-modules-core";
import ExpoAlarmModule from "./ExpoAlarmModule";
export async function dismissAlarm(params = {}) {
    if (!ExpoAlarmModule) {
        throw new UnavailabilityError("ExpoAlarmModule", "dismissAlarm");
    }
    return ExpoAlarmModule.dismissAlarm(params);
}
export async function dismissTimer(params = {}) {
    if (!ExpoAlarmModule) {
        throw new UnavailabilityError("ExpoAlarmModule", "dismissTimer");
    }
    return ExpoAlarmModule.dismissTimer(params);
}
export async function setAlarm(params = {}) {
    if (!ExpoAlarmModule) {
        throw new UnavailabilityError("ExpoAlarmModule", "setAlarm");
    }
    return ExpoAlarmModule.setAlarm(params);
}
export async function showAlarms(params = {}) {
    if (!ExpoAlarmModule) {
        throw new UnavailabilityError("ExpoAlarmModule", "showAlarms");
    }
    return ExpoAlarmModule.showAlarms(params);
}
export async function showTimers(params = {}) {
    if (!ExpoAlarmModule) {
        throw new UnavailabilityError("ExpoAlarmModule", "showTimers");
    }
    return ExpoAlarmModule.showTimers(params);
}
export async function snoozeAlarm(params = {}) {
    if (!ExpoAlarmModule) {
        throw new UnavailabilityError("ExpoAlarmModule", "snoozeAlarm");
    }
    return ExpoAlarmModule.snoozeAlarm(params);
}
export async function setTimer(params = {}) {
    if (!ExpoAlarmModule) {
        throw new UnavailabilityError("ExpoAlarmModule", "setTimer");
    }
    return ExpoAlarmModule.setTimer(params);
}
//# sourceMappingURL=index.js.map