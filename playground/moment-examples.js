const moment = require("moment");

console.log(moment().format());

const now = moment();

console.log("Current timestamp:", now.unix());

const timestamp = 1498407111;
const currentMoment = moment.unix(timestamp);

console.log("current moment:", currentMoment.format("MMM D, YY @ h:mm a"));

console.log("formatted moment:", currentMoment.format("MMMM Do, YYYY @ h:mm A"));