'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  SVG: {
    padding: '3px'
  }
};

var SvgClose = function SvgClose(_ref) {
  var style = _ref.style,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    {
      className: 'svg-close',
      style: style,
      onClick: onClose
    },
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 12 12', width: '100%', height: '100%',
        style: STYLE.SVG,
        preserveAspectRatio: 'none', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement('path', { d: 'M 0,0 L 12,12', strokeWidth: '2', stroke: '#ED5813',
        strokeLinecap: 'round'
      }),
      _react2.default.createElement('path', { d: 'M 12,0 L 0,12', strokeWidth: '2', stroke: '#ED5813',
        strokeLinecap: 'round'
      })
    )
  );
};

process.env.NODE_ENV !== "production" ? SvgClose.propTypes = {
  style: _react.PropTypes.object,
  onClose: _react.PropTypes.func
} : void 0;
SvgClose.defaultProps = {
  onClose: function onClose() {}
};

exports.default = SvgClose;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\SvgClose.js.map