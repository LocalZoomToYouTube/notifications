// https://www.npmjs.com/package/node-notifier
const options = require("node-notifier-fixed")
const path = require('path');

options.notify({
  title: 'I am a Big Ugly Notification',
  message: `I am ${process.env.USERNAME}t!`,
  icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
  sound: true, // Only Notification Center or Windows Toasters
  wait: true // Wait with callback, until user action is taken against notification
}, function (err, response) {
  // Response is response from notification
});

options.on('click', function (notifierObject, options) {
  // Triggers if `wait: true` and user clicks notification
});

options.on('timeout', function (notifierObject, options) {
  // Triggers if `wait: true` and notification closes
});
