'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _CaptionRow = require('../../../../js/components/zhnAtoms/CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _CaptionRow3 = require('../../../../js/components/zhnAtoms/CaptionRow.Style');

var _CaptionRow4 = _interopRequireDefault(_CaptionRow3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
    return (0, _enzyme.shallow)(_react2.default.createElement(_CaptionRow2.default, props));
};

(0, _ava2.default)('render root div', function (t) {
    var wrapper = _fnGetWrapper();

    t.true(wrapper.is('div'));
    t.deepEqual(wrapper.props().style, _CaptionRow4.default.ROOT);
    var spanCaption = wrapper.childAt(0);
    t.deepEqual(spanCaption.props().style, _CaptionRow4.default.SPAN);
});

(0, _ava2.default)('should use props caption, styleRoot', function (t) {
    var caption = "caption",
        styleRoot = { color: "green" },
        wrapper = _fnGetWrapper({ caption: caption, styleRoot: styleRoot });

    var spanCaption = wrapper.childAt(0);
    t.is(spanCaption.text(), caption);
    t.is(wrapper.props().style.color, styleRoot.color);
});

(0, _ava2.default)('should pass prop onClose for SvgClose', function (t) {
    var onCloseSpy = (0, _sinon.spy)(),
        wrapper = _fnGetWrapper({ onClose: onCloseSpy });

    var svgClose = wrapper.find('SvgClose');
    t.is(svgClose.props().onClose, onCloseSpy);
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\CaptionRow.test.js.map