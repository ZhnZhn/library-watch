'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _enzyme = require('enzyme');

var _zhnSpy = require('../../../../js/components/zhnAtoms/__tests__/zhnSpy');

var _zhnSpy2 = _interopRequireDefault(_zhnSpy);

var _MenuBadge = require('../../../../js/components/zhnAtoms/MenuBadge');

var _MenuBadge2 = _interopRequireDefault(_MenuBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnGetWrapper = function _fnGetWrapper(props) {
    return (0, _enzyme.shallow)(_react2.default.createElement(_MenuBadge2.default, props));
};

(0, _ava2.default)('render root span with class `menu__badge`', function (t) {
    var wrapper = _fnGetWrapper();

    t.true(wrapper.is('span'));
    t.true(wrapper.hasClass('menu__badge'));
});

(0, _ava2.default)('should use prop counter', function (t) {
    var counter = 10,
        wrapper = _fnGetWrapper({ counter: counter });

    t.is(parseInt(wrapper.text(), 10), counter);
});

(0, _ava2.default)('should call stopPropagation and onBadgeOpen on root click if isOpen falsy', function (t) {
    var //onBadgeOpenSpy = sinon.spy()
    //,  onBadgeCloseSpy = sinon.spy()
    onBadgeOpenSpy = _zhnSpy2.default.createValueSpy(),
        onBadgeCloseSpy = _zhnSpy2.default.createValueSpy(),
        stopPropagationSpy = _zhnSpy2.default.createValueSpy(),
        wrapper = _fnGetWrapper({
        onBadgeOpen: onBadgeOpenSpy,
        onBadgeClose: onBadgeCloseSpy
    });

    wrapper.simulate('click', { stopPropagation: stopPropagationSpy });
    t.true(stopPropagationSpy.isCalledOnce());
    t.true(onBadgeOpenSpy.isCalledOnce());
    t.true(!onBadgeCloseSpy.isCalledOnce());
});

(0, _ava2.default)('should call stopPropagation and onBadgeClose on root click if isOpen true', function (t) {
    var onBadgeOpenSpy = _zhnSpy2.default.createValueSpy(),
        onBadgeCloseSpy = _zhnSpy2.default.createValueSpy(),
        stopPropagationSpy = _zhnSpy2.default.createValueSpy(),
        wrapper = _fnGetWrapper({
        isOpen: true,
        onBadgeOpen: onBadgeOpenSpy,
        onBadgeClose: onBadgeCloseSpy
    });

    wrapper.simulate('click', { stopPropagation: stopPropagationSpy });
    t.true(stopPropagationSpy.isCalledOnce());
    t.true(onBadgeCloseSpy.isCalledOnce());
    t.true(!onBadgeOpenSpy.isCalledOnce());
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\__tests__\MenuBadge.test.js.map