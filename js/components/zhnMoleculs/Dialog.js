'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _Interact = require('../../utils/Interact');

var _Interact2 = _interopRequireDefault(_Interact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootDiv: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #232F3B',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  captionDiv: {
    padding: '5px',
    color: 'rgba(164, 135, 212,1)',
    backgroundColor: '#232F3B',
    textAlign: 'center',
    fontSize: '18px'
  },
  childrenDiv: {
    cursor: 'default'
  },
  commandDiv: {
    cursor: 'default',
    float: 'right',
    marginTop: '8px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};

var Dialog = _react2.default.createClass({
  displayName: 'Dialog',
  componentDidMount: function componentDidMount() {
    _Interact2.default.makeDragable(this.domRootDiv);
  },
  _renderCommandButton: function _renderCommandButton(commandButtons, onShowChart, onClose) {
    return _react2.default.createElement(
      'div',
      { style: styles.commandDiv },
      commandButtons,
      _react2.default.createElement(_ToolBarButton2.default, {
        type: 'TypeC',
        caption: 'Show',
        onClick: onShowChart
      }),
      _react2.default.createElement(_ToolBarButton2.default, {
        type: 'TypeC',
        caption: 'Close',
        onClick: onClose
      })
    );
  },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var isShow = _props.isShow;
    var caption = _props.caption;
    var children = _props.children;
    var commandButtons = _props.commandButtons;
    var onShowChart = _props.onShowChart;
    var onClose = _props.onClose;
    var _styleShow = isShow ? { display: 'block' } : { display: 'none' };
    var _classShow = isShow ? 'show-popup' : undefined;

    return _react2.default.createElement(
      'div',
      {
        ref: function ref(c) {
          return _this.domRootDiv = c;
        },
        className: _classShow,
        style: Object.assign({}, styles.rootDiv, _styleShow)
      },
      _react2.default.createElement(
        'div',
        { style: styles.captionDiv },
        _react2.default.createElement(
          'span',
          { className: 'not-selected' },
          caption
        ),
        _react2.default.createElement(_SvgClose2.default, { onClose: onClose })
      ),
      _react2.default.createElement(
        'div',
        { style: styles.childrenDiv },
        children
      ),
      this._renderCommandButton(commandButtons, onShowChart, onClose)
    );
  }
});

exports.default = Dialog;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnMoleculs\Dialog.js.map