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

var _DateAgo = require('../zhnAtoms/DateAgo');

var _DateAgo2 = _interopRequireDefault(_DateAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_DESCRIPTION = "GitHub Repository Commits";

//import ButtonCircle from '../zhnAtoms/ButtonCircle';


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
  BTN_CIRCLE: {
    marginLeft: '10px'
  },
  SPAN_TAG: {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '4px',
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '6px',
    marginBottom: '2px',
    borderRadius: '16px'
  },

  PURPLE_BADGE: {
    color: '#a487d4', fontSize: '18px', paddingRight: '8px'
  },
  GREEN_BADGE: {
    color: '#80c040', fontSize: '18px', paddingRight: '8px'
  },
  BLACK_BAGDE: {
    color: 'black', fontSize: '18px', paddingRight: '8px'
  }
};

var StackTaggedQuestions = _react2.default.createClass({
  displayName: 'StackTaggedQuestions',
  getInitialState: function getInitialState() {
    return {
      isShow: true
    };
  },
  _handlerToggleOpen: function _handlerToggleOpen() {
    this.setState({ isShow: !this.state.isShow });
  },
  _handlerClickWatch: function _handlerClickWatch() {
    var _props = this.props;
    var repo = _props.repo;
    var requestType = _props.requestType;
    var onWatchItem = _props.onWatchItem;
    var caption = '' + repo;
    var descr = ITEM_DESCRIPTION;
    onWatchItem({
      caption: caption,
      config: { repo: repo, requestType: requestType, version: '', caption: caption, descr: descr }
    });
  },
  _renderCommits: function _renderCommits(items) {
    var _this = this;

    return items.map(function (item, index) {
      var answer_count = item.answer_count;
      var score = item.score;
      var view_count = item.view_count;
      var title = item.title;
      var dateAgo = item.dateAgo;
      var link = item.link;
      var owner = item.owner;
      var tags = item.tags;
      var reputation = owner.reputation;
      var display_name = owner.display_name;
      var className = index % 2 ? 'row-even not-selected' : 'row-odd not-selected';

      return _react2.default.createElement(
        'div',
        { key: index, className: className },
        _react2.default.createElement(
          'a',
          { href: link },
          _react2.default.createElement(
            'div',
            { style: { paddingBottom: '8px' } },
            _react2.default.createElement(
              'span',
              { style: styles.PURPLE_BADGE },
              '⚒ ',
              answer_count
            ),
            _react2.default.createElement(
              'span',
              { style: styles.GREEN_BADGE },
              '⚾ ',
              score
            ),
            _react2.default.createElement(
              'span',
              { style: styles.BLACK_BAGDE },
              '☸ ',
              view_count
            ),
            _react2.default.createElement(
              'span',
              { style: styles.GREEN_BADGE },
              '☘ ',
              reputation
            ),
            _react2.default.createElement(
              'span',
              { style: styles.BLACK_BAGDE },
              display_name
            ),
            _react2.default.createElement(_DateAgo2.default, {
              dateAgo: dateAgo,
              date: ""
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            title
          ),
          _react2.default.createElement(
            'div',
            null,
            _this._renderTags(tags)
          )
        )
      );
    });
  },
  _renderTags: function _renderTags(tags) {
    return tags.map(function (tag, index) {
      return _react2.default.createElement(
        'span',
        { key: index, style: styles.SPAN_TAG },
        tag
      );
    });
  },
  render: function render() {
    var _props2 = this.props;
    var repo = _props2.repo;
    var caption = _props2.caption;
    var _props2$items = _props2.items;
    var items = _props2$items === undefined ? [] : _props2$items;
    var onCloseItem = _props2.onCloseItem;
    var _items_count = items.length;
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
            { style: { color: '#a9a9a9', paddingLeft: '12px' } },
            _items_count
          )
        ),
        _react2.default.createElement(_SvgClose2.default, { onClose: onCloseItem })
      ),
      _react2.default.createElement(
        _ShowHide2.default,
        { isShow: isShow },
        this._renderCommits(items)
      )
    );
  }
});

exports.default = StackTaggedQuestions;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\items\StackTaggedQuestions.js.map