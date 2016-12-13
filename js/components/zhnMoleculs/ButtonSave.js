'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CAPTION = "S",
    TITLE = "Save Watch Items to Locale Storage",
    STYLE = {
  NOT_WATCH_EDITED: {
    borderColor: 'gray',
    color: 'gray'
  }
};

var ButtonSave = _react2.default.createClass({
  displayName: 'ButtonSave',

  propTypes: {
    store: _react.PropTypes.object.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      isWatchEdited: this.props.store.getWatchEdited()
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isWatchEdited === this.state.isWatchEdited) {
      return false;
    }
    return true;
  },
  componentDidMount: function componentDidMount() {
    var store = this.props.store;

    this.unsubcribe = store.listen(this._onStore);
    this.setState({ isWatchEdited: store.getWatchEdited() });
  },
  _onStore: function _onStore(actionType, value) {
    if (actionType === this.props.actionWatchEdited) {
      this.setState({ isWatchEdited: value });
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubcribe();
  },
  render: function render() {
    var _props = this.props,
        style = _props.style,
        onClick = _props.onClick,
        isWatchEdited = this.state.isWatchEdited,
        _style = isWatchEdited ? style : Object.assign({}, style, STYLE.NOT_WATCH_EDITED);

    return _react2.default.createElement(_ButtonCircle2.default, {
      caption: CAPTION,
      title: TITLE,
      style: _style,
      onClick: onClick
    });
  }
});

exports.default = ButtonSave;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnMoleculs\ButtonSave.js.map