'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoadingProgressActions = require('../../flux/actions/LoadingProgressActions');

var _ProgressLine = require('../zhn-atoms/ProgressLine');

var _ProgressLine2 = _interopRequireDefault(_ProgressLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLOR = {
  LOADING: '#2f7ed8',
  FAILED: '#ed5813'
};

var LoadingProgress = function (_Component) {
  (0, _inherits3.default)(LoadingProgress, _Component);

  function LoadingProgress() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LoadingProgress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LoadingProgress.__proto__ || Object.getPrototypeOf(LoadingProgress)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      completed: 0,
      color: COLOR.LOADING
    }, _this._onStore = function (actionType, option) {
      if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING) {
        _this.setState({ completed: 35, color: COLOR.LOADING });
      } else if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING_COMPLETE) {
        _this.setState({ completed: 100, color: COLOR.LOADING });
      } else if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING_FAILED) {
        _this.setState({ completed: 100, color: COLOR.FAILED });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LoadingProgress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          completed = _state.completed,
          color = _state.color;

      return _react2.default.createElement(_ProgressLine2.default, {
        height: 3,
        color: color,
        completed: completed
      });
    }
  }]);
  return LoadingProgress;
}(_react.Component);

exports.default = LoadingProgress;
//# sourceMappingURL=LoadingProgress.js.map