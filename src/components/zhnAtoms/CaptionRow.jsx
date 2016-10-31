import React from 'react'

import SvgClose from './SvgClose';

const styles = {
  captionDiv : {
    backgroundColor: '#232F3B',
    color: 'rgba(164, 135, 212, 1)',
    height: '28px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    paddingTop: '4px',
    paddingLeft: '10px',
    marginRight: '5px',
    marginBottom: '10px'
  },
  captionSpan: {
    fontSize: '18px',
    fontWeight: '500',
    paddingRight: '8px'
  }
};

const CaptionRow = (props) => {
    const { caption, children, styleRoot, onClose } = props;

    return (
      <div style={Object.assign({}, styles.captionDiv, styleRoot)}>
         <span
            className="not-selected"
            style={styles.captionSpan}
         >
           {caption}
        </span>
        {children}
        <SvgClose onClose={onClose} />
      </div>
    )
};

export default CaptionRow;
