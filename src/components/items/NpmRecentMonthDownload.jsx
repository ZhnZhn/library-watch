import React from 'react'

import SvgClose from '../zhnAtoms/SvgClose';

const styles = {
  rootDiv : {
    lineHeight : 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position : 'relative'
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
    width : '100%',
    height: '30px'
  },
  captionSpanOpen : {
    display : 'inline-block',
    color: 'rgba(164, 135, 212, 1)',
    cursor: 'pointer',
    maxWidth: '500px',
    fontWeight : 'bold',
    whiteSpace: 'nowrap',
    textOverflow : 'ellipsis',
    overflow : 'hidden',
    float : 'left'
  },

  SPAN_VERSION : {
    color: '#80c040',
    paddingLeft : '10px',
    paddingRight : '10px'
  },
  SPAN_START : {
    paddingRight : '10px'
  }
}


const NpmRecentMonthDownload = React.createClass({
  render(){
    const { packageName, downloads, start, end, caption, onCloseItem } = this.props
        , _styleCaption = styles.captionSpanOpen;
    return (
      <div style={styles.rootDiv}>
        <div style={styles.headerDiv}>
          <span
             className="not-selected"
             title={caption}
             style={_styleCaption}
             onClick={this._handlerToggleOpen}
          >
            <span>
              {packageName}
            </span>
            <span style={styles.SPAN_VERSION}>
              {downloads}
            </span>
            <span style={styles.SPAN_START}>
              {start}
            </span>
            <span>
              {end}
            </span>
          </span>
          <SvgClose onClose={onCloseItem} />
        </div>
      </div>
    );
  }
});

export default NpmRecentMonthDownload
