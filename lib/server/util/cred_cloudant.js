/**
*  IBM Confidential
*
*  OCO Source Materials
*
*  5799-MA4
*
*  © Copyright IBM Corp. 2017
*
*  The source code for this program is not published or otherwise divested of its trade secrets,
*  irrespective of what has been deposited with the U.S. Copyright Office.
*/

'use strict';

const RETRY_ATTEMPTS = process.env.RETRY_ATTEMPTS || 5;
const RETRY_TIMEOUT = process.env.RETRY_TIMEOUT || 1000;
const

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
