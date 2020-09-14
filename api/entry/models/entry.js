"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(result) {
      const fetchHazard = await strapi
        .query("type")
        .findOne({ model: result.user_prediction });
      const actual_result = fetchHazard ? fetchHazard.hazmat : "";
      result.actual_result = actual_result;
    },
  },
};
