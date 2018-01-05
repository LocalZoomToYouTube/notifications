// https://www.npmjs.com/package/node-notifier
// Message Params(options)
const options = {
  title: 'I am a Big Ugly Notification',
  message: `I am ${process.env.USERNAME}t?`,
  sound: true,
  wait: false,
  time: 5000,
  type: 'info',
  withFallback: false, // Should check for Growl first otherwise use OS dependant option 
}

// WILL not work in Win10 version 1709
const WindowsToaster = require('node-notifier/notifiers/toaster'); 
new WindowsToaster(options).notify(options);

// MacOS
const NotificationCenter = require('node-notifier/notifiers/notificationcenter');
new NotificationCenter(options).notify(options);

// Linux
const NotifySend = require('node-notifier/notifiers/notifysend');
new NotifySend(options).notify(options);

// If Growl Installed
const Growl = require('node-notifier/notifiers/growl');
new Growl(options).notify(options);

// Use for Win10 version 1709
const WindowsBalloon = require('node-notifier/notifiers/balloon'); 
new WindowsBalloon(options).notify(options);