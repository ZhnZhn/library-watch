"use strict";

exports.__esModule = true;
exports.setUiTheme = exports.getThemeName = exports.UI_THEME_OPTIONS = exports.DF_UI_THEME = void 0;
const UI_THEME_ID_GREY_DF = 'GREY',
  UI_THEME_ID_GREY_DC = 'GREY-DC',
  UI_THEME_ID_GREY_DG = 'GREY-DG',
  UI_THEME_ID_WHITE_DM = 'WHITE-DM',
  UI_THEME_ID_WHITE_I = 'WHITE-I',
  UI_THEME_ID_WHITE_BR = 'WHITE-BR',
  UI_THEME_ID_SAND_BR = 'SAND-BR',
  UI_THEME_ID_SAND_DM = 'SAND-DM',
  UI_THEME_ID_SAND_I = 'SAND-I';
const UI_THEME_OPTIONS = exports.UI_THEME_OPTIONS = [{
  caption: 'Grey',
  value: UI_THEME_ID_GREY_DF
}, {
  caption: 'Grey - Darkcyan',
  value: UI_THEME_ID_GREY_DC
}, {
  caption: 'Grey - Darkgoldenrod',
  value: UI_THEME_ID_GREY_DG
}, {
  caption: 'White - Darkmagenta',
  value: UI_THEME_ID_WHITE_DM
}, {
  caption: 'White - Indigo',
  value: UI_THEME_ID_WHITE_I
}, {
  caption: 'White - Brown',
  value: UI_THEME_ID_WHITE_BR
}, {
  caption: 'Sand - Darkmagenta',
  value: UI_THEME_ID_SAND_DM
}, {
  caption: 'Sand - Indigo',
  value: UI_THEME_ID_SAND_I
}, {
  caption: 'Sand - Brown',
  value: UI_THEME_ID_SAND_BR
}];
const DF_UI_THEME = exports.DF_UI_THEME = UI_THEME_OPTIONS[0].caption;
const COLOR_DARKGREY = '#a9a9a9',
  P_GREY = {
    BG_BODY: '#5f5f5f',
    BG: '#4d4d4d'
  },
  P_WHITE = {
    BG_BODY: COLOR_DARKGREY,
    BG: '#eaeaea'
  },
  SAND_BG = '#e8e0cb',
  P_SAND = {
    BG_BODY: COLOR_DARKGREY,
    BG: '#e8e0cb'
  },
  _crPalette = (basePalette, elBgColor) => ({
    ...basePalette,
    EL_BG: elBgColor
  }),
  COLOR_DF = '#232f3b',
  COLOR_DARKCYAN = '#008b8b',
  COLOR_DARKGOLDENROD = '#b8860b',
  COLOR_DARKMAGENTA = '#8b008b',
  COLOR_INDIGO = '#4b0082',
  COLOR_BROWN = '#795548';
const THEME_CONFIG = {
  [UI_THEME_ID_GREY_DF]: _crPalette(P_GREY, COLOR_DF),
  [UI_THEME_ID_GREY_DC]: _crPalette(P_GREY, COLOR_DARKCYAN),
  [UI_THEME_ID_GREY_DG]: _crPalette(P_GREY, COLOR_DARKGOLDENROD),
  [UI_THEME_ID_WHITE_DM]: _crPalette(P_WHITE, COLOR_DARKMAGENTA),
  [UI_THEME_ID_WHITE_I]: _crPalette(P_WHITE, COLOR_INDIGO),
  [UI_THEME_ID_WHITE_BR]: _crPalette(P_WHITE, COLOR_BROWN),
  [UI_THEME_ID_SAND_DM]: _crPalette(P_SAND, COLOR_DARKMAGENTA),
  [UI_THEME_ID_SAND_I]: _crPalette(P_SAND, COLOR_INDIGO),
  [UI_THEME_ID_SAND_BR]: _crPalette(P_SAND, COLOR_BROWN)
};
const _setCustomPropertiesFrom = P => {
  const _style = document.body.style,
    _setProperty = _style.setProperty.bind(_style);
  _style.backgroundColor = P.BG_BODY;
  _setProperty("--bg-c", P.BG);
  _setProperty("--el-bg", P.EL_BG);
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