"use strict";

exports.__esModule = true;
exports.setUiTheme = exports.getThemeName = exports.UI_THEME_OPTIONS = exports.DF_UI_THEME = void 0;
const UI_THEME_ID_GREY_SI = 'GREY-SI',
  UI_THEME_ID_GREY_DM = 'GREY-DM',
  UI_THEME_ID_GREY_DC = 'GREY-DC',
  UI_THEME_ID_GREY_DOR = 'GREY-DOR',
  UI_THEME_ID_GREY_SB = 'GREY-SB',
  UI_THEME_ID_LIGHT_GREY_DM = 'LIGHT-GREY',
  UI_THEME_ID_LIGHT_GREY_DC = 'LIGHT-GREY-DC',
  UI_THEME_ID_LIGHT_GREY_I = 'LIGHT-GREY-I',
  UI_THEME_ID_WHITE_DM = 'WHITE-DM',
  UI_THEME_ID_WHITE_I = 'WHITE-I',
  UI_THEME_ID_WHITE_DC = 'WHITE-BR',
  UI_THEME_ID_SAND_DC = 'SAND-BR',
  UI_THEME_ID_SAND_DM = 'SAND-DM',
  UI_THEME_ID_SAND_I = 'SAND-I';
const _crOptionItem = configTuple => ({
    caption: configTuple[0],
    value: configTuple[1]
  }),
  _getOptionValue = item => item?.value,
  _getOptionCaption = item => item?.caption,
  _fCrCaption = suffix => prefix => `${prefix} - ${suffix}`,
  _crSlateInkCaption = _fCrCaption('Slate Ink'),
  _crDarkmagentaCaption = _fCrCaption('Darkmagenta'),
  _crDarkcyanCaption = _fCrCaption('Darkcyan'),
  _crSteelblueCaption = _fCrCaption('Steelblue'),
  _crIndigoCaption = _fCrCaption('Indigo'),
  _crDarkorchidCaption = _fCrCaption('Darkorchid'),
  _crPrefixCaption = prefix => prefix,
  _fCrCaptions = (...crCaptions) => (captionPrefix, ...ids) => crCaptions.map((crCaption, index) => [crCaption(captionPrefix), ids[index]]),
  _crGreyCaptions = _fCrCaptions(_crSlateInkCaption, _crDarkmagentaCaption, _crDarkcyanCaption, _crSteelblueCaption, _crDarkorchidCaption),
  _crMciCaptions = _fCrCaptions(_crDarkmagentaCaption, _crDarkcyanCaption, _crIndigoCaption),
  UI_THEME_COMFIGS = [..._crGreyCaptions('Grey', UI_THEME_ID_GREY_SI, UI_THEME_ID_GREY_DM, UI_THEME_ID_GREY_DC, UI_THEME_ID_GREY_SB, UI_THEME_ID_GREY_DOR), ..._crMciCaptions('Ligth Grey', UI_THEME_ID_LIGHT_GREY_DM, UI_THEME_ID_LIGHT_GREY_DC, UI_THEME_ID_LIGHT_GREY_I), ..._crMciCaptions('White', UI_THEME_ID_WHITE_DM, UI_THEME_ID_WHITE_DC, UI_THEME_ID_WHITE_I), ..._crMciCaptions('Sand', UI_THEME_ID_SAND_DM, UI_THEME_ID_SAND_DC, UI_THEME_ID_SAND_I)];
const UI_THEME_OPTIONS = exports.UI_THEME_OPTIONS = UI_THEME_COMFIGS.map(_crOptionItem);
const DF_UI_THEME = exports.DF_UI_THEME = _getOptionCaption(UI_THEME_OPTIONS[0]);
const COLOR_DARKGREY = '#a9a9a9',
  P_GREY = {
    BG_BODY: '#5f5f5f',
    BG: '#4d4d4d'
  },
  P_LIGHT_GREY = {
    BG_BODY: COLOR_DARKGREY,
    BG: '#d0d0d0'
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
  COLOR_SLATE_INK = '#232f3b',
  COLOR_DARKCYAN = '#008b8b',
  COLOR_DARKORCHID = '#9932cc',
  COLOR_GREY_DARKMAGENTA = '#b268b7',
  COLOR_STEELBLUE = '#4682b4',
  COLOR_DARKMAGENTA = '#8b008b',
  COLOR_INDIGO = '#4b0082';
const THEME_CONFIG = {
  [UI_THEME_ID_GREY_SI]: _crPalette(P_GREY, COLOR_SLATE_INK),
  [UI_THEME_ID_GREY_DM]: _crPalette(P_GREY, COLOR_GREY_DARKMAGENTA),
  [UI_THEME_ID_GREY_DC]: _crPalette(P_GREY, COLOR_DARKCYAN),
  [UI_THEME_ID_GREY_SB]: _crPalette(P_GREY, COLOR_STEELBLUE),
  [UI_THEME_ID_GREY_DOR]: _crPalette(P_GREY, COLOR_DARKORCHID),
  [UI_THEME_ID_LIGHT_GREY_DM]: _crPalette(P_LIGHT_GREY, COLOR_DARKMAGENTA),
  [UI_THEME_ID_LIGHT_GREY_DC]: _crPalette(P_LIGHT_GREY, COLOR_DARKCYAN),
  [UI_THEME_ID_LIGHT_GREY_I]: _crPalette(P_LIGHT_GREY, COLOR_INDIGO),
  [UI_THEME_ID_WHITE_DM]: _crPalette(P_WHITE, COLOR_DARKMAGENTA),
  [UI_THEME_ID_WHITE_DC]: _crPalette(P_WHITE, COLOR_DARKCYAN),
  [UI_THEME_ID_WHITE_I]: _crPalette(P_WHITE, COLOR_INDIGO),
  [UI_THEME_ID_SAND_DM]: _crPalette(P_SAND, COLOR_DARKMAGENTA),
  [UI_THEME_ID_SAND_DC]: _crPalette(P_SAND, COLOR_DARKCYAN),
  [UI_THEME_ID_SAND_I]: _crPalette(P_SAND, COLOR_INDIGO)
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
const DF_UI_THEME_ID = _getOptionValue(UI_THEME_OPTIONS[0]);
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
  const _themeName = _getOptionValue(item);
  if (_uiTheme.getThemeName() !== _themeName) {
    _uiTheme.setThemeName(_themeName);
  }
};
exports.setUiTheme = setUiTheme;
const getThemeName = () => _uiTheme.getThemeName();
exports.getThemeName = getThemeName;
//# sourceMappingURL=uiTheme.js.map