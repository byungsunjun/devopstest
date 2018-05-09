'use strict';

const RETRY_ATTEMPTS = process.env.RETRY_ATTEMPTS || 5;
const RETRY_TIMEOUT = process.env.RETRY_TIMEOUT || 1000;

const getCloudantCredentials = function() {
  let cloudantCred = {
    url: process.env.CLOUDANT_URL,
    plugin: 'retry',
    retryAttempts: RETRY_ATTEMPTS,
    retryTimeout: RETRY_TIMEOUT
  };

  return cloudantCred;
};

module.exports = {
  getCloudantCredentials
};
