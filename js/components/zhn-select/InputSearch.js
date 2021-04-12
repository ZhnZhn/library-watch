"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _jsxRuntime = require("react/jsx-runtime");

var MAX_WITHOUT_ANIMATION = 800;
var styles = {
  rootDiv: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '100%'
  },
  inputText: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: 30,
    paddingLeft: 10,
    color: 'green',
    width: '100%',
    paddingRight: 40,
    fontSize: '16px',
    fontWeight: 'bold'
  },
  rootOptionDiv: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#E1E1CB',
    color: 'green',
    width: '100%',
    //height: '160px',
    zIndex: '10',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  optionDiv: {
    width: '100%',
    //height: '160px',
    minHeight: 160,
    maxHeight: 200,
    overflow: 'auto'
  },
  spinnerCell: {
    display: 'inline-block',
    position: 'relative',
    left: 8,
    top: 4,
    width: 16,
    height: 16
  },
  spinnerFailedCell: {
    display: 'inline-block',
    position: 'relative',
    left: 8,
    top: 4,
    width: 16,
    height: 16,
    borderColor: '#f44336',
    cursor: 'pointer'
  },
  inputHr: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: '#1b75bb',
    borderImage: 'none',
    margin: 0,
    marginLeft: 10,
    marginBottom: 5,
    marginRight: 40
  },
  arrow_show: {
    borderColor: '#1b75bb transparent transparent'
  },
  itemDiv: {
    paddingTop: 4,
    paddingLeft: 5,
    paddingBottom: 4,
    cursor: 'pointer'
  },
  itemOdd: {
    backgroundColor: '#c3c3ac'
  },
  itemEven: {
    backgroundColor: '#d5d5bc'
  },
  optionsFooter: {
    backgroundColor: 'silver',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  fileredSpan: {
    display: 'inline-block',
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 4
  }
};

