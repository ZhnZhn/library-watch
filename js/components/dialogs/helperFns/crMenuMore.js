'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CL_ROW = 'row__pane-topic not-selected';

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _addItemTo = function _addItemTo(arr, comp, _ref) {
  var name = _ref.name,
      onClick = _ref.onClick,
      isClose = _ref.isClose;

  if (_isFn(onClick)) {
    arr.push({
      cn: CL_ROW,
      onClick: onClick.hasOwnProperty('prototype') ? onClick.bind(comp) : onClick,
      name: name, isClose: isClose
    });
  }
};

var crMenuMore = function crMenuMore(comp, _ref2) {
  var toggleDates = _ref2.toggleDates,
      toggleLabels = _ref2.toggleLabels,
      toggleToolBar = _ref2.toggleToolBar;

  var p0 = [];
  _addItemTo(p0, comp, {
    name: 'Toggle Dates',
    onClick: toggleDates,
    isClose: true
  });
  _addItemTo(p0, comp, {
    name: 'Toggle Labels',
    onClick: toggleLabels,
    isClose: true
  });
  _addItemTo(p0, comp, {
    name: 'Toggle ToolBar',
    onClick: toggleToolBar,
    isClose: true
  });

  return {
    baseTitleCl: CL_ROW,
    pageWidth: 160,
    maxPages: 1,
    p0: p0
  };
};

exports.default = crMenuMore;
//# sourceMappingURL=crMenuMore.js.map