'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function (_ref) {
   var uri = _ref.uri;
   var onCatch = _ref.onCatch;

   return Promise.resolve().then(function () {
      return fetch(uri);
   }).then(function (response) {
      var status = response.status;
      var statusText = response.statusText;

      if (status >= 200 && status <= 400) {
         return response.json();
      } else if (status > 400 && status < 500) {
         throw { errCaption: 'Request Error', message: status + ' : ' + statusText };
      } else if (status >= 500 && status < 600) {
         throw { errCaption: 'Response Error', message: status + ' : ' + statusText };
      }
   }).then(function (json) {
      return json;
   }).catch(function (error) {
      onCatch({ error: error });
   });
};
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\network\fnFetchJson.js.map