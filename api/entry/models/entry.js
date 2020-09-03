"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      console.log('he')
      const fetchHazard = await strapi
        .query("type")
        .findOne({ model: result.user_prediction });
        console.log('fetchHazard', fetchHazard)
      const actual_result = fetchHazard.hazmat
      const entry = await strapi
        .query("entry")
        .update({ id: result.id }, { actual_result });
      console.log("entry", entry);
    },
  },
};
