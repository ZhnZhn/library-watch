'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _DialogCaption = require('./DialogCaption');

var _DialogCaption2 = _interopRequireDefault(_DialogCaption);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Interact = require('../../utils/Interact');

var _Interact2 = _interopRequireDefault(_Interact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootDiv: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #232F3B',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  childrenDiv: {
    cursor: 'default'
  },
  commandDiv: {
    cursor: 'default',
    float: 'right',
    marginTop: '8px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};
//import PropTypes from 'prop-types'

var Dialog = function (_Component) {
  (0, _inherits3.default)(Dialog, _Component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this._refRootComp = function (node) {
      return _this.rootComp = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'componentDidMount',

    /*
    static propTypes = {
      isShow: PropTypes.bool,
      caption: PropTypes.string,
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]),
      commandButtons: PropTypes.arrayOf(PropTypes.node),
      onShowChart: PropTypes.func,
      onClose: PropTypes.func
    }
    */

    value: function componentDidMount() {
      _Interact2.default.makeDragable(this.rootComp);
    }
  }, {
    key: '_renderCommandButton',
    value: function _renderCommandButton(commandButtons, onShowChart, onClose) {
      return _react2.default.createElement(
        'div',
        { style: styles.commandDiv },
        commandButtons,
        _react2.default.createElement(_FlatButton2.default, {
          key: 'show',
          caption: 'Show',
          timeout: 0,
          onClick: onShowChart
        }),
        _react2.default.createElement(_FlatButton2.default, {
          key: 'close',
          caption: 'Close',
          timeout: 0,
          onClick: onClose
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          caption = _props.caption,
          children = _props.children,
          commandButtons = _props.commandButtons,
          onShowChart = _props.onShowChart,
          onClose = _props.onClose,
          _styleShow = isShow ? { display: 'block' } : { display: 'none' },
          _classShow = isShow ? 'show-popup' : undefined;

      return _react2.default.createElement(
        'div',
        {
          ref: this._refRootComp,
          className: _classShow,
          style: (0, _extends3.default)({}, styles.rootDiv, _styleShow)
        },
        _react2.default.createElement(_DialogCaption2.default, {
          caption: caption,
          onClose: onClose
        }),
        _react2.default.createElement(
          'div',
          { style: styles.childrenDiv },
          children
        ),
        this._renderCommandButton(commandButtons, onShowChart, onClose)
      );
    }
  }]);
  return Dialog;
}(_react.Component);

exports.default = Dialog;
//# sourceMappingURL=Dialog.js.map