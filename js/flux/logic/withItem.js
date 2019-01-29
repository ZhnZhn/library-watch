'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RouterItem = require('../../components/factories/RouterItem');

var _RouterItem2 = _interopRequireDefault(_RouterItem);

var _ChartActions = require('../actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _Type = require('../../constants/Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import WatchActions from '../actions/WatchActions';
var onCloseItem = _ChartActions2.default.closeChart,
    onWatchItem = _ComponentActions2.default.showModalDialog.bind(null, _Type.ModalDialog.ADD_ITEM);
//, onWatchItem = WatchActions.addItem;

var withItem = {
  createItem: function createItem(option, json, parentProps) {
    var requestType = option.requestType,
        _fnFactory = _RouterItem2.default[requestType] ? _RouterItem2.default[requestType] : _RouterItem2.default.DEFAULT;

    return _fnFactory({
      factory: this.getElementFactory(),
      option: option, json: json, parentProps: parentProps,
      onCloseItem: onCloseItem, onWatchItem: onWatchItem
    });
  }
};

exports.default = withItem;
//# sourceMappingURL=withItem.js.map