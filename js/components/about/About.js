"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _compStore = require("../../flux/compStore");
var _ChartActions = require("../../flux/actions/ChartActions");
var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));
var _CaptionRow = _interopRequireDefault(require("../zhn-atoms/CaptionRow"));
var _Step = _interopRequireDefault(require("./Step"));
var _Token = _interopRequireDefault(require("./Token"));
var _LinkToken = _interopRequireDefault(require("./LinkToken"));
var _IconLogoBar = _interopRequireDefault(require("./IconLogoBar"));
var _ContainerStyles = require("../styles/ContainerStyles");
var _jsxRuntime = require("react/jsx-runtime");
const CL_SHOW_POPUP = "show-popup",
  S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  },
  S_SCROLL_DIV = {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: 10
  },
  S_ABOUT_DIV = {
    color: 'grey',
    padding: '0 5px 0 16px',
    lineHeight: 1.4,
    fontWeight: 'bold'
  },
  S_MARGIN_BOTTOM = {
    marginBottom: '1em'
  },
  S_MARGIN_TOP = {
    marginTop: 3
  };
const About = _ref => {
  let {
    store
  } = _ref;
  const [isShow, showAbout, hideAbout] = (0, _useBool.default)(true);
  (0, _compStore.useMsAbout)(msAbout => {
    if (msAbout && msAbout.is) {
      showAbout();
    }
  });
  (0, _useListen.default)(store, (actionType, data) => {
    if (actionType === _ChartActions.CHAT_INIT_AND_SHOW_CHART || actionType === _ChartActions.CHAT_SHOW_CHART) {
      hideAbout();
    }
  });
  const [_style, _className] = isShow ? [S_BLOCK, CL_SHOW_POPUP] : [S_NONE];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _className,
    style: {
      ..._ContainerStyles.S_ABOUT,
      ..._style
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionRow.default, {
      caption: "About",
      onClose: hideAbout
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollPane.default, {
      style: S_SCROLL_DIV,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S_ABOUT_DIV,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "#80c040",
            children: "Library Watch"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "grey",
            isFirstBlank: true,
            children: "is a SPA RESTful client."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S_MARGIN_BOTTOM,
          children: "By means of web app Library-Watch, it is possible to view information about GitHub's repositories, NPM's packages, StackOverflows's questions."
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          style: S_MARGIN_BOTTOM,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "grey",
            children: "Information API providers:"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken.default, {
            href: "https://www.github.com/",
            color: "#009ae5",
            title: "GitHub",
            caption: "GitHub"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken.default, {
            href: "https://www.npmjs.com/",
            color: "#273547",
            title: "NPM",
            caption: "NPM"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken.default, {
            href: "https://api-docs.npms.io/",
            color: "#273547",
            title: "NPMS.IO",
            caption: "NPMS.IO"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken.default, {
            href: "https://bundlephobia.com/",
            color: "#273547",
            title: "Bundlephobia.com",
            caption: "Bundlephobia.com"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken.default, {
            href: "https://stackexchange.com/",
            color: "#3186C9",
            title: "StackExchange",
            caption: "StackExchange"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken.default, {
            href: "https://gs.statcounter.com/",
            color: "#009ae5",
            title: "StatCounter",
            caption: "StatCounter"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step.default, {
            step: "1"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "black",
            isFirstBlank: true,
            children: "Please, choose an information Browser from the header bar."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          style: S_MARGIN_TOP,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step.default, {
            step: "2"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "black",
            isFirstBlank: true,
            children: "Next, choose an information menu item in a Browser."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          style: S_MARGIN_TOP,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step.default, {
            step: "3"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "black",
            isFirstBlank: true,
            children: "Enter repository or package name in a draggable Dialog."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          style: S_MARGIN_TOP,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Step.default, {
            step: "4"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "black",
            isFirstBlank: true,
            children: "Click a button Load."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S_MARGIN_TOP,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "grey",
            children: "The result will be shown in an Item component in a Container."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: {
            ...S_MARGIN_BOTTOM,
            ...S_MARGIN_TOP
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "grey",
            children: "Also, it possible to add an item to Watch Browser and save to LocalStorage."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: S_MARGIN_BOTTOM,
          children: "After clicking a button Show in a Dialog opens Container with Items or empty. After closing a Container all Items remains. In one-time max three Item Dialogs can be opened."
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
            color: "grey",
            children: "In that case of using"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkToken.default, {
            href: "https://developer.github.com/v3/#rate-limiting",
            color: "#009ae5",
            isFirstBlank: true,
            title: "GitHub API v3 Rate Limiting",
            children: "GitHub"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Token.default, {
            color: "grey",
            isFirstBlank: true,
            children: ["API provider, exists some restriction on frequency and amount queries (", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
              color: "#2f7ed8",
              children: "60 calls per hour, 10 requests per minute for Search API"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Token.default, {
              color: "grey",
              children: ")."
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconLogoBar.default, {})]
      })
    })]
  });
};
var _default = About;
exports.default = _default;
//# sourceMappingURL=About.js.map