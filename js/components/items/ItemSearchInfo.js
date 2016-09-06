'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _ShowHide = require('../zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

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

var ItemDescription = function ItemDescription(props) {
  var library = props.library;
  var dateCreatedAt = library.created_at.replace('T', ' ').replace('Z', '');
  var datePushedAt = library.pushed_at.replace('T', ' ').replace('Z', '');
  return _react2.default.createElement(
    'div',
    { className: 'library' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__title' },
        library.name
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        library.description
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Size:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        library.size
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Created At:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        dateCreatedAt
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Pushed At:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        datePushedAt
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Stars:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        library.stargazers_count
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Issues:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        library.open_issues
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Watchers:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        library.watchers_count
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'library__link',
          href: library.html_url
        },
        library.html_url
      )
    )
  );
};

var ItemSearchInfo = _react2.default.createClass({
  displayName: 'ItemSearchInfo',
  getInitialState: function getInitialState() {
    return {
      isShow: true
    };
  },
  _handlerToggleOpen: function _handlerToggleOpen() {
    this.setState({ isShow: !this.state.isShow });
  },
  render: function render() {
    var _props = this.props;
    var repo = _props.repo;
    var stars_count = _props.stars_count;
    var pushed_at = _props.pushed_at;
    var caption = _props.caption;
    var library = _props.library;
    var onCloseItem = _props.onCloseItem;
    var _styleCaption = styles.captionSpanOpen;
    var isShow = this.state.isShow;

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
            stars_count
          ),
          _react2.default.createElement(
            'span',
            null,
            pushed_at
          )
        ),
        _react2.default.createElement(_SvgClose2.default, { onClose: onCloseItem })
      ),
      _react2.default.createElement(
        _ShowHide2.default,
        { isShow: isShow },
        _react2.default.createElement(ItemDescription, {
          library: library
        })
      )
    );
  }
});

exports.default = ItemSearchInfo;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\items\ItemSearchInfo.js.map