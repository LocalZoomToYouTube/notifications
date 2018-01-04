// https://www.npmjs.com/package/node-notifier
const thisisbananas = (`What the hay, ${process.env.USERNAME}?`);

const NotificationCenter = require('node-notifier/notifiers/notificationcenter');
new NotificationCenter().notify(thisisbananas);
 
const NotifySend = require('node-notifier/notifiers/notifysend');
new NotifySend().notify(thisisbananas);
 
const WindowsToaster = require('node-notifier/notifiers/toaster');
new WindowsToaster().notify(thisisbananas);
 
const Growl = require('node-notifier/notifiers/growl');
new Growl().notify(thisisbananas);
 
const WindowsBalloon = require('node-notifier/notifiers/balloon');
new WindowsBalloon().notify(thisisbananas);

