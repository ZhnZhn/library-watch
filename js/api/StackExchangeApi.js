"use strict";

exports.__esModule = true;
exports.default = void 0;
var _strFn = require("../utils/strFn");
var _apiFn = require("./apiFn");
const BASE_URL = "https://api.stackexchange.com/2.2",
  DF_REQUEST_TYPE = 'SE_QUESTIONS';

// /questions/{ids}/linked Get the questions that link to the questions identified by a set of ids.
// /questions/{ids}/related Get the questions that are related to the questions identified by a set of ids.

const _rRequestTypeToUrl = {
  [DF_REQUEST_TYPE]: ({
    repo,
    sort = 'week',
    fromdate,
    todate
  }) => {
    return `${BASE_URL}/questions?page=1&pagesize=50&order=desc&fromdate=${fromdate}&todate=${todate}&sort=${sort}&tagged=${repo || 'css'}&site=stackoverflow`;
  },
  SE_SEARCH_QUESTIONS: ({
    repo = 'css',
    intitle = '',
    sort = 'activity',
    fromdate,
    todate
  }) => {
    if (!repo && !intitle) {
      repo = 'css';
    }
    return `${BASE_URL}/search?page=1&pagesize=50&order=desc&fromdate=${fromdate}&todate=${todate}&sort=${sort}&tagged=${repo}&intitle=${intitle}&site=stackoverflow`;
  }
};
const getRequestUrl = (0, _apiFn.fGetRequestUrl)(_rRequestTypeToUrl, DF_REQUEST_TYPE),
  checkResponse = json => {
    const {
      error_message,
      error_name = ''
    } = json || {};
    if (error_message) {
      throw (0, _apiFn.crErrMsg)((0, _strFn.setFirstToUpperCase)(error_name.replace('_', ' ')), (0, _strFn.setFirstToUpperCase)(error_message));
    }
  };
const StackExchangeApi = (0, _apiFn.crProviderApi)(getRequestUrl, checkResponse);
var _default = exports.default = StackExchangeApi;
//# sourceMappingURL=StackExchangeApi.js.map