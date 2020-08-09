"use strict";

/**
 * `csv-handler` service.
 */

module.exports = {
  // exampleService: (arg1, arg2) => {
  //   return isUserOnline(arg1, arg2);
  // }
  getType: () => {
    const options = ["Hazardous", "Not-Hazardous", "None"];
    return options[Math.floor(Math.random() * options.length)];
  },
};
