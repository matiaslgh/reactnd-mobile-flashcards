import React from 'react'
import { Permissions, Notifications } from 'expo'
import { AsyncStorage } from 'react-native'

export const NOTIFICATION_KEY = 'FlashCards:notifications'

export const  clearLocalNotification = () =>
  AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)

const createNotification = () => ({
  title: "Let's study!",
  body: "Don't forget to review your flash cards for today!",
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
})

export const setLocalNotification = () =>
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(00)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })