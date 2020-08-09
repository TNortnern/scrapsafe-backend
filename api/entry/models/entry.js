"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      const actual_result = strapi.services["csv-handler"].getType();
      const entry = await strapi
        .query("entry")
        .update({ id: result.id }, { actual_result });
      console.log("entry", entry);
    },
  },
};
