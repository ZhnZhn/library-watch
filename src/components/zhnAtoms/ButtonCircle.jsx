import React from 'react';

//import PropTypes from "prop-types";

const STYLE = {
  ROOT : {
    display : 'inline-block',
    color: '#80c040',
    border : '2px solid #80c040',
    borderRadius : '50%',
    width : '22px',
    height : '22px',
    textAlign: 'center',
    cursor: 'pointer'
  }
}

const ButtonCircle = (props) =>{
  const { caption, title, className, style, isWithoutDefault, onClick } = props
      , _className = (className)
           ? className + ' not-selected'
           : 'not-selected'
      , _style = (isWithoutDefault)
           ? style
           : {...STYLE.ROOT, ...style};
  return (
    <span
       className={_className}
       style={_style}
       title={title}
       onClick={onClick}
    >
       {caption}
    </span>
  );
}

/*
ButtonCircle.propTypes = {
  caption : PropTypes.string,
  title : PropTypes.string,
  className : PropTypes.string,
  style : PropTypes.object,
  isWithoutDefault : PropTypes.bool,
  onClick : PropTypes.func
}
*/

export default ButtonCircle
