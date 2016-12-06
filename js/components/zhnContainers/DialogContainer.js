'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalDialogContainer = require('./ModalDialogContainer');

var _ModalDialogContainer2 = _interopRequireDefault(_ModalDialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { ComponentActionTypes } from '../../flux/actions/ComponentActions';

//import RouterModalDialog from '../dialogs/RouterModalDialog';
//const _hmDialogs = RouterModalDialog;

var DialogContainer = _react2.default.createClass({
  displayName: 'DialogContainer',
  getInitialState: function getInitialState() {
    return {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    };
  },


  componentDidMount: function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, option) {
    var _props = this.props,
        showAction = _props.showAction,
        routerDialog = _props.routerDialog;

    if (actionType === showAction) {
      var type = option.modalDialogType,
          _state = this.state,
          inits = _state.inits,
          shows = _state.shows,
          data = _state.data,
          dialogs = _state.dialogs;


      data[type] = option;
      shows[type] = true;
      if (inits[type]) {
        this.setState({ isShow: true, currentDialog: type, shows: shows, data: data });
      } else {
        dialogs.push({ type: type, comp: routerDialog[type] });
        inits[type] = true;
        this.setState({ isShow: true, currentDialog: type, shows: shows, data: data, dialogs: dialogs });
      }
    }
  },
  _handlerClose: function _handlerClose(type) {
    this.state.shows[type] = false;
    this.setState({ isShow: false, currentDialog: null, shows: this.state.shows });
  },
  _renderDialogs: function _renderDialogs() {
    var _this = this;

    var store = this.props.store,
        _state2 = this.state,
        shows = _state2.shows,
        data = _state2.data;


    return this.state.dialogs.map(function (dialog, index) {
      var type = dialog.type,
          comp = dialog.comp;

      return _react2.default.createElement(comp, {
        key: type,
        isShow: shows[type],
        data: data[type],
        store: store,
        onClose: _this._handlerClose.bind(null, type) });
    });
  },
  render: function render() {
    var _state3 = this.state,
        isShow = _state3.isShow,
        currentDialog = _state3.currentDialog;


    return _react2.default.createElement(
      _ModalDialogContainer2.default,
      {
        isShow: isShow,
        onClose: this._handlerClose.bind(null, currentDialog)
      },
      this._renderDialogs()
    );
  }
});

exports.default = DialogContainer;
//# sourceMappingURL=DialogContainer.js.map