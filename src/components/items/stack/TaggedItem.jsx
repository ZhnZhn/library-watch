import React, { Component } from 'react'

import is from '../../../utils/is'
import withDnDStyle from '../decorators/withDnDStyle'
import A from '../../zhn-atoms/A'
import STYLE from '../Item.Style'

const S = {
  NONE: {
    display: 'none'
  },
  /*
  PURPLE_BADGE : {
    color: '#a487d4',
    fontSize: 18,
    paddingRight: 8
  },
  */
  FISH_BADGE: {
    color: '#d7bb52',
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
  }
};

const D_REMOVE_UNDER = 150;
const D_REMOVE_ITEM = 35;
const D_MARK_REMOVE = 25;

const { isTouchable } = is;
const IS_TOUCH = isTouchable();

const TOKEN_ANSWER = IS_TOUCH ? 'A' : (
  <span role="img" arial-label="hammer and pick">&#x2692;</span>
);
const TOKEN_SCORE = IS_TOUCH ? 'S' : (
  <span role="img" aria-label="fish">&#x1F41F;</span>
);
const TOKEN_VIEW = IS_TOUCH ? 'V' : (
  <span role="img" aria-label="wheel of dharma">&#x2638;</span>
);
const TOKEN_REPUTATION = IS_TOUCH ? 'R' : (
  <span role="img" arial-label="shamrock">&#x2618;</span>
);

/*
const _getClientX = (ev, dfValue) => ev.clientX
  || ev.touches[0].clientX
  || dfValue;
*/

@withDnDStyle
class TaggedItem extends Component {
  static defaultProps = {
    onRemoveUnder: () => {},
    onRemoveItem: () => {}
  }

  state = {
    isClosed: false
  }

  _dragStart = (ev) => {
    ev.persist()
    this._clientX = ev.clientX
    this.dragStartWithDnDStyle(ev)
    if (ev && ev.dataTransfer) {
      ev.dataTransfer.effectAllowed="move"
      ev.dataTransfer.dropEffect="move"
    }
  }
  _onTouchStart = (ev) => {
    ev.persist()
    this._clientX = ev.touches[0].clientX
  }
  _onTouchMove = (ev) => {
    ev.persist()
    if (Math.abs(this._clientX - ev.touches[0].clientX) > D_MARK_REMOVE) {
      this.dragStartWithDnDStyle(ev)
    }
  }
  _dragEnd = (ev) => {
    ev.preventDefault()
    ev.persist()
    this.dragEndWithDnDStyle()
    const _deltaX = Math.abs(this._clientX - ev.clientX)
        , { item, onRemoveUnder } = this.props;
    if (_deltaX > D_REMOVE_UNDER) {
      onRemoveUnder(item)
    } else if (_deltaX > D_REMOVE_ITEM){
      this._onHide()
    }
  }
  _onTouchEnd = (ev) => {
    ev.preventDefault()
    ev.persist()
    this.dragEndWithDnDStyle()
    const _deltaX = Math.abs(this._clientX - ev.changedTouches[0].clientX)
        , { item, onRemoveUnder } = this.props;
    if (_deltaX > D_REMOVE_UNDER) {
      onRemoveUnder(item)
    } else if (_deltaX > D_REMOVE_ITEM){
      this._onHide()
    }
  }
  _preventDefault = (ev) => {
    ev.preventDefault()
  }

  _onHide = () => {
     const { onRemoveItem, item } = this.props;
     onRemoveItem(item)
     this.setState({ isClosed: true })
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
    const { className, item } = this.props
    , {
       question_id,
       is_answered,
       answer_count, score, view_count,
       title, dateAgo, link,
       owner={}, tags=[]
    } = item
    , { reputation, display_name } = owner
    , { isClosed } = this.state
    , _style = isClosed ? S.NONE : void 0;
    return (
      <div
        key={question_id}
        className={className}
        style={_style}
        draggable={true}
        onDragStart={this._dragStart}
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onDragEnd={this._dragEnd}
        onTouchEnd={this._onTouchEnd}
        onDrop={this._preventDefault}
        onDragOver={this._preventDefault}
        onDragEnter={this._preventDefault}
        onDragLeave={this._preventDefault}
      >
         <a href={link}>
         <div style={STYLE.PB_8}>
           <span style={is_answered ? S.GREEN_BADGE: S.FISH_BADGE}>
             {TOKEN_ANSWER}&nbsp;{answer_count}
           </span>
           <span style={S.FISH_BADGE}>
             {TOKEN_SCORE}&nbsp;{score}
           </span>
           <span style={S.BLACK_BAGDE}>
             {TOKEN_VIEW}&nbsp;{view_count}
           </span>
           <span style={S.GREEN_BADGE}>
             {TOKEN_REPUTATION}&nbsp;{reputation}
           </span>
           <span style={S.BLACK_BAGDE}>
             {display_name}
           </span>
           <A.DateAgo
              dateAgo={dateAgo}
              date=""
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
  }
}

export default TaggedItem
