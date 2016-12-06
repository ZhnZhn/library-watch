"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { ChartActionTypes } from '../../flux/actions/ChartActions';

var ComponentHrzContainer = _react2.default.createClass({
  displayName: "ComponentHrzContainer",
  getInitialState: function getInitialState() {
    return {
      containers: []
    };
  },
  componentWillMount: function componentWillMount() {
    var store = this.props.store;

    this.unsubscribe = store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    var initShowAction = this.props.initShowAction;

    if (actionType === initShowAction) {
      this.state.containers.unshift(data);
      this.setState(this.state);
    }
  },
  _renderContainers: function _renderContainers(containers) {
    return containers.map(function (container, index) {
      return container;
    });
  },
  render: function render() {
    var containers = this.state.containers;

    return _react2.default.createElement(
      "div",
      { className: "hrz-container" },
      this._renderContainers(containers)
    );
  }
});

exports.default = ComponentHrzContainer;
//# sourceMappingURL=ComponentHrzContainer.js.map