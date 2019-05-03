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

var ITEM_DESCRIPTION = "GitHub Repository Issues";

var _toDate = function _toDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var GitHubIssues = function (_Component) {
  (0, _inherits3.default)(GitHubIssues, _Component);

  function GitHubIssues() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GitHubIssues);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GitHubIssues.__proto__ || Object.getPrototypeOf(GitHubIssues)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
          onWatchItem = _this$props.onWatchItem,
          caption = '' + repo,
          descr = ITEM_DESCRIPTION;

      onWatchItem({
        caption: caption,
        config: { repo: repo, requestType: requestType, version: '', caption: caption, descr: descr }
      });
    }, _this._renderIssues = function (issues) {
      return issues.map(function (item, index) {
        var state = item.state,
            number = item.number,
            created_at = item.created_at,
            updated_at = item.updated_at,
            title = item.title,
            html_url = item.html_url,
            className = index % 2 ? 'row-even not-selected' : 'row-odd not-selected';

        return _react2.default.createElement(
          'div',
          { key: index, className: className },
          _react2.default.createElement(
            'a',
            { href: html_url },
            _react2.default.createElement(
              'div',
              { style: _Item2.default.PB_8 },
              _react2.default.createElement(
                'span',
                { style: _Item2.default.PR_8 },
                state
              ),
              _react2.default.createElement(
                'span',
                { style: _Item2.default.PR_8 },
                '(#' + number + ')'
              ),
              _react2.default.createElement(
                'span',
                { style: _Item2.default.PR_8 },
                _toDate(created_at)
              ),
              _react2.default.createElement(
                'span',
                null,
                _toDate(updated_at)
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              title
            )
          )
        );
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GitHubIssues, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          repo = _props.repo,
          caption = _props.caption,
          _props$issues = _props.issues,
          issues = _props$issues === undefined ? [] : _props$issues,
          onCloseItem = _props.onCloseItem,
          _number = issues.length,
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
              { style: _Item2.default.PR_8 },
              repo
            ),
            _react2.default.createElement(
              'span',
              null,
              _number
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
          { isShow: isShow },
          this._renderIssues(issues)
        )
      );
    }
  }]);
  return GitHubIssues;
}(_react.Component);

exports.default = GitHubIssues;
//# sourceMappingURL=GitHubIssues.js.map