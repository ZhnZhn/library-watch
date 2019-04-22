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

var _ModalDialogContainer = require('./ModalDialogContainer');

var _ModalDialogContainer2 = _interopRequireDefault(_ModalDialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogContainer = function (_Component) {
  (0, _inherits3.default)(DialogContainer, _Component);

  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    showAction: PropTypes.string,
    routerDialog: PropTypes.object
  }
  */

  function DialogContainer(props) {
    (0, _classCallCheck3.default)(this, DialogContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogContainer.__proto__ || Object.getPrototypeOf(DialogContainer)).call(this));

    _this._onStore = function (actionType, option) {
      var _this$props = _this.props,
          showAction = _this$props.showAction,
          routerDialog = _this$props.routerDialog;

      if (actionType === showAction) {
        var type = option.modalDialogType,
            _this$state = _this.state,
            inits = _this$state.inits,
            shows = _this$state.shows,
            data = _this$state.data,
            dialogs = _this$state.dialogs;


        data[type] = option;
        shows[type] = true;
        if (inits[type]) {
          _this.setState({ isShow: true, currentDialog: type, shows: shows, data: data });
        } else {
          dialogs.push({ type: type, comp: routerDialog[type] });
          inits[type] = true;
          _this.setState({ isShow: true, currentDialog: type, shows: shows, data: data, dialogs: dialogs });
        }
      }
    };

    _this._handlerClose = function (type) {
      _this.state.shows[type] = false;
      _this.setState({
        isShow: false,
        currentDialog: null,
        shows: _this.state.shows
      });
    };

    _this._renderDialogs = function () {
      var store = _this.props.store,
          _this$state2 = _this.state,
          shows = _this$state2.shows,
          data = _this$state2.data;


      return _this.state.dialogs.map(function (dialog, index) {
        var type = dialog.type,
            comp = dialog.comp;

        return _react2.default.createElement(comp, {
          key: type,
          isShow: shows[type],
          data: data[type],
          store: store,
          onClose: _this._handlerClose.bind(null, type)
        });
      });
    };

    _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    };
    return _this;
  }

  (0, _createClass3.default)(DialogContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
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
      var _state = this.state,
          isShow = _state.isShow,
          currentDialog = _state.currentDialog;


      return _react2.default.createElement(
        _ModalDialogContainer2.default,
        {
          isShow: isShow,
          onClose: this._handlerClose.bind(null, currentDialog)
        },
        this._renderDialogs()
      );
    }
  }]);
  return DialogContainer;
}(_react.Component);

//import PropTypes from "prop-types";

exports.default = DialogContainer;
//# sourceMappingURL=DialogContainer.js.map