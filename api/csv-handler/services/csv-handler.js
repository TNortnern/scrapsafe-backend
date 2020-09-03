"use strict";

/**
 * `csv-handler` service.
 */

module.exports = {
  // exampleService: (arg1, arg2) => {
  //   return isUserOnline(arg1, arg2);
  // }
  async upload () {
    const fd = new FormData();
    await axios.post("https://micro-csv.herokuapp.com/data", fd);
  },
  getType: async () => {
    const options = ["Hazardous", "Not-Hazardous", "None"];
    return options[Math.floor(Math.random() * options.length)];
  },
};
