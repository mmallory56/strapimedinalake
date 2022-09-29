'use strict';

/**
 * strapi-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-listing.strapi-listing');
