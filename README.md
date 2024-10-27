# expo-alarm
> This is not an official Expo SDK package.

## Overview

Expo Alarm is a React Native/Expo library that allows you to interact with the Android AlarmClock functionality in your mobile app. It provides a set of functions to manage alarms and timers seamlessly.

## Platform Compatibility

| Platform          | Android Device | Android Emulator | iOS Device | iOS Simulator | Web     |
| ----------------- | -------------- | ----------------- | ---------- | ------------- | ------- |
| **Compatibility** | ✅          | ✅             | ❌       | ❌          | ❌    |

## Installation

To use expo-alarm in your project, install it via npm:

```bash
npm install expo-alarm
```

or

```bash
yarn add expo-alarm
```

## Usage

### Dismiss Alarm
>```(params: DismissAlarmParams) => Promise<AlarmResult>```

Dismiss a currently active alarm. [Android Reference](https://developer.android.com/reference/kotlin/android/provider/AlarmClock#ACTION_DISMISS_ALARM:kotlin.String)

```typescript
import { dismissAlarm, DismissAlarmParams } from 'expo-alarm';

const dismissAlarmParams: DismissAlarmParams = {
  //searchMode: 'android.all',
  //extra: { customData: 'exampleData' },
};

dismissAlarm(dismissAlarmParams);
```

### Dismiss Timer
>```(params: DismissTimerParams) => Promise<AlarmResult>```

Dismiss a currently active timer. [Android Reference](https://developer.android.com/reference/kotlin/android/provider/AlarmClock#ACTION_DISMISS_TIMER:kotlin.String)

```typescript
import { dismissTimer, DismissTimerParams } from 'expo-alarm';

const dismissTimerParams: DismissTimerParams = {
  //extra: { customData: 'exampleData' },
};

dismissTimer(dismissTimerParams);
```

### Set Alarm
>```(params: SetAlarmParams) => Promise<AlarmResult>```

Set a new alarm. [Android Reference](https://developer.android.com/reference/kotlin/android/provider/AlarmClock#ACTION_SET_ALARM:kotlin.String)

```typescript
import { setAlarm, SetAlarmParams } from 'expo-alarm';

const setAlarmParams: SetAlarmParams = {
  hour: 8,
  minutes: 30,
  days: [1, 2, 3],
  message: 'Wake up!',
  //ringtoneUri: 'exampleRingtoneUri',
  vibrate: true,
  skipUi: false,
  //extra: { customData: 'exampleData' },
};

setAlarm(setAlarmParams);
```

### Show Alarms
>```(params: ShowAlarmsParams) => Promise<AlarmResult>```

Show the list of alarms. [Android Reference](https://developer.android.com/reference/kotlin/android/provider/AlarmClock#ACTION_SHOW_ALARMS:kotlin.String)

```typescript
import { showAlarms, ShowAlarmsParams } from 'expo-alarm';

const showAlarmsParams: ShowAlarmsParams = {
  //extra: { customData: 'exampleData' },
};

showAlarms(showAlarmsParams);
```

### Show Timers
>```(params: ShowTimersParams) => Promise<AlarmResult>```

Show the list of timers. [Android Reference](https://developer.android.com/reference/kotlin/android/provider/AlarmClock#ACTION_SHOW_TIMERS:kotlin.String)

```typescript
import { showTimers, ShowTimersParams } from 'expo-alarm';

const showTimersParams: ShowTimersParams = {
  //extra: { customData: 'exampleData' },
};

showTimers(showTimersParams);
```

### Snooze Alarm
>```(params: SnoozeAlarmParams) => Promise<AlarmResult>```

Snooze a currently active alarm. [Android Reference](https://developer.android.com/reference/kotlin/android/provider/AlarmClock#ACTION_SNOOZE_ALARM:kotlin.String)

```typescript
import { snoozeAlarm, SnoozeAlarmParams } from 'expo-alarm';

const snoozeAlarmParams: SnoozeAlarmParams = {
  snoozeDuration: 10,
  //extra: { customData: 'exampleData' },
};

snoozeAlarm(snoozeAlarmParams);
```

### Set Timer
>```(params: SetTimerParams) => Promise<AlarmResult>```

Set a new timer. [Android Reference](https://developer.android.com/reference/kotlin/android/provider/AlarmClock#ACTION_SET_TIMER:kotlin.String)

```typescript
import { setTimer, SetTimerParams } from 'expo-alarm';

const setTimerParams: SetTimerParams = {
  seconds: 300,
  message: 'Countdown',
  skipUi: false,
  //extra: { customData: 'exampleData' }, //OPTIONAL
};

setTimer(setTimerParams);
```

### References

- [Android AlarmClock Documentation](https://developer.android.com/reference/kotlin/android/provider/AlarmClock)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
