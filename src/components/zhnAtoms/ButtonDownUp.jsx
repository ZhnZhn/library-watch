import React from 'react';

const STYLE = {
  ROOT : {
    display : 'inline-block',
    border : '1px solid',
    borderRadius : '10px',    
    cursor : 'pointer'
  },
  ROOT_UP : {
    color: '#a487d4',
    borderColor: '#a487d4',
    borderWidth: '2px',
    fontWeight: 'bold'
  },
  ROOT_DOWN : {
    color: 'gray',
    borderColor: 'gray',
    borderWidth: '1px',
    fontWeight: 'normal'
  },

  ITEM : {
    display : 'inline-block',
    paddingLeft : '5px',
    paddingRight : '20px'
  },
  CIRCLE : {
    display : 'inline-block',
    marginLeft : '15px',
    backgroundColor: 'gray',
    width : '12px',
    height : '12px',
    border: '1px solid gray',
    borderRadius : '50%'
  },
  CIRCLE_UP : {
    backgroundColor: '#a487d4',
    borderColor: '#a487d4'
  },
  CIRCLE_DOWN : {
    backgroundColor: 'gray',
    borderColor: 'gray'
  }
}

const ButtonDownUp = (props) => {
    const { caption, title, isUp, styleRoot, onClick } = props
        , _styleRoot = (isUp) ? STYLE.ROOT_UP : STYLE.ROOT_DOWN
        , _styleCircle = (isUp) ? STYLE.CIRCLE_UP : STYLE.CIRCLE_DOWN;

    return (
      <span
         title={title}
         style={Object.assign({}, STYLE.ROOT, styleRoot, _styleRoot)}
         onClick={onClick}
      >
        <span style={Object.assign({}, STYLE.CIRCLE, _styleCircle)}>
        </span>
        <span style={STYLE.ITEM}>
           {caption}
        </span>
     </span>
   );
};

export default ButtonDownUp
