"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollPane = function ScrollPane(props) {
    var style = props.style;
    var children = props.children;

    return _react2.default.createElement(
        "div",
        { className: "with-scroll", style: style },
        children
    );
};

exports.default = ScrollPane;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\zhnAtoms\ScrollPane.js.map