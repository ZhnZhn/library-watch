import React, { Component } from 'react';

import Caption from './ItemCaption'
import ShowHide from '../zhn-atoms/ShowHide';
import DateAgo from '../zhn-atoms/DateAgo';

const ITEM_DESCRIPTION = "GitHub Repository Commits"

const styles = {
  rootDiv : {
    lineHeight : 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position : 'relative'
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
  BTN_CIRCLE : {
    marginLeft: '10px'
  },
  SPAN_TAG : {
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

  PURPLE_BADGE : {
    color: '#a487d4', fontSize: '18px', paddingRight: '8px'
  },
  GREEN_BADGE : {
    color: '#80c040', fontSize: '18px', paddingRight: '8px'
  },
  BLACK_BAGDE : {
    color: 'black', fontSize: '18px', paddingRight: '8px'
  }
}

class StackTaggedQuestions extends Component {
  state = {
    isShow: true
  }

  _handlerToggleOpen = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  _handlerClickWatch = () => {
    const { repo, requestType, onWatchItem } = this.props
        , caption = `${repo}`
        , descr = ITEM_DESCRIPTION
    onWatchItem({
       caption : caption,
       config : { repo, requestType, version : '', caption, descr }
    });
  }

  _renderCommits = (items) => {
     return items.map((item, index) => {
        const {
                 answer_count, score, view_count,
                 title, dateAgo, link,
                 owner, tags
               } = item
            , { reputation, display_name } = owner
            , className = (index % 2)
                     ? 'row-even not-selected'
                     : 'row-odd not-selected'

        return (
           <div key={index} className={className}>
              <a href={link}>
              <div style={{ paddingBottom: '8px' }}>
                <span style={styles.PURPLE_BADGE}>
                  &#9874;&nbsp;{answer_count}
                </span>
                <span style={styles.GREEN_BADGE}>
                  &#9918;&nbsp;{score}
                </span>
                <span style={styles.BLACK_BAGDE}>
                  &#9784;&nbsp;{view_count}
                </span>
                <span style={styles.GREEN_BADGE}>
                  &#9752;&nbsp;{reputation}
                </span>
                <span style={styles.BLACK_BAGDE}>
                  {display_name}
                </span>
                <DateAgo
                   dateAgo={dateAgo}
                   date={""}
                />
              </div>
                <div>
                  {title}
                </div>
                <div>
                  {this._renderTags(tags)}
                </div>
              </a>
           </div>
        );
     })
  }

  _renderTags = (tags) => {
    return tags.map((tag, index) => {
       return (
         <span key={index} style={styles.SPAN_TAG}>
            {tag}
         </span>
       );
    })
  }

  render(){
    const {
            repo, caption, items=[],
            onCloseItem
           } = this.props
        , _items_count = items.length
        , _styleCaption = styles.captionSpanOpen
        , { isShow } = this.state;

     return (
       <div style={styles.rootDiv}>
         <Caption onClose={onCloseItem}>
           <span
              className="not-selected"
              title={caption}
              style={_styleCaption}
              onClick={this._handlerToggleOpen}
           >
             <span>
               {repo}
             </span>
             <span style={{ color: '#a9a9a9', paddingLeft: '12px' }}>
                {_items_count}
             </span>
           </span>
         </Caption>
         <ShowHide isShow={isShow}>
           {this._renderCommits(items)}
         </ShowHide>
       </div>
     );
  }
}

export default StackTaggedQuestions
