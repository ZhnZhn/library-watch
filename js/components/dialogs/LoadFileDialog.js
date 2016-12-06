'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalDialog = require('../zhnMoleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _InputFileReader = require('../zhnAtoms/InputFileReader');

var _InputFileReader2 = _interopRequireDefault(_InputFileReader);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _ValidationMessagesFragment = require('../zhnMoleculs/ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;

var C = {
  FILE_NOT_CHOOSED: 'Choose file with Watch Items for Load'
};

var STYLE = {
  MODAL_DIALOG: {
    minWidth: '320px'
  },
  ROW_INPUT_FILE: {
    marginTop: '16px',
    marginBottom: '16px'
  },
  ROW_VALIDATION: {
    marginRight: '16px'
  }
};

var LoadFileDialog = _react2.default.createClass({
  displayName: 'LoadFileDialog',
  getInitialState: function getInitialState() {
    this.progressEvent = undefined;
    this.file = undefined;
    return {
      validationMessages: []
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  },
  _handlerChange: function _handlerChange(results) {
    //console.log(results)
    if (results && results[0]) {
      var _results$ = _slicedToArray(results[0], 2),
          progressEvent = _results$[0],
          file = _results$[1];

      this.progressEvent = progressEvent;
      this.file = file;
    } else {
      this.progressEvent = undefined;
      this.file = undefined;
    }
  },
  _handlerLoad: function _handlerLoad() {
    if (this.progressEvent && this.file) {
      //console.log(this.file.name);
      //console.log(this.progressEvent.target.result);
      var data = this.props.data,
          onLoad = data.onLoad;

      onLoad({ progressEvent: this.progressEvent });
      this.setState({
        validationMessages: []
      });
    } else {
      this.setState({
        validationMessages: [C.FILE_NOT_CHOOSED]
      });
    }
  },
  _handlerClose: function _handlerClose() {
    var onClose = this.props.onClose;


    if (this.state.validationMessages.length !== 0) {
      this.setState({ validationMessages: [] });
    }
    onClose();
  },
  render: function render() {
    var isShow = this.props.isShow,
        validationMessages = this.state.validationMessages,
        _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })];
    //, { caption } = data

    return _react2.default.createElement(
      _ModalDialog2.default,
      {
        style: STYLE.MODAL_DIALOG,
        caption: 'Load Watch Items from File',
        isShow: isShow,
        commandButtons: _commandButtons,
        onClose: this._handlerClose
      },
      _react2.default.createElement(
        'div',
        {
          key: '1',
          style: Object.assign({}, styles.rowDiv, STYLE.ROW_INPUT_FILE)

        },
        _react2.default.createElement(_InputFileReader2.default, {
          as: 'text',
          onChange: this._handlerChange
        })
      ),
      _react2.default.createElement(
        'div',
        {
          key: '2',
          style: Object.assign({}, styles.rowDiv, STYLE.ROW_VALIDATION)
        },
        _react2.default.createElement(_ValidationMessagesFragment2.default, {
          validationMessages: validationMessages
        })
      )
    );
  }
});

exports.default = LoadFileDialog;
//# sourceMappingURL=LoadFileDialog.js.map