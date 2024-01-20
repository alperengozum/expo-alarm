import * as ExpoAlarm from "expo-alarm";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Set Alarm"
        onPress={async (): Promise<void> => {
          const res = await ExpoAlarm.setAlarm({
            hour: 16,
            minutes: 30,
            message: "Alarm",
            vibrate: true
          });
          console.log(res);
        }}
      />
      <Button
        title="Dismiss Alarm"
        onPress={async () => {
          const res = await ExpoAlarm.dismissAlarm();
          console.log(res);
        }}
      />
      <Button
        title="Show Alarms"
        onPress={async (): Promise<void> => {
          const res = await ExpoAlarm.showAlarms();
          console.log(res);
        }}
      />
      <Button
        title="Snooze Alarm"
        onPress={async (): Promise<void> => {
          const res = await ExpoAlarm.snoozeAlarm();
          console.log(res);
        }}
      />
      <Button
        title="Set Timer"
        onPress={async (): Promise<void> => {
          const res = await ExpoAlarm.setTimer({
            seconds: 100,
            message: "Timer"
          });
          console.log(res);
        }}
      />
      <Button
        title="Dismiss Timer"
        onPress={async (): Promise<void> => {
          const res = await ExpoAlarm.dismissTimer();
          console.log(res);
        }}
      />
      <Button
        title="Show Timers"
        onPress={async (): Promise<void> => {
          const res = await ExpoAlarm.showTimers();
          console.log(res);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
