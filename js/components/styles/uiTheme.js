"use strict";

exports.__esModule = true;
exports.setUiTheme = exports.getThemeName = exports.UI_THEME_OPTIONS = exports.DF_UI_THEME = void 0;
const UI_THEME_ID_GREY = 'GREY',
  UI_THEME_ID_WHITE = 'WHITE',
  UI_THEME_ID_SAND = 'SAND';
const UI_THEME_OPTIONS = exports.UI_THEME_OPTIONS = [{
  caption: 'Grey',
  value: UI_THEME_ID_GREY
}, {
  caption: 'White',
  value: UI_THEME_ID_WHITE
}, {
  caption: 'Sand',
  value: UI_THEME_ID_SAND
}];
const DF_UI_THEME = exports.DF_UI_THEME = UI_THEME_OPTIONS[0].caption;
const P_GREY = {
    BG_BODY: '#5f5f5f',
    BG: '#4d4d4d'
  },
  WHITE_BG = '#eaeaea',
  P_WHITE = {
    BG_BODY: 'darkgrey',
    BG: WHITE_BG
  },
  SAND_BG = '#e8e0cb',
  P_SAND = {
    BG_BODY: 'darkgrey',
    BG: SAND_BG
  };
const THEME_CONFIG = {
  [UI_THEME_ID_GREY]: P_GREY,
  [UI_THEME_ID_WHITE]: P_WHITE,
  [UI_THEME_ID_SAND]: P_SAND
};
const _setCustomPropertiesFrom = P => {
  const _style = document.body.style,
    _setProperty = _style.setProperty.bind(_style);
  _style.backgroundColor = P.BG_BODY;
  _setProperty("--bg-c", P.BG);
};
const _setUiTheme = themeName => {
  _setCustomPropertiesFrom(THEME_CONFIG[themeName]);
};
const DF_UI_THEME_ID = UI_THEME_OPTIONS[0].value;
const _uiTheme = {
  themeName: DF_UI_THEME_ID,
  _init() {
    this.setThemeName(DF_UI_THEME_ID);
  },
  getThemeName() {
    return this.themeName;
  },
  setThemeName(themeName) {
    this.themeName = themeName || DF_UI_THEME_ID;
    _setUiTheme(this.themeName);
  }
};
_uiTheme._init();
const setUiTheme = item => {
  const _themeName = (item || {}).value;
  if (_uiTheme.getThemeName() !== _themeName) {
    _uiTheme.setThemeName(_themeName);
  }
};
exports.setUiTheme = setUiTheme;
const getThemeName = () => _uiTheme.getThemeName();
exports.getThemeName = getThemeName;
//# sourceMappingURL=uiTheme.js.map