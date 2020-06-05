"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

//import PropTypes from "prop-types";
var InputFileReader = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputFileReader, _Component);

  function InputFileReader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      labelText: "Choose a file..."
    };

    _this._handleChange = function (e) {
      var files = [];

      for (var i = 0; i < e.target.files.length; i++) {
        // Convert to Array.
        files.push(e.target.files[i]);
      } // Build Promise List, each promise resolved by FileReader.onload.


      Promise.all(files.map(function (file) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          reader.onload = function (result) {
            // Resolve both the FileReader result and its original file.
            resolve([result, file]);
          }; // Read the file with format based on this.props.as.


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

          _this.setState({
            labelText: file.name
          });

          _this.props.onChange(zippedResults);
        } else {
          _this.setState({
            labelText: 'Choose a file...'
          });

          _this.props.onChange(zippedResults);
        }
      });
    };

    return _this;
  }

  var _proto = InputFileReader.prototype;

  _proto.render = function render() {
    var as = this.props.as,
        labelText = this.state.labelText;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "_react-file-reader-input"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      className: "inputfile",
      type: "file",
      id: "file",
      name: "file",
      as: as,
      onChange: this._handleChange
    }), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "file"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "17",
      viewBox: "0 0 20 17"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
    })), /*#__PURE__*/_react["default"].createElement("span", null, labelText)));
  };

  return InputFileReader;
}(_react.Component);

InputFileReader.defaultProps = {
  as: 'text'
};
var _default = InputFileReader;
exports["default"] = _default;
//# sourceMappingURL=InputFileReader.js.map