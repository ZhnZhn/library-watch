import React from 'react';

const styles = {
  rootDiv: {
    backgroundColor: '#4D4D4D',
    lineHeight: 1.5
  },
  divSvg : {
    width: '16px',
    height: '16px',
    display: 'inline-block'
  },
  labelCaption: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  itemRow : {
    backgroundColor: '#404040'
  },
  displayInline : {
    display: 'inline-block'
  },
  displayBlock : {
    display: 'block'
  },
  displayNone : {
    display : 'none'
  }
};

const FILL_OPEN = 'yellow'
    , FILL_CLOSE = '#4D4D4D'
    , PATH_OPEN = "M 2,14 L 14,14 14,2 2,14"
    , PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

const OpenClose2 = React.createClass({
   getInitialState(){
      const { isClose } = this.props

      return {
        isOpen: (isClose) ? false : true
      };
   },

  _handleClickOpenClose(){
    this.setState({ isOpen : !this.state.isOpen });
  },

  render(){
    const {
            style, styleNotSelected, styleCaption, caption,
            fillOpen=FILL_OPEN, fillClose=FILL_CLOSE,
            isDraggable, option, onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop,
            children
          } = this.props
          , _dragOption = (isDraggable)
               ? {
                     draggable : true,
                     onDragStart : onDragStart.bind(null, option),
                     onDrop : onDrop.bind(null, option),
                     onDragEnter : onDragEnter,
                     onDragOver : onDragOver,
                     onDragLeave : onDragLeave
                 }
              : undefined ;

    let _pathV, _fillV, _styleCollapse, _classShow, _styleNotSelected;
    if (this.state.isOpen){
      _pathV = PATH_OPEN;
      _fillV = fillOpen;
      _styleCollapse = styles.displayBlock;
      _classShow = 'show-popup';
      _styleNotSelected = null;

    } else {
      _pathV = PATH_CLOSE;
      _fillV = fillClose;
      _styleCollapse = styles.displayNone;
      _classShow = null;
      _styleNotSelected = styleNotSelected;
    }


    return (
      <div style={Object.assign({}, styles.rootDiv, style)}>
        <div
           className="not-selected"
           style={_styleNotSelected}
           onClick={this._handleClickOpenClose}
           {..._dragOption}
         >
          <div style={styles.divSvg}>
             <svg
                viewBox="0 0 16 16" width="100%" height="100%"
                preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                style={styles.displayInline}
              >
             <path
                d={_pathV}
                fill={_fillV}
                strokeWidth="1" stroke={fillOpen}
             >
             </path>
             </svg>
         </div>
         <span style={Object.assign({}, styles.labelCaption, styleCaption)} >
            {caption}
         </span>
       </div>
      <div
         className={_classShow}
         style={_styleCollapse}
       >
        {children}
      </div>
     </div>
    )
  }
});

export default OpenClose2;
