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

var CLASS_ROW_ACTIVE = "option-row__active";
var NO_ITEM = {
  caption: 'No results found',
  value: 'noresult'
};

var styles = {
  rootDiv: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '160px'

  },
  inputText: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    width: '140px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  rootOptionDiv: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#E1E1CB',
    color: 'green',
    width: '160px',
    //height: '160px',
    zIndex: '10',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  optionDiv: {
    //height: '160px',
    minHeight: '160px',
    maxHeight: '200px',
    overflow: 'auto'
  },
  spinnerCell: {
    position: 'relative',
    left: '8px',
    top: '4px',
    display: 'inline-block',
    width: '16px',
    height: '16px'
  },
  spinnerFailedCell: {
    position: 'relative',
    left: '8px',
    top: '4px',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderColor: '#F44336',
    cursor: 'pointer'
  },
  arrowCell: {
    cursor: 'pointer',
    //display: table-cell
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
    //width: '25px',
    width: '35px',
    paddingRight: '5px',
    marginLeft: '10px'

  },
  arrow: {
    borderColor: '#999 transparent transparent',
    borderStyle: 'solid',
    borderWidth: '5px 5px 2.5px',
    //borderWidth: '10px 10px 5px',
    display: 'inline-block',
    height: '0px',
    width: '0px'
  },
  arrowShow: {
    borderColor: '#1B75BB transparent transparent'
  },
  inputHr: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: '#1B75BB',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '150px'

  },
  itemDiv: {
    cursor: 'pointer',
    paddingTop: '4px',
    paddingLeft: '5px',
    paddingBottom: '4px'
    //lineHeight: '14px'
  },
  itemOdd: {
    backgroundColor: '#C3C3AC'
  },
  itemEven: {
    backgroundColor: '#D5D5BC'
  },
  optionsFooter: {
    backgroundColor: 'silver',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  fileredSpan: {
    display: 'inline-block',
    color: 'gray',
    fontWeight: 'bold',
    //height: '20px',
    paddingLeft: '10px',
    paddingTop: '4px',
    paddingBottom: '4px'
  }
};

var InputSelect = function (_Component) {
  (0, _inherits3.default)(InputSelect, _Component);

  function InputSelect(props) {
    (0, _classCallCheck3.default)(this, InputSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputSelect.__proto__ || Object.getPrototypeOf(InputSelect)).call(this));

    _initialiseProps.call(_this);

    _this.domOptionsCache = null;
    _this.indexActiveOption = 0;

    var optionName = props.optionName,
        optionNames = props.optionNames,
        _optionNames = optionNames ? optionNames : optionName ? optionName : '';

    _this.state = {
      value: '',
      isShowOption: false,
      options: props.options,
      optionName: optionName,
      optionNames: _optionNames,
      isValidDomOptionsCache: false,
      isLocalMode: false
    };
    return _this;
  }

  (0, _createClass3.default)(InputSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        if (this.props.options !== nextProps.options || nextProps.isUpdateOptions) {
          //New options come from Parent - Clear domCache, Init State
          this._setStateToInit(nextProps.options);
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props !== nextProps || nextProps.isUpdateOptions) {
        nextState.isLocalMode = false;
      } else {
        nextState.isLocalMode = true;
      }

      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      //Decorate Active Option
      if (this.state.isShowOption) {
        var comp = this._getActiveItemComp();
        this._decorateActiveRowComp(comp);
        this._makeVisibleActiveRowComp(comp);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var width = this.props.width,
          _state = this.state,
          value = _state.value,
          isLocalMode = _state.isLocalMode,
          isShowOption = _state.isShowOption;


      var _styleDivWidth = null;
      var _styleInputWidth = null;
      var _styleHr = null;
      if (width) {
        _styleDivWidth = { width: width + 'px' };
        _styleInputWidth = { width: width - 30 + 'px' };
        _styleHr = { width: width - 40 + 'px' };
      }

      var _crAfterInputEl = this._crAfterInputEl(),
          afterInputEl = _crAfterInputEl.afterInputEl,
          placeholder = _crAfterInputEl.placeholder;

      var _domOptions = isLocalMode || isShowOption ? this.renderOptions() : null;

      return _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.rootDiv, _styleDivWidth) },
        _react2.default.createElement('input', {
          ref: function ref(c) {
            return _this2.domInputText = c;
          },
          type: 'text',
          name: 'select',
          autoComplete: 'new-select',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          spellCheck: false,
          value: value,
          style: Object.assign({}, styles.inputText, _styleInputWidth),
          placeholder: placeholder,
          onChange: this._handleInputChange,
          onKeyDown: this._handleInputKeyDown }),
        afterInputEl,
        _react2.default.createElement('hr', { style: Object.assign({}, styles.inputHr, _styleHr) }),
        _domOptions
      );
    }
  }, {
    key: 'focusInput',
    value: function focusInput() {
      this.domInputText.focus();
    }
  }, {
    key: 'focusNotValidInput',
    value: function focusNotValidInput() {
      this.domInputText.focus();
    }
  }]);
  return InputSelect;
}(_react.Component);

