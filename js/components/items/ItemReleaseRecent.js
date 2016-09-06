'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootDiv: {
    lineHeight: 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position: 'relative'
  },
  headerDiv: {
    backgroundColor: '#232F3B',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    paddingTop: '4px',
    paddingLeft: '10px',
    lineHeight: 1.5,
    //height: '25px',
    //width: '600px'
    width: '100%',
    height: '30px'
  },
  captionSpanOpen: {
    display: 'inline-block',
    color: 'rgba(164, 135, 212, 1)',
    cursor: 'pointer',
    maxWidth: '500px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    float: 'left'
  },

  SPAN_VERSION: {
    color: '#80c040',
    paddingLeft: '10px',
    paddingRight: '10px'
  }
};

var ItemReleaseRecent = _react2.default.createClass({
  displayName: 'ItemReleaseRecent',
  _handlerToggleOpen: function _handlerToggleOpen() {},
  render: function render() {
    var _props = this.props;
    var caption = _props.caption;
    var repo = _props.repo;
    var version = _props.version;
    var published_at = _props.published_at;
    var onCloseItem = _props.onCloseItem;
    var _styleCaption = styles.captionSpanOpen;
    return _react2.default.createElement(
      'div',
      { style: styles.rootDiv },
      _react2.default.createElement(
        'div',
        { style: styles.headerDiv },
        _react2.default.createElement(
          'span',
          {
            className: 'not-selected',
            title: caption,
            style: _styleCaption,
            onClick: this._handlerToggleOpen
          },
          _react2.default.createElement(
            'span',
            null,
            repo
          ),
          _react2.default.createElement(
            'span',
            { style: styles.SPAN_VERSION },
            version
          ),
          _react2.default.createElement(
            'span',
            null,
            published_at
          )
        ),
        _react2.default.createElement(_SvgClose2.default, { onClose: onCloseItem })
      )
    );
  }
});

exports.default = ItemReleaseRecent;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\items\ItemReleaseRecent.js.map