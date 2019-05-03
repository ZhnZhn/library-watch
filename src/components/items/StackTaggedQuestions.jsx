import React, { Component } from 'react';

import A from '../zhn-atoms/A'
import Caption from './ItemCaption'
import STYLE from './Item.Style'

const S = {
  SPAN_TAG : {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 2,
    borderRadius: 16
  },

  PURPLE_BADGE : {
    color: '#a487d4',
    fontSize: 18,
    paddingRight: 8
  },
  GREEN_BADGE : {
    color: '#80c040',
    fontSize: 18,
    paddingRight: 8
  },
  BLACK_BAGDE : {
    color: 'black',
    fontSize: 18,
    paddingRight: 8
  },
  ITEM_COUNT: {
    color: '#a9a9a9',
    paddingLeft: 12
  }
};

class StackTaggedQuestions extends Component {
  state = {
    isShow: true
  }

  _hToggleOpen = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
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
              <div style={STYLE.PB_8}>
                <span style={S.PURPLE_BADGE}>
                  &#9874;&nbsp;{answer_count}
                </span>
                <span style={S.GREEN_BADGE} role="img" aria-label="stars score">
                  &#9918;&nbsp;{score}
                </span>
                <span style={S.BLACK_BAGDE}>
                  &#9784;&nbsp;{view_count}
                </span>
                <span style={S.GREEN_BADGE}>
                  &#9752;&nbsp;{reputation}
                </span>
                <span style={S.BLACK_BAGDE}>
                  {display_name}
                </span>
                <A.DateAgo
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
         <span key={index} style={S.SPAN_TAG}>
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
    , { isShow } = this.state;

     return (
       <div style={STYLE.ROOT}>
         <Caption onClose={onCloseItem}>
           <button
              className="not-selected"
              title={caption}
              style={STYLE.CAPTION_OPEN}
              onClick={this._hToggleOpen}
           >
             <span>
               {repo}
             </span>
             <span style={S.ITEM_COUNT}>
                {_items_count}
             </span>
           </button>
         </Caption>
         <A.ShowHide isShow={isShow}>
           {this._renderCommits(items)}
         </A.ShowHide>
       </div>
     );
  }
}

export default StackTaggedQuestions
