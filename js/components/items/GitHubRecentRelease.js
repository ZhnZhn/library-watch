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

var ITEM_DESCRIPTION = "GitHub Repository Recent Release";

var GitHubRecentRelease = function (_Component) {
  (0, _inherits3.default)(GitHubRecentRelease, _Component);

  function GitHubRecentRelease() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GitHubRecentRelease);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GitHubRecentRelease.__proto__ || Object.getPrototypeOf(GitHubRecentRelease)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: true
    }, _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    }, _this._hClickWatch = function () {
      var _this$props = _this.props,
          repo = _this$props.repo,
          requestType = _this$props.requestType,
          version = _this$props.version,
          published_at = _this$props.published_at,
          onWatchItem = _this$props.onWatchItem,
          caption = repo + ' ' + version,
          descr = ITEM_DESCRIPTION;

      onWatchItem({
        caption: caption,
        config: { repo: repo, requestType: requestType, version: version, caption: caption, descr: descr, date: published_at }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GitHubRecentRelease, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          repo = _props.repo,
          version = _props.version,
          published_at = _props.published_at,
          html_url = _props.html_url,
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
              version
            ),
            _react2.default.createElement(
              'span',
              null,
              published_at
            )
          ),
          _react2.default.createElement(_A2.default.ButtonCircle, {
            caption: 'W',
            title: 'Add to Watch',
            style: _Item2.default.BTN_CIRCLE,
            onClick: this._hClickWatch
          })
        ),
        _react2.default.createElement(
          _A2.default.ShowHide,
          { isShow: isShow, style: _Item2.default.PT_8 },
          _react2.default.createElement(
            'a',
            {
              href: html_url,
              className: 'github-link',
              style: _Item2.default.ML_8
            },
            'Link to description of recent release tag'
          )
        )
      );
    }
  }]);
  return GitHubRecentRelease;
}(_react.Component);

exports.default = GitHubRecentRelease;
//# sourceMappingURL=GitHubRecentRelease.js.map