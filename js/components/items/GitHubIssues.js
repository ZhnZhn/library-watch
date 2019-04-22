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

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _ButtonCircle = require('../zhn-atoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_DESCRIPTION = "GitHub Repository Issues";

var styles = {
  rootDiv: {
    lineHeight: 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position: 'relative'
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
  BTN_CIRCLE: {
    marginLeft: '10px'
  }
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
    }, _this._handlerToggleOpen = function () {
      _this.setState({ isShow: !_this.state.isShow });
    }, _this._handlerClickWatch = function () {
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
              { style: { paddingBottom: '8px' } },
              _react2.default.createElement(
                'span',
                { style: { paddingRight: '8px' } },
                state
              ),
              _react2.default.createElement(
                'span',
                { style: { paddingRight: '8px' } },
                '(#' + number + ')'
              ),
              _react2.default.createElement(
                'span',
                { style: { paddingRight: '8px' } },
                created_at.replace('T', ' ').replace('Z', '')
              ),
              _react2.default.createElement(
                'span',
                null,
                updated_at.replace('T', ' ').replace('Z', '')
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
          _styleCaption = styles.captionSpanOpen,
          isShow = this.state.isShow;


      return _react2.default.createElement(
        'div',
        { style: styles.rootDiv },
        _react2.default.createElement(
          _ItemCaption2.default,
          { onClose: onCloseItem },
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
              { style: { paddingRight: '8px' } },
              repo
            ),
            _react2.default.createElement(
              'span',
              null,
              _number
            )
          ),
          _react2.default.createElement(_ButtonCircle2.default, {
            caption: 'W',
            title: 'Add to Watch',
            style: styles.BTN_CIRCLE,
            onClick: this._handlerClickWatch
          })
        ),
        _react2.default.createElement(
          _ShowHide2.default,
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