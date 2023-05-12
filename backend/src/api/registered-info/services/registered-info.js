'use strict';

/**
 * registered-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::registered-info.registered-info');
