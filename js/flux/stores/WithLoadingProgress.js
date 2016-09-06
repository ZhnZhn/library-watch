'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL = 'WITH_LOADING_PROGRESS';

var WithLoadingProgress = {
  listenLoadingProgress: function listenLoadingProgress(fnHandler) {
    var _this = this;

    this.emitter.addListener(CHANNEL, fnHandler);
    return function () {
      _this.emitter.removeListener(CHANNEL, fnHandler);
    };
  },
  triggerLoadingProgress: function triggerLoadingProgress(actionType) {
    this.emitter.emit(CHANNEL, actionType);
  }
};

exports.default = WithLoadingProgress;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\stores\WithLoadingProgress.js.map