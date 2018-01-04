// https://www.npmjs.com/package/node-notifier
const thisisbananas = (`What the hay, ${process.env.USERNAME}?`);
const WindowsBalloon = require('node-notifier/notifiers/balloon');
new WindowsBalloon().notify(thisisbananas);

