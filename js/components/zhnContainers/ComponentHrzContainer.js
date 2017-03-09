"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentHrzContainer = function (_Component) {
  (0, _inherits3.default)(ComponentHrzContainer, _Component);

  function ComponentHrzContainer(props) {
    (0, _classCallCheck3.default)(this, ComponentHrzContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ComponentHrzContainer.__proto__ || Object.getPrototypeOf(ComponentHrzContainer)).call(this));

    _this._onStore = function (actionType, data) {
      var initShowAction = _this.props.initShowAction;

      if (actionType === initShowAction) {
        _this.state.containers.unshift(data);
        _this.setState(_this.state);
      }
    };

    _this.state = {
      containers: []
    };
    return _this;
  }

  (0, _createClass3.default)(ComponentHrzContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var store = this.props.store;

      this.unsubscribe = store.listen(this._onStore);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",


    /*
     _renderContainers(containers){
       return containers.map((container, index) => {
         return container;
       })
     }
     */

    value: function render() {
      var containers = this.state.containers;

      return _react2.default.createElement(
        "div",
        { className: "hrz-container" },
        containers
      );
    }
  }]);
  return ComponentHrzContainer;
}(_react.Component);

process.env.NODE_ENV !== "production" ? ComponentHrzContainer.propTypes = {
  store: _react.PropTypes.shape({
    listen: _react.PropTypes.func
  }),
  initShowAction: _react.PropTypes.string
} : void 0;
exports.default = ComponentHrzContainer;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnContainers\ComponentHrzContainer.js.map