"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _ComponentActions = require("../../flux/actions/ComponentActions");

var _ChartActions = require("../../flux/actions/ChartActions");

var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));

var _CaptionRow = _interopRequireDefault(require("../zhn-atoms/CaptionRow"));

var _Step = _interopRequireDefault(require("./Step"));

var _Token = _interopRequireDefault(require("./Token"));

var _LinkToken = _interopRequireDefault(require("./LinkToken"));

var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));

var _ContainerStyles = _interopRequireDefault(require("../styles/ContainerStyles"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: 10
  },
  ROOT_DIV: {
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingRight: 5,
    lineHeight: 1.4
  },
  MARGIN_BOTTOM: {
    marginBottom: '1em'
  },
  MARGIN_TOP: {
    marginTop: 3
  }
};

var About = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(About, _Component);

  function About(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      if (actionType === _ComponentActions.ComponentActionTypes.SHOW_ABOUT) {
        _this.setState({
          isShow: true
        });
      } else if (actionType === _ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART) {
        _this.setState({
          isShow: false
        });
      } else if (actionType === _ChartActions.ChartActionTypes.SHOW_CHART) {
        _this.setState({
          isShow: false
        });
      }
    };

    _this._handlerClose = function () {
      _this.setState({
        isShow: false
      });
    };

    _this.state = {
      isShow: props.isShowInit
    };
    return _this;
  }

  var _proto = About.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var isShow = this.state.isShow,
        _classOpen = isShow ? "show-popup" : null,
        _styleOpen = isShow ? S.BLOCK : S.NONE;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _classOpen,
      style: (0, _extends2["default"])({}, _ContainerStyles["default"].aboutRootDiv, _styleOpen),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionRow["default"], {
        caption: "About",
        onClose: this._handlerClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollPane["default"], {
        style: S.SCROLL_DIV,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: S.ROOT_DIV,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "#80c040",
              children: "Library Watch"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "gray",
              isFirstBlank: true,
              children: "is a SPA RESTful client."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MARGIN_BOTTOM,
            children: "By means of web app Library-Watch, it is possible to view information about GitHub's repositories, NPM's packages, StackOverflows's questions."
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            style: S.MARGIN_BOTTOM,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "gray",
              children: "Information API providers:"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken["default"], {
              href: "https://www.github.com/",
              color: "#009ae5",
              title: "GitHub",
              caption: "GitHub"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken["default"], {
              href: "https://www.npmjs.com/",
              color: "#273547",
              title: "NPM",
              caption: "NPM"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken["default"], {
              href: "https://api-docs.npms.io/",
              color: "#273547",
              title: "NPMS.IO",
              caption: "NPMS.IO"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken["default"], {
              href: "https://bundlephobia.com/",
              color: "#273547",
              title: "Bundlephobia.com",
              caption: "Bundlephobia.com"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken["default"], {
              href: "https://stackexchange.com/",
              color: "#3186C9",
              title: "StackExchange",
              caption: "StackExchange"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken["default"], {
              href: "https://gs.statcounter.com/",
              color: "#009ae5",
              title: "StatCounter",
              caption: "StatCounter"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              step: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "black",
              isFirstBlank: true,
              children: "Please, choose an information Browser from the header bar."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            style: S.MARGIN_TOP,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              step: "2"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "black",
              isFirstBlank: true,
              children: "Next, choose an information menu item in a Browser."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            style: S.MARGIN_TOP,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              step: "3"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "black",
              isFirstBlank: true,
              children: "Enter repository or package name in a draggable Dialog."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            style: S.MARGIN_TOP,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step["default"], {
              step: "4"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "black",
              isFirstBlank: true,
              children: "Click a button Load."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MARGIN_TOP,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "gray",
              children: "The result will be shown in an Item component in a Container."
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: (0, _extends2["default"])({}, S.MARGIN_BOTTOM, S.MARGIN_TOP),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "gray",
              children: "Also, it possible to add an item to Watch Browser and save to LocalStorage."
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: S.MARGIN_BOTTOM,
            children: "After clicking a button Show in a Dialog opens Container with Items or empty. After closing a Container all Items remains. In one-time max three Item Dialogs can be opened."
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
              color: "gray",
              children: "In that case of using"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken["default"], {
              href: "https://developer.github.com/v3/#rate-limiting",
              color: "#009ae5",
              isFirstBlank: true,
              title: "GitHub API v3 Rate Limiting",
              children: "GitHub"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Token["default"], {
              color: "gray",
              isFirstBlank: true,
              children: ["API provider, exists some restriction on frequency and amount queries (", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
                color: "#2f7ed8",
                children: "60 calls per hour, 10 requests per minute for Search API"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token["default"], {
                color: "gray",
                children: ")."
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconLogoBar["default"], {})]
        })
      })]
    });
  };

  return About;
}(_react.Component);

About.defaultProps = {
  isShowInit: true
};
var _default = About;
exports["default"] = _default;
//# sourceMappingURL=About.js.map