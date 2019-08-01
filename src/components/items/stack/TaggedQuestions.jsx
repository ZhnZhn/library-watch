import React, { Component } from 'react';

import A from '../../zhn-atoms/A'
import Caption from '../ItemCaption'
import ModalSlider from '../../zhn-modal-slider/ModalSlider'
import crModelMore from './crModelMore'
import sortItemsBy from './sortItemsBy'
import STYLE from '../Item.Style'
import CL from '../../styles/CL'

const S = {
  BT_MORE: {
    marginRight: 12
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
    paddingLeft: 12,
    paddingRight: 12
  },
  BT_REVERSE: {
    color: '#a487d4',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  NOT_FLOAT: {
    float: 'none'
  }
};

class StackTaggedQuestions extends Component {

  static defaultProps = {
    items: []
  }

  constructor(props){
    super(props)

    this._MODEL_MORE = crModelMore({
      setSortByProp: this._sortItemsByPropName.bind(this),
      reverse: this._reverseItems.bind(this)
    })

    this.state = {
      isShow: true,
      isMore: false,
      pnForSort: '',
      titleForSort: '',
      items: props.items
    }
  }

  _sortItemsByPropName = (propName, title) => {
    this.setState(prevState => ({
      pnForSort: propName,
      titleForSort: title,
      items: [...sortItemsBy(prevState.items, propName)]
    }))
  }
  _reverseItems = () => {
    this.setState(prevState => ({
      items: [...prevState.items.reverse()]
    }))
  }

  _hToggleOpen = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  _showMore = () => {
    this.setState({ isMore: true })
  }

  _hToggleMore = () => {
    this.setState(prevState => ({
      isMore: !prevState.isMore
    }))
  }

  _renderCommits = (items) => {
     return items.map((item, index) => {
        const {
           question_id,
           is_answered,
           answer_count, score, view_count,
           title, dateAgo, link,
           owner, tags
        } = item
        , { reputation, display_name } = owner
        , className = (index % 2)
            ? 'row-even not-selected'
            : 'row-odd not-selected';

        return (
           <div key={question_id} className={className}>
              <a href={link}>
              <div style={STYLE.PB_8}>
                <span style={is_answered ? S.GREEN_BADGE: S.PURPLE_BADGE}>
                  &#9874;&nbsp;{answer_count}
                </span>
                <span style={S.PURPLE_BADGE} role="img" aria-label="stars score">
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
      repo, caption,
      onCloseItem
     } = this.props
    , {
        isShow, isMore,
        items, titleForSort
      } = this.state
    , _items_count = items.length
    , _titleForSort = `Sorted By ${titleForSort}`;

     return (
       <div style={STYLE.ROOT}>
         <Caption onClose={onCloseItem}>
           <ModalSlider
             isShow={isMore}
             className={CL.MENU_MORE}
             model={this._MODEL_MORE}
             onClose={this._hToggleMore}
           />
           <A.SvgMore
             style={S.BT_MORE}
             onClick={this._showMore}
           />
           <button
              className={CL.NOT_SELECTED}
              title={caption}
              style={{...STYLE.CAPTION_OPEN, ...S.NOT_FLOAT}}
              onClick={this._hToggleOpen}
           >
             <span>
               {repo}
             </span>
             <span style={S.ITEM_COUNT}>
                {_items_count}
             </span>
           </button>
           <button
             className={CL.NOT_SELECTED}
             style={S.BT_REVERSE}
             title="Reverse Items"
             onClick={this._reverseItems}
           >
              {_titleForSort}
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
