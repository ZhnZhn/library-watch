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

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var STYLE = {
  ROOT: {
    zIndex: 30,
    position: 'absolute',
    top: '70px',
    left: '10px',
    width: '99%'
  }
};

var getObjToFirst = function getObjToFirst(arr, keyValue) {
  var index = void 0,
      i = void 0,
      len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i].key === keyValue) {
      index = i;
      break;
    }
  }
  return [].concat((0, _toConsumableArray3.default)(arr.slice(0, index)), (0, _toConsumableArray3.default)(arr.slice(index + 1)), [arr[index]]);
};

var DialogContainer3 = function (_Component) {
  (0, _inherits3.default)(DialogContainer3, _Component);

  /*
  static propTypes = {
    maxDialog: PropTypes.number,
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    initAction: PropTypes.string,
    showAction: PropTypes.string
  }
  */

  function DialogContainer3(props) {
    (0, _classCallCheck3.default)(this, DialogContainer3);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogContainer3.__proto__ || Object.getPrototypeOf(DialogContainer3)).call(this));

    _this._checkActiveDialogs = function (dialogType) {
      _this._activeDialogs.push(dialogType);
      if (_this._activeDialogs.length > _this.props.maxDialog) {
        _this.state.dialog[_this._activeDialogs[0]] = false;
        _this._activeDialogs = _this._activeDialogs.slice(1);
      }
    };

    _this.filterActiveDialogs = function (dialogType) {
      _this._activeDialogs = _this._activeDialogs.filter(function (value) {
        return value !== dialogType;
      });
    };

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          initAction = _this$props.initAction,
          showAction = _this$props.showAction;

      if (actionType === showAction) {
        if (!_this.state.dialog[data]) {
          _this.state.dialog[data] = true;
          _this._checkActiveDialogs(data);
        }
        _this.state.compDialogs = getObjToFirst(_this.state.compDialogs, data);
        _this.setState(_this.state);
      } else if (actionType === initAction) {

        _this.state.dialog[data.dialogType] = true;
        _this.state.compDialogs.push(data.dialogComp);
        _this._checkActiveDialogs(data.dialogType);
        _this.setState(_this.state);
      }
    };

    _this._handleToggleDialog = function (dialogType) {
      var dialog = _this.state.dialog;

      dialog[dialogType] = !dialog[dialogType];
      _this.setState(_this.state);

      if (!dialog[dialogType]) {
        _this.filterActiveDialogs(dialogType);
        document.getElementsByTagName('html')[0].style.cursor = '';
      }
    };

    _this._renderDialogs = function () {
      var _this$state = _this.state,
          dialog = _this$state.dialog,
          compDialogs = _this$state.compDialogs;

      return compDialogs.map(function (compDialog, index) {
        return _react2.default.cloneElement(compDialog, {
          key: compDialog.key,
          isShow: dialog[compDialog.key],
          onClose: _this._handleToggleDialog.bind(_this, compDialog.key)
        });
      });
    };

    _this._activeDialogs = [];
    _this.state = {
      dialog: {},
      compDialogs: []
    };
    return _this;
  }

  (0, _createClass3.default)(DialogContainer3, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: STYLE.ROOT },
        this._renderDialogs()
      );
    }
  }]);
  return DialogContainer3;
}(_react.Component);

exports.default = DialogContainer3;
//# sourceMappingURL=DialogContainer3.js.map