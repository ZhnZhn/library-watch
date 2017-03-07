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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputFileReader = function (_Component) {
  (0, _inherits3.default)(InputFileReader, _Component);

  function InputFileReader(props) {
    (0, _classCallCheck3.default)(this, InputFileReader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputFileReader.__proto__ || Object.getPrototypeOf(InputFileReader)).call(this));

    _this._handleChange = function (e) {
      var files = [];
      for (var i = 0; i < e.target.files.length; i++) {
        // Convert to Array.
        files.push(e.target.files[i]);
      }

      // Build Promise List, each promise resolved by FileReader.onload.
      Promise.all(files.map(function (file) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          reader.onload = function (result) {
            // Resolve both the FileReader result and its original file.
            resolve([result, file]);
          };

          // Read the file with format based on this.props.as.
          switch (_this.props.as.toLowerCase()) {
            case 'binary':
              reader.readAsBinaryString(file);
              break;
            case 'buffer':
              reader.readAsArrayBuffer(file);
              break;
            case 'text':
              reader.readAsText(file);
              break;
            case 'url':
              reader.readAsDataURL(file);
              break;
            default:
              reader.readAsText(file);
          }
        });
      })).then(function (zippedResults) {

        // Run the callback after all files have been read.
        if (zippedResults && zippedResults[0]) {
          var file = zippedResults[0][1];
          _this.setState({ labelText: file.name });
          _this.props.onChange(zippedResults);
        } else {
          _this.setState({ labelText: 'Choose a file...' });
          _this.props.onChange(zippedResults);
        }
      });
    };

    _this.state = {
      labelText: "Choose a file..."
    };
    return _this;
  }

  (0, _createClass3.default)(InputFileReader, [{
    key: 'render',
    value: function render() {
      var as = this.props.as,
          labelText = this.state.labelText;

      return _react2.default.createElement(
        'div',
        { className: '_react-file-reader-input' },
        _react2.default.createElement('input', {
          className: 'inputfile',
          type: 'file',
          id: 'file',
          name: 'file',
          as: as,
          onChange: this._handleChange
        }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'file' },
          _react2.default.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '17', viewBox: '0 0 20 17' },
            _react2.default.createElement('path', { d: 'M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z' })
          ),
          _react2.default.createElement(
            'span',
            null,
            labelText
          )
        )
      );
    }
  }]);
  return InputFileReader;
}(_react.Component);

InputFileReader.defaultProps = {
  as: 'text'
};
process.env.NODE_ENV !== "production" ? InputFileReader.propTypes = {
  as: _react.PropTypes.oneOf(['binary', 'buffer', 'text', 'url'])
} : void 0;
exports.default = InputFileReader;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\InputFileReader.js.map