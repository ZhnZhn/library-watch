"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CL_FILE_INPUT = "_react-file-reader-input",
    INITIAL_FILE_LABEL = "Choose a file...",
    FN_NOOP = function FN_NOOP() {};

var InputFileReader = function InputFileReader(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'text' : _ref$as,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? FN_NOOP : _ref$onChange;

  var _useState = (0, _react.useState)(INITIAL_FILE_LABEL),
      labelText = _useState[0],
      setLabelText = _useState[1],
      _hChange = (0, _react.useCallback)(function (e) {
    var files = [];

    for (var i = 0; i < e.target.files.length; i++) {
      // Convert to Array.
      files.push(e.target.files[i]);
    } // Build Promise List, each promise resolved by FileReader.onload.


    // Build Promise List, each promise resolved by FileReader.onload.
    Promise.all(files.map(function (file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();

        reader.onload = function (result) {
          // Resolve both the FileReader result and its original file.
          resolve([result, file]);
        }; // Read the file with format based on this.props.as.


        // Read the file with format based on this.props.as.
        switch (as.toLowerCase()) {
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
      var _labelText = zippedResults && zippedResults[0] ? (zippedResults[0][1] || {}).name : INITIAL_FILE_LABEL;

      setLabelText(_labelText);
      onChange(zippedResults);
    });
  }, []); // as, onChange

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_FILE_INPUT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      className: "inputfile",
      type: "file",
      id: "file",
      name: "file",
      as: as,
      onChange: _hChange
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      htmlFor: "file",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "17",
        viewBox: "0 0 20 17",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: labelText
      })]
    })]
  });
};
/*
 InputFileReader.propTypes = {
   as: PropTypes.oneOf([
    'binary',
    'buffer',
    'text',
    'url'
   ])
 }
*/


var _default = InputFileReader;
exports["default"] = _default;
//# sourceMappingURL=InputFileReader.js.map