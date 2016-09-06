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
  },
  SPAN_START: {
    paddingRight: '10px'
  }
};

var NpmRecentMonthDownload = _react2.default.createClass({
  displayName: 'NpmRecentMonthDownload',
  render: function render() {
    var _props = this.props;
    var packageName = _props.packageName;
    var downloads = _props.downloads;
    var start = _props.start;
    var end = _props.end;
    var caption = _props.caption;
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
            packageName
          ),
          _react2.default.createElement(
            'span',
            { style: styles.SPAN_VERSION },
            downloads
          ),
          _react2.default.createElement(
            'span',
            { style: styles.SPAN_START },
            start
          ),
          _react2.default.createElement(
            'span',
            null,
            end
          )
        ),
        _react2.default.createElement(_SvgClose2.default, { onClose: onCloseItem })
      )
    );
  }
});

exports.default = NpmRecentMonthDownload;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\items\NpmRecentMonthDownload.js.map