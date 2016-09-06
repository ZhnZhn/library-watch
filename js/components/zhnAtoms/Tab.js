'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    liStyle: {
        float: 'left',
        display: 'inline-block',

        backgroundColor: '#232F3B',
        /*color : 'rgba(164, 135, 212, 1)',*/
        color: 'gray',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '6px',
        paddingBottom: '6px',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        cursor: 'pointer',

        fontWeight: 'bold',
        //border: '2px solid rgb(44, 40, 40)',
        border: '2px solid gray',
        borderBottom: 'none'
        //borderTop : 'none'
    }
};

var Tab = function Tab(props) {
    var title = props.title;
    var isSelected = props.isSelected;
    var onClick = props.onClick;
    var selectedStyle = isSelected ?
    //{backgroundColor : '#2C2828', color : 'rgba(164, 135, 212, 1)'}
    { borderColor: 'rgba(164, 135, 212, 1)', color: 'rgba(164, 135, 212, 1)' } : null;
    return _react2.default.createElement(
        'li',
        {
            style: Object.assign({}, styles.liStyle, selectedStyle),
            onClick: onClick
        },
        _react2.default.createElement(
            'span',
            null,
            title
        )
    );
};

exports.default = Tab;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\zhnAtoms\Tab.js.map