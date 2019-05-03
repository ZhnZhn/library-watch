'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _A = require('../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _Item = require('./Item.Style');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _formatDate = function _formatDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var ItemDescription = function ItemDescription(props) {
  var _props$library = props.library,
      library = _props$library === undefined ? {} : _props$library,
      name = library.name,
      description = library.description,
      size = library.size,
      created_at = library.created_at,
      pushed_at = library.pushed_at,
      stargazers_count = library.stargazers_count,
      open_issues = library.open_issues,
      watchers_count = library.watchers_count,
      html_url = library.html_url,
      _dateCreatedAt = _formatDate(created_at),
      _datePushedAt = _formatDate(pushed_at);

  return _react2.default.createElement(
    'div',
    { className: 'library' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__title' },
        name
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        description
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
        size
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
        _dateCreatedAt
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Pushed At:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        _datePushedAt
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
        stargazers_count
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Issues:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        open_issues
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Watchers:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        watchers_count
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'library__link',
          href: html_url
        },
        'Link to GitHub Repository'
      )
    )
  );
};

var GitHubSearchInfo = function (_Component) {
  (0, _inherits3.default)(GitHubSearchInfo, _Component);

  function GitHubSearchInfo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GitHubSearchInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GitHubSearchInfo.__proto__ || Object.getPrototypeOf(GitHubSearchInfo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: true
    }, _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GitHubSearchInfo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          repo = _props.repo,
          stars_count = _props.stars_count,
          pushed_at = _props.pushed_at,
          caption = _props.caption,
          library = _props.library,
          onCloseItem = _props.onCloseItem,
          isShow = this.state.isShow;

      return _react2.default.createElement(
        'div',
        { style: _Item2.default.ROOT },
        _react2.default.createElement(
          _ItemCaption2.default,
          { onClose: onCloseItem },
          _react2.default.createElement(
            'button',
            {
              className: 'not-selected',
              title: caption,
              style: _Item2.default.CAPTION_OPEN,
              onClick: this._hToggleOpen
            },
            _react2.default.createElement(
              'span',
              null,
              repo
            ),
            _react2.default.createElement(
              'span',
              { style: _Item2.default.SPAN_VERSION },
              stars_count
            ),
            _react2.default.createElement(
              'span',
              null,
              pushed_at
            )
          )
        ),
        _react2.default.createElement(
          _A2.default.ShowHide,
          { isShow: isShow },
          _react2.default.createElement(ItemDescription, {
            library: library
          })
        )
      );
    }
  }]);
  return GitHubSearchInfo;
}(_react.Component);

exports.default = GitHubSearchInfo;
//# sourceMappingURL=GitHubSearchInfo.js.map