"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

//import PropTypes from "prop-types";

var CL = "hrz-container";

var ComponentHrzContainer = function (_Component) {
  (0, _inherits3.default)(ComponentHrzContainer, _Component);

  function ComponentHrzContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ComponentHrzContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ComponentHrzContainer.__proto__ || Object.getPrototypeOf(ComponentHrzContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containers: []
    }, _this._onStore = function (actionType, data) {
      var initShowAction = _this.props.initShowAction;

      if (actionType === initShowAction) {
        _this.setState(function (prevState) {
          prevState.containers.unshift(data);
          return {
            containers: [].concat((0, _toConsumableArray3.default)(prevState.containers))
          };
        });
        //this.state.containers.unshift(data);
        //this.setState(this.state);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    initShowAction: PropTypes.string
  }
  */


  (0, _createClass3.default)(ComponentHrzContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
    value: function render() {
      var containers = this.state.containers;

      return _react2.default.createElement(
        "div",
        { className: CL },
        containers
      );
    }
  }]);
  return ComponentHrzContainer;
}(_react.Component);

exports.default = ComponentHrzContainer;
//# sourceMappingURL=ComponentHrzContainer.js.map