InputSelect.defaultProps = {
  options: [],
  optionName: '',
  optionNames: '',
  isUpdateOptions: false,
  onSelect: function onSelect() {},
  onLoadOption: function onLoadOption() {}
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._setStateToInit = function (options) {
    _this3.indexActiveOption = 0;
    _this3.setState({
      value: '',
      isShowOption: false,
      options: options,
      isValidDomOptionsCache: false
    });
  };

  this._getActiveItemComp = function () {
    return _this3['v' + _this3.indexActiveOption];
  };

  this._decorateActiveRowComp = function (comp) {
    if (comp) {
      comp.classList.add(CLASS_ROW_ACTIVE);
    }
  };

  this._undecorateActiveRowComp = function (comp) {
    if (!comp) {
      comp = _this3._getActiveItemComp();
    }
    if (comp) {
      comp.classList.remove(CLASS_ROW_ACTIVE);
    }
  };

  this._makeVisibleActiveRowComp = function (comp) {
    if (comp) {
      var offsetTop = comp.offsetTop;
      var scrollTop = _this3.optionsComp.scrollTop;
      if (offsetTop - scrollTop > 70) {
        _this3.optionsComp.scrollTop += offsetTop - scrollTop - 70;
      }
      if (offsetTop - scrollTop < 0) {
        _this3.optionsComp.scrollTop = 0;
      }
    }
  };

  this._filterOptions = function (options, value) {
    var valueFor = value.toLowerCase();
    return options.filter(function (option, i) {
      return option.caption.toLowerCase().indexOf(valueFor) !== -1;
    });
  };

  this._handleInputChange = function (event) {
    var token = event.target.value,
        tokenLn = token.length,
        value = _this3.state.value,
        valueLn = value.length;

    var arr = [];
    if (tokenLn !== valueLn) {
      if (tokenLn > valueLn) {
        arr = _this3._filterOptions(_this3.state.options, token);
      } else if (tokenLn < valueLn) {
        arr = _this3._filterOptions(_this3.props.options, token);
      }
      if (arr.length === 0) {
        arr.push(NO_ITEM);
      }
      _this3._undecorateActiveRowComp();
      _this3.indexActiveOption = 0;
      _this3.setState({
        value: token,
        isShowOption: true,
        isValidDomOptionsCache: false,
        options: arr
      });
    }
  };

  this._handleInputKeyDown = function (event) {
    switch (event.keyCode) {
      // enter
      case 13:
        {
          var item = _this3.state.options[_this3.indexActiveOption];

          if (item && item.caption) {
            _this3.setState({
              value: item.caption,
              isShowOption: false,
              isValidDomOptionsCache: true
            });

            if (item.value !== 'noresult') {
              _this3.props.onSelect(item);
            } else {
              _this3.props.onSelect(null);
            }
          }
          break;
        }
      //escape
      case 27:
        {
          if (_this3.state.isShowOption) {
            _this3.setState({ isShowOption: false });
          } else {
            _this3._undecorateActiveRowComp();
            _this3._setStateToInit(_this3.props.options);
            _this3.props.onSelect(null);
          }
          break;
        }
      //down
      case 40:
        {
          if (!_this3.state.isShowOption) {
            _this3.setState({ isShowOption: true });
          } else {
            event.preventDefault();

            var prevComp = _this3._getActiveItemComp();

            if (prevComp) {
              _this3._undecorateActiveRowComp(prevComp);

              _this3.indexActiveOption += 1;
              if (_this3.indexActiveOption >= _this3.state.options.length) {
                _this3.indexActiveOption = 0;
                _this3.optionsComp.scrollTop = 0;
              }

              var nextComp = _this3._getActiveItemComp();
              _this3._decorateActiveRowComp(nextComp);

              var offsetTop = nextComp.offsetTop;
              var scrollTop = _this3.optionsComp.scrollTop;
              if (offsetTop - scrollTop > 70) {
                _this3.optionsComp.scrollTop += offsetTop - scrollTop - 70;
              }
            }
          }
          break;
        }
      //up
      case 38:
        if (_this3.state.isShowOption) {
          event.preventDefault();

          var _prevComp = _this3._getActiveItemComp();
          if (_prevComp) {
            _this3._undecorateActiveRowComp(_prevComp);

            _this3.indexActiveOption -= 1;
            if (_this3.indexActiveOption < 0) {
              _this3.indexActiveOption = _this3.state.options.length - 1;
              var bottomComp = _this3._getActiveItemComp();
              _this3.optionsComp.scrollTop = bottomComp.offsetTop;
              //this.optionsComp.scrollTop = this.optionsComp.scrollTopMax
            }

            var _nextComp = _this3._getActiveItemComp();
            _this3._decorateActiveRowComp(_nextComp);

            var _offsetTop = _nextComp.offsetTop;
            var _scrollTop = _this3.optionsComp.scrollTop;
            if (_offsetTop - _scrollTop < 70) {
              _this3.optionsComp.scrollTop -= 70 - (_offsetTop - _scrollTop);
            }
          }
        }
        break;
      default:
        /*console.log(event.keyCode);*/return;
    }
  };

  this._handleToggleOptions = function () {
    _this3.setState({ isShowOption: !_this3.state.isShowOption });
  };

  this._handleClickItem = function (item, index, event) {
    _this3.indexActiveOption = index;
    _this3.setState({
      value: item.caption,
      isShowOption: false
    });
    _this3.props.onSelect(item);
  };

  this.renderOptions = function () {
    var _state2 = _this3.state,
        isShowOption = _state2.isShowOption,
        options = _state2.options,
        isValidDomOptionsCache = _state2.isValidDomOptionsCache;


    var _domOptions = void 0;
    if (options) {
      if (!isValidDomOptionsCache) {
        _domOptions = options.map(function (item, index) {
          var _styleDiv = index % 2 === 0 ? styles.itemOdd : styles.itemEven;
          return _react2.default.createElement(
            'div',
            {
              className: 'option-row',
              style: Object.assign({}, styles.itemDiv, _styleDiv),
              key: index
              //ref={"v"+index}
              , ref: function ref(c) {
                return _this3['v' + index] = c;
              },
              onClick: _this3._handleClickItem.bind(_this3, item, index)
            },
            item.caption
          );
        });
        _this3.domOptionsCache = _domOptions;
      } else {
        _domOptions = _this3.domOptionsCache;
      }
    }

    var width = _this3.props.width,
        _styleOptions = isShowOption ? { display: 'block' } : { display: 'none' },
        _styleDivWidth = width ? { width: width + 'px' } : null,
        _numberFilteredItems = options[0] && options[0].value !== 'noresult' ? options.length : 0,
        _numberAllItems = _this3.props.options ? _this3.props.options.length : 0;


    return _react2.default.createElement(
      'div',
      { style: Object.assign({}, styles.rootOptionDiv, _styleOptions, _styleDivWidth) },
      _react2.default.createElement(
        'div',
        {
          //ref={c => this.domOptions = c}
          ref: function ref(c) {
            return _this3.optionsComp = c;
          },
          style: Object.assign({}, styles.optionDiv, _styleOptions, _styleDivWidth)
        },
        _domOptions
      ),
      _react2.default.createElement(
        'div',
        { style: styles.optionsFooter },
        _react2.default.createElement(
          'span',
          { style: styles.fileredSpan },
          'Filtered ',
          _numberFilteredItems,
          ' : ',
          _numberAllItems
        )
      )
    );
  };

  this._crAfterInputEl = function () {
    var _props = _this3.props,
        isLoading = _props.isLoading,
        isLoadingFailed = _props.isLoadingFailed,
        placeholder = _props.placeholder,
        _state3 = _this3.state,
        isShowOption = _state3.isShowOption,
        optionName = _state3.optionName,
        optionNames = _state3.optionNames;


    var _placeholder = void 0,
        _afterInputEl = void 0;
    if (!isLoading && !isLoadingFailed) {
      var _styleArrow = isShowOption ? styles.arrowShow : null;
      _placeholder = placeholder ? placeholder : 'Select ' + optionName + '...';
      _afterInputEl = _react2.default.createElement(
        'span',
        {
          style: styles.arrowCell,
          onClick: _this3._handleToggleOptions },
        _react2.default.createElement('span', { style: Object.assign({}, styles.arrow, _styleArrow) })
      );
    } else if (isLoading) {
      _placeholder = 'Loading ' + optionNames + '...';
      _afterInputEl = _react2.default.createElement('span', {
        style: styles.spinnerCell,
        'data-loader': 'circle'
      });
    } else if (isLoadingFailed) {
      _placeholder = 'Loading ' + optionNames + ' Failed';
      _afterInputEl = _react2.default.createElement('span', {
        style: styles.spinnerFailedCell,
        'data-loader': 'circle-failed',
        onClick: _this3.props.onLoadOption
      });
    }
    return {
      placeholder: _placeholder,
      afterInputEl: _afterInputEl
    };
  };
};

process.env.NODE_ENV !== "production" ? InputSelect.propTypes = {
  width: _react.PropTypes.string,
  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
  optionName: _react.PropTypes.string,
  optionNames: _react.PropTypes.string,
  isUpdateOptions: _react.PropTypes.bool,
  placeholder: _react.PropTypes.string,
  isLoading: _react.PropTypes.bool,
  isLoadingFailed: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func,
  onLoadOption: _react.PropTypes.func
} : void 0;
exports.default = InputSelect;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\InputSelect.js.map