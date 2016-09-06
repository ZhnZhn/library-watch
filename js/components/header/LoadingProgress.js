'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoadingProgressActions = require('../../flux/actions/LoadingProgressActions');

var _ProgressLine = require('../zhnAtoms/ProgressLine');

var _ProgressLine2 = _interopRequireDefault(_ProgressLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { ChartActionTypes } from '../../flux/actions/ChartActions';


var COLOR = {
  LOADING: '#2F7ED8',
  FAILED: 'rgb(237, 88, 19)'
};

var LoadingProgress = _react2.default.createClass({
  displayName: 'LoadingProgress',
  getInitialState: function getInitialState() {
    return {
      completed: 0,
      color: COLOR.LOADING
    };
  },
  componentDidMount: function componentDidMount() {
    //this.unsubscribe = this.props.store.listen(this._onStore);
    this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, option) {
    /*
     if (actionType === ChartActionTypes.LOAD_STOCK){
       this.setState({ completed: 35, color: COLOR.LOADING });
     } else if (actionType === ChartActionTypes.LOAD_STOCK_COMPLETED
                || actionType === ChartActionTypes.LOAD_STOCK_ADDED){
       this.setState({ completed: 100, color: COLOR.LOADING });
     } else if (actionType === ChartActionTypes.LOAD_STOCK_FAILED){
       this.setState({ completed: 100, color: COLOR.FAILED })
     }
     */
    if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING) {
      this.setState({ completed: 35, color: COLOR.LOADING });
    } else if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING_COMPLETE) {
      this.setState({ completed: 100, color: COLOR.LOADING });
    } else if (actionType === _LoadingProgressActions.LoadingProgressActionTypes.LOADING_FAILED) {
      this.setState({ completed: 100, color: COLOR.FAILED });
    }
  },
  render: function render() {
    var _state = this.state;
    var completed = _state.completed;
    var color = _state.color;

    return _react2.default.createElement(_ProgressLine2.default, {
      height: 3,
      color: color,
      completed: completed
    });
  }
});

exports.default = LoadingProgress;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\header\LoadingProgress.js.map