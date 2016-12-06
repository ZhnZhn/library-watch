'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Logic = {
  sendItemEvent: function sendItemEvent(_ref) {
    var eventAction = _ref.eventAction;
    var eventLabel = _ref.eventLabel;

    /* eslint-disable no-undef */
    if (window && window.ga && eventLabel) {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Item',
        eventAction: eventAction,
        eventLabel: eventLabel,
        eventValue: 1
      });
    }
    /* eslint-enable no-undef */
  }
};

var AnalyticSlice = {
  analyticSendEvent: function analyticSendEvent(option) {
    _Logic.sendItemEvent(option);
  }
};

exports.default = AnalyticSlice;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\stores\AnalyticSlice.js.map