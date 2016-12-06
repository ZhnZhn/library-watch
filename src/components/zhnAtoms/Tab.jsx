import React from 'react';

const styles = {
  liStyle : {
    float : 'left',
    display : 'inline-block',

    backgroundColor : '#232F3B',
    /*color : 'rgba(164, 135, 212, 1)',*/
    color : 'gray',
    paddingLeft : '10px',
    paddingRight : '10px',
    paddingTop : '6px',
    paddingBottom : '6px',
    borderTopLeftRadius : '8px',
    borderTopRightRadius : '8px',
    cursor : 'pointer',

    fontWeight : 'bold',
    //border: '2px solid rgb(44, 40, 40)',
    border: '2px solid gray',
    borderBottom : 'none'
    //borderTop : 'none'
  },
  selected : {
    borderColor : 'rgba(164, 135, 212, 1)',
    color : 'rgba(164, 135, 212, 1)'
  }
}

const Tab = (props) => {
    const { title, isSelected, onClick } = props
        , _selectedStyle = (isSelected)
             ? styles.selected
             : null;
    return (
       <li
          style={Object.assign({}, styles.liStyle, _selectedStyle)}
          onClick={onClick}
       >
          <span>{title}</span>
       </li>
    )
};

export default Tab
