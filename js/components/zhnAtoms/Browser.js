'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerStyles = require('../styles/ContainerStyles');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_FOR_OPEN = "show-popup";

var Browser = function Browser(props) {
   var isShow = props.isShow,
       style = props.style,
       children = props.children,
       _classRoot = isShow ? CLASS_FOR_OPEN : null,
       _styleRoot = isShow ? _ContainerStyles2.default.displayBlock : _ContainerStyles2.default.displayNone;

   return _react2.default.createElement(
      'div',
      {
         className: _classRoot,
         style: Object.assign({}, _ContainerStyles2.default.browserRootDiv, style, _styleRoot)
      },
      children
   );
};

process.env.NODE_ENV !== "production" ? Browser.propTypes = {
   isShow: _react.PropTypes.bool,
   style: _react.PropTypes.object,
   children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
} : void 0;

exports.default = Browser;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\Browser.js.map