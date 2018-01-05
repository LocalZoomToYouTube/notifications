// https://www.npmjs.com/package/node-notifier-fixed

// It works after much Coffee and many laughs
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
  // Assuming some sort of input functionality could be placed here.
});

options.on('click', function (notifierObject, options) {
  // Triggers if `wait: true` and user clicks notification
});

options.on('timeout', function (notifierObject, options) {
  // Triggers if `wait: true` and notification closes
});

// If windows 1709 wasn't such a pain I might've pressed onward into attempting to create an interactive notification.
// Definitely like this idea and want to continue plugging at it
