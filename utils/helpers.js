import { AsyncStorage } from "react-native";
// import { Permissions } from "expo-permissions";
import { Notifications } from "expo";
import * as Permissions from 'expo-permissions';

const NOTIFCATION_KEY = "UdaciCards:notifications";

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFCATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function createNotification() {
  return {
    title: "Take a quiz today!",
    body: "Don't forget to test your knowledge today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export async function setLocalNotification() {

    const { status, permissions } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    AsyncStorage.getItem(NOTIFCATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {

          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            });

            AsyncStorage.setItem(NOTIFCATION_KEY, JSON.stringify(true));
          }
      }
    });
}
