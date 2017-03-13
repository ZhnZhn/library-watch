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

var _WatchActions = require('../../flux/actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CAPTION = "S",
    TITLE = "Save Watch Items to Locale Storage",
    STYLE = {
  NOT_WATCH_EDITED: {
    borderColor: 'gray',
    color: 'gray'
  }
};

var ButtonSave = function (_Component) {
  (0, _inherits3.default)(ButtonSave, _Component);

  function ButtonSave(props) {
    (0, _classCallCheck3.default)(this, ButtonSave);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ButtonSave.__proto__ || Object.getPrototypeOf(ButtonSave)).call(this));

    _this._onStore = function (actionType, value) {
      if (actionType === _WatchActions.WatchActionTypes.SET_WATCH_EDITED) {
        _this.setState({ isWatchEdited: value });
      }
    };

    _this.state = {
      isWatchEdited: props.store.getWatchEdited()
    };
    return _this;
  }

  (0, _createClass3.default)(ButtonSave, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.isWatchEdited === this.state.isWatchEdited) {
        return false;
      }
      return true;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = this.props.store;

      this.unsubcribe = store.listen(this._onStore);
      this.setState({ isWatchEdited: store.getWatchEdited() });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubcribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          isWatchEdited = this.state.isWatchEdited,
          _style = isWatchEdited ? style : Object.assign({}, style, STYLE.NOT_WATCH_EDITED);

      return _react2.default.createElement(_ButtonCircle2.default, {
        className: className,
        caption: CAPTION,
        title: TITLE,
        style: _style,
        onClick: _WatchActions2.default.saveWatch
      });
    }
  }]);
  return ButtonSave;
}(_react.Component);

process.env.NODE_ENV !== "production" ? ButtonSave.propTypes = {
  store: _react.PropTypes.object.isRequired,
  style: _react.PropTypes.object
} : void 0;
exports.default = ButtonSave;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnMoleculs\ButtonSave.js.map