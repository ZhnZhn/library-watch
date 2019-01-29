'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _ValidationMessagesFragment = require('../zhnMoleculs/ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Styles = {
  COMMAND_DIV: {
    cursor: 'default',
    float: 'right',
    marginTop: '8px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};

//import PropTypes from 'prop-types'

var GroupAddPane = (0, _createReactClass2.default)({
  displayName: 'GroupAddPane',
  /*
  propTypes : {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    actionFailed : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnIsEmptyName : PropTypes.func,
    onCreate : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  getInitialState: function getInitialState() {
    return {
      validationMessages: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    //store
    var _props = this.props,
        actionCompleted = _props.actionCompleted,
        actionFailed = _props.actionFailed,
        forActionType = _props.forActionType;

    if (actionType === actionCompleted && data.forActionType === forActionType) {
      this._handlerClear();
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      this.setState({ validationMessages: data.messages });
    }
  },
  _handlerClear: function _handlerClear() {
    this.inputText.setValue('');
    if (this.state.validationMessages.length > 0) {
      this.setState({ validationMessages: [] });
    }
  },
  _handlerCreate: function _handlerCreate() {
    var caption = this.inputText.getValue();
    if (caption) {
      this.props.onCreate({ caption: caption });
    } else {
      this.inputText.setValue('');
      this.setState({ validationMessages: [this.props.msgOnIsEmptyName('Group')] });
    }
  },
  render: function render() {
    var _this = this;

    var onClose = this.props.onClose,
        validationMessages = this.state.validationMessages;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_RowInputText2.default, {
        ref: function ref(c) {
          return _this.inputText = c;
        },
        caption: 'Group:'
      }),
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        validationMessages: validationMessages
      }),
      _react2.default.createElement(
        'div',
        { style: Styles.COMMAND_DIV },
        _react2.default.createElement(_ToolBarButton2.default, {
          type: 'TypeC',
          caption: 'Create',
          onClick: this._handlerCreate
        }),
        _react2.default.createElement(_ToolBarButton2.default, {
          type: 'TypeC',
          caption: 'Clear',
          onClick: this._handlerClear
        }),
        _react2.default.createElement(_ToolBarButton2.default, {
          type: 'TypeC',
          caption: 'Close',
          onClick: onClose
        })
      )
    );
  }
});

exports.default = GroupAddPane;
//# sourceMappingURL=GroupAddPane.js.map