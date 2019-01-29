'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

//import PropTypes from "prop-types";

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

var LoadFileDialog = function (_Component) {
  (0, _inherits3.default)(LoadFileDialog, _Component);

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      onLoad: PropTypes.func
    }),
    onClose: PropTypes.func
  }
  */

  function LoadFileDialog(props) {
    (0, _classCallCheck3.default)(this, LoadFileDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadFileDialog.__proto__ || Object.getPrototypeOf(LoadFileDialog)).call(this));

    _this._handleChange = function (results) {
      if (results && results[0]) {
        var _results$ = (0, _slicedToArray3.default)(results[0], 2),
            progressEvent = _results$[0],
            file = _results$[1];

        _this.progressEvent = progressEvent;
        _this.file = file;
      } else {
        _this.progressEvent = null;
        _this.file = null;
      }
    };

    _this._handleLoad = function () {
      if (_this.progressEvent && _this.file) {
        var data = _this.props.data,
            onLoad = data.onLoad;

        onLoad({ progressEvent: _this.progressEvent });
        _this.setState({
          validationMessages: []
        });
      } else {
        _this.setState({
          validationMessages: [C.FILE_NOT_CHOOSED]
        });
      }
    };

    _this._handleClose = function () {
      var onClose = _this.props.onClose;


      if (_this.state.validationMessages.length !== 0) {
        _this.setState({ validationMessages: [] });
      }
      onClose();
    };

    _this.progressEvent = null;
    _this.file = null;
    _this._commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      type: 'TypeC',
      caption: 'Load',
      onClick: _this._handleLoad
    })];
    _this.state = {
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(LoadFileDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var isShow = this.props.isShow,
          validationMessages = this.state.validationMessages;

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          style: STYLE.MODAL_DIALOG,
          caption: 'Load Watch Items from File',
          isShow: isShow,
          commandButtons: this._commandButtons,
          onClose: this._handleClose
        },
        _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.rowDiv, STYLE.ROW_INPUT_FILE) },
          _react2.default.createElement(_InputFileReader2.default, {
            as: 'text',
            onChange: this._handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: Object.assign({}, styles.rowDiv, STYLE.ROW_VALIDATION) },
          _react2.default.createElement(_ValidationMessagesFragment2.default, {
            validationMessages: validationMessages
          })
        )
      );
    }
  }]);
  return LoadFileDialog;
}(_react.Component);

exports.default = LoadFileDialog;
//# sourceMappingURL=LoadFileDialog.js.map