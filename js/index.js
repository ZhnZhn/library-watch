'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _AppGitHub = require('./components/AppGitHub');

var _AppGitHub2 = _interopRequireDefault(_AppGitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnRemoveSpinner = function _fnRemoveSpinner() {
  document.body.removeChild(document.getElementById('spinner'));
};

//import Highcharts from 'highcharts';
//import HighchartsMore from 'highcharts/lib/highcharts-more';
//import HighchartsTreemap from 'highcharts/lib/modules/treemap';

//import DOMPurify from 'purify';

//import TemplateCaption from './components/TemplateCaption';


(0, _reactDom.render)(_react2.default.createElement(_AppGitHub2.default, null), document.getElementById("app"), _fnRemoveSpinner);
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\index.js.map