var InputSearch = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputSearch, _Component);

  function InputSearch(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._setStateToInit = function (options) {
      _this.indexActiveOption = 0;

      _this.setState({
        value: '',
        isShowOption: false,
        options: options,
        isValidDomOptionsCache: false
      });
    };

    _this._getDomForActiveOption = function () {
      return _this.refs["v" + _this.indexActiveOption];
    };

    _this._decorateOfDomActiveOption = function (domActiveOption) {
      if (domActiveOption) {
        domActiveOption.classList.add("option-row__active");
      }
    };

    _this._decorateActiveOption = function () {
      var domActiveOption = _this.refs["v" + _this.indexActiveOption];
      domActiveOption.classList.add("option-row__active");
    };

    _this._undecorateActiveOption = function () {
      if (_this.refs["v" + _this.indexActiveOption]) {
        _this.refs["v" + _this.indexActiveOption].classList.remove("option-row__active");
      }
    };

    _this._undecorateOfDomActiveOption = function (domActiveOption) {
      if (domActiveOption) {
        domActiveOption.classList.remove("option-row__active");
      }
    };

    _this._makeVisibleOfDomActiveOption = function (domActiveOption) {
      if (domActiveOption) {
        var offsetTop = domActiveOption.offsetTop;
        var scrollTop = _this.domOptions.scrollTop;

        if (offsetTop - scrollTop > 70) {
          _this.domOptions.scrollTop += offsetTop - scrollTop - 70;
        }

        if (offsetTop - scrollTop < 0) {
          _this.domOptions.scrollTop = 0;
        }
      }
    };

    _this._makeVisibleActiveOption = function () {
      var domActiveOption = _this.refs["v" + _this.indexActiveOption];
      var offsetTop = domActiveOption.offsetTop;
      var scrollTop = _this.domOptions.scrollTop;

      if (offsetTop - scrollTop > 70) {
        _this.domOptions.scrollTop += offsetTop - scrollTop - 70;
      }
    };

    _this._filterOptionsToState = function (options, value) {
      var valueFor = value.toLowerCase(),
          _caption = _this.propCaption;
      return options.filter(function (option, i) {
        return option[_caption].toLowerCase().indexOf(valueFor) !== -1;
      });
    };

    _this._handlerInputChange = function (event) {
      var value = event.target.value;
      var arr = [];

      if (value.length !== _this.state.value.length) {
        if (value.length > _this.state.value.length) {
          arr = _this._filterOptionsToState(_this.state.options, value);
        } else if (value.length < _this.state.value.length) {
          arr = _this._filterOptionsToState(_this.props.options, value);
        }

        if (arr.length === 0) {
          var _arr$push;

          arr.push((_arr$push = {}, _arr$push[_this.propCaption] = 'No results found', _arr$push.value = 'noresult', _arr$push));
        }

        _this._undecorateActiveOption();

        _this.indexActiveOption = 0;

        _this.setState({
          value: value,
          isShowOption: true,
          isValidDomOptionsCache: false,
          options: arr
        });
      }
    };

    _this._startAfterInputAnimation = function () {
      if (_this.state.options.length > MAX_WITHOUT_ANIMATION) {
        _this.arrowCell.startAnimation();
      }
    };

    _this._stopAfterInputAnimation = function () {
      _this.arrowCell.stopAnimation();
    };

    _this._handlerInputKeyDown = function (event) {
      switch (event.keyCode) {
        // enter
        case 13:
          {
            var item = _this.state.options[_this.indexActiveOption];

            if (item && item[_this.propCaption]) {
              _this.setState({
                value: item[_this.propCaption],
                isShowOption: false,
                isValidDomOptionsCache: true
              });

              if (item.value !== 'noresult') {
                _this.props.onSelect(item);
              } else {
                _this.props.onSelect(null);
              }
            }

            break;
          }
        //escape

        case 27:
          if (_this.state.isShowOption) {
            _this.setState({
              isShowOption: false
            });
          } else {
            _this._undecorateActiveOption();

            _this._setStateToInit(_this.props.options);

            _this.props.onSelect(null);
          }

          break;
        //down

        case 40:
          if (!_this.state.isShowOption) {
            _this._startAfterInputAnimation();

            setTimeout(function () {
              _this.setState({
                isShowOption: true
              }, _this._stopAfterInputAnimation);
            }, 0);
          } else {
            event.preventDefault();

            var domActiveOption = _this._getDomForActiveOption();

            if (domActiveOption) {
              _this._undecorateOfDomActiveOption(domActiveOption);

              _this.indexActiveOption += 1;

              if (_this.indexActiveOption >= _this.state.options.length) {
                _this.indexActiveOption = 0;
                _this.domOptions.scrollTop = 0;
              }

              domActiveOption = _this._getDomForActiveOption();

              _this._decorateOfDomActiveOption(domActiveOption);

              var offsetTop = _this.refs["v" + _this.indexActiveOption].offsetTop;
              var scrollTop = _this.domOptions.scrollTop;

              if (offsetTop - scrollTop > 70) {
                _this.domOptions.scrollTop += offsetTop - scrollTop - 70;
              }
            }
          }

          break;
        //up

        case 38:
          if (_this.state.isShowOption) {
            event.preventDefault();

            var _domActiveOption = _this._getDomForActiveOption();

            if (_domActiveOption) {
              _this._undecorateOfDomActiveOption(_domActiveOption);

              _this.indexActiveOption -= 1;

              if (_this.indexActiveOption < 0) {
                _this.indexActiveOption = _this.state.options.length - 1;
                var offsetTop2 = _this.refs["v" + _this.indexActiveOption].offsetTop;
                _this.domOptions.scrollTop = offsetTop2;
              }

              _domActiveOption = _this._getDomForActiveOption();

              _this._decorateOfDomActiveOption(_domActiveOption);

              var _offsetTop = _domActiveOption.offsetTop;
              var _scrollTop = _this.domOptions.scrollTop;

              if (_offsetTop - _scrollTop < 70) {
                _this.domOptions.scrollTop -= 70 - (_offsetTop - _scrollTop);
              }
            }
          }

          break;

        default:
          /*console.log(event.keyCode);*/
          return;
      }
    };

    _this._handlerToggleOptions = function () {
      if (_this.state.isShowOption) {
        _this.setState({
          isShowOption: false
        });
      } else {
        _this._startAfterInputAnimation();

        setTimeout(function () {
          return _this.setState({
            isShowOption: true
          }, _this._stopAfterInputAnimation);
        }, 1);
      }
    };

    _this._handlerClickOption = function (item, index, event) {
      _this.indexActiveOption = index;

      _this.setState({
        value: item[_this.propCaption],
        isShowOption: false
      });

      _this.props.onSelect(item);
    };

    _this.renderOptions = function () {
      var ItemOptionComp = _this.props.ItemOptionComp,
          _this$state = _this.state,
          isShowOption = _this$state.isShowOption,
          options = _this$state.options,
          isValidDomOptionsCache = _this$state.isValidDomOptionsCache;

      var _domOptions;

      if (options) {
        if (!isValidDomOptionsCache) {
          var _caption = _this.propCaption;
          _domOptions = options.map(function (item, index) {
            var _styleDiv = index % 2 === 0 ? styles.itemOdd : styles.itemEven;

            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              ref: "v" + index,
              className: "option-row",
              style: Object.assign({}, styles.itemDiv, _styleDiv),
              onClick: _this._handlerClickOption.bind((0, _assertThisInitialized2["default"])(_this), item, index),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemOptionComp, {
                item: item,
                propCaption: _caption
              })
            }, index);
          });
          _this.domOptionsCache = _domOptions;
        } else {
          _domOptions = _this.domOptionsCache;
        }
      }

      var _styleOptions = isShowOption ? {
        display: 'block'
      } : {
        display: 'none'
      },
          _numberFilteredItems = options[0] && options[0].value !== 'noresult' ? options.length : 0,
          _numberAllItems = _this.props.options ? _this.props.options.length : 0;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: Object.assign({}, styles.rootOptionDiv, _styleOptions),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          ref: function ref(c) {
            return _this.domOptions = c;
          },
          style: Object.assign({}, styles.optionDiv, _styleOptions),
          children: _domOptions
        }, "1"), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: styles.optionsFooter,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            style: styles.fileredSpan,
            children: ["Filtered ", _numberFilteredItems, " : ", _numberAllItems]
          })
        }, "2")]
      });
    };

    _this._refInput = function (c) {
      return _this.domInputText = c;
    };

    _this.domOptionsCache = null;
    _this.indexActiveOption = 0;

    var _this$props = _this.props,
        optionName = _this$props.optionName,
        optionNames = _this$props.optionNames,
        propCaption = _this$props.propCaption,
        _optionName = optionName ? ' ' + optionName : '',
        _optionNames = optionNames ? ' ' + optionNames : optionName ? _optionName : '';

    _this.propCaption = propCaption;
    _this.state = {
      value: '',
      isShowOption: false,
      options: _this.props.options,
      optionName: _optionName,
      optionNames: _optionNames,
      isValidDomOptionsCache: false,
      isLocalMode: false
    };
    return _this;
  }

  var _proto = InputSearch.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (this.props.options !== nextProps.options || nextProps.isUpdateOptions) {
        //New options come from Parent - Clear domCache, Init State
        this._setStateToInit(nextProps.options);
      }
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps || nextProps.isUpdateOptions) {
      nextState.isLocalMode = false;
    } else {
      nextState.isLocalMode = true;
    }

    return true;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    //Decorate Active Option
    if (this.state.isShowOption) {
      var domActiveOption = this._getDomForActiveOption();

      this._decorateOfDomActiveOption(domActiveOption);

      this._makeVisibleOfDomActiveOption(domActiveOption);
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state2 = this.state,
        value = _this$state2.value,
        isLocalMode = _this$state2.isLocalMode,
        isShowOption = _this$state2.isShowOption;

    var _styleArrow = isShowOption ? styles.arrow_show : null;

    var _domOptions = isLocalMode || isShowOption ? this.renderOptions() : null;

    var _this$props2 = this.props,
        isLoading = _this$props2.isLoading,
        isLoadingFailed = _this$props2.isLoadingFailed,
        placeholder = _this$props2.placeholder,
        _this$state3 = this.state,
        optionName = _this$state3.optionName,
        optionNames = _this$state3.optionNames;

    var _domAfterInput, _placeholder;

    if (!isLoading && !isLoadingFailed) {
      _placeholder = placeholder ? placeholder : "Select" + optionName + "...";
      _domAfterInput = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell["default"], {
        ref: function ref(c) {
          return _this2.arrowCell = c;
        },
        styleArrow: _styleArrow,
        onClick: this._handlerToggleOptions
      });
    } else if (isLoading) {
      _placeholder = "Loading" + optionNames + "...";
      _domAfterInput = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: styles.spinnerCell,
        "data-loader": "circle"
      });
    } else if (isLoadingFailed) {
      _placeholder = "Loading" + optionNames + " Failed";
      _domAfterInput = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: styles.spinnerFailedCell,
        "data-loader": "circle-failed",
        onClick: this.props.onLoadOption
      });
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: styles.rootDiv,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: this._refInput,
        type: "text",
        value: value,
        style: styles.inputText,
        placeholder: _placeholder,
        onChange: this._handlerInputChange,
        onKeyDown: this._handlerInputKeyDown
      }), _domAfterInput, /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        style: styles.inputHr
      }), _domOptions]
    });
  };

  _proto.focusInput = function focusInput() {
    this.domInputText.focus();
  };

  _proto.focusNotValidInput = function focusNotValidInput() {
    this.domInputText.focus();
  };

  return InputSearch;
}(_react.Component);

InputSearch.defaultProps = {
  options: [],
  optionName: '',
  optionNames: '',
  isUpdateOptions: false,
  propCaption: 'caption'
};
var _default = InputSearch;
exports["default"] = _default;
//# sourceMappingURL=InputSearch.js.map