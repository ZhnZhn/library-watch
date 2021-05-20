import { Component } from 'react';

import A from '../../zhn-atoms/A';
import Caption from '../ItemCaption';
import ModalSlider from '../../zhn-modal-slider/ModalSlider';
import crModelMore from './crModelMore';
import sortItemsBy from './sortItemsBy';
import TaggedItemList from './TaggedItemList';
import STYLE from '../Item.Style';
import CL from '../../styles/CL';

const S = {
  BT_MORE: {
    position: 'relative',
    top: 3,
    marginRight: 12
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
      items: props.items,
      itemRemoved: 0
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

  _hShowMore = () => {
    this.setState({ isMore: true })
  }

  _hToggleMore = () => {
    this.setState(prevState => ({
      isMore: !prevState.isMore
    }))
  }

  _onRemoveItem = () => {
    this.setState(prevState => ({
      itemRemoved: prevState.itemRemoved + 1
    }))
  }


  render(){
    const {
      repo, caption,
      onCloseItem
     } = this.props
    , {
        isShow, isMore,
        items, titleForSort,
        itemRemoved
      } = this.state
    , _items_count = items.length
    , _token_count = itemRemoved
        ? `${_items_count - itemRemoved}/${_items_count}`
        : `${_items_count}`
    , _titleForSort = `Sorted By ${titleForSort}`;

     return (
       <div style={STYLE.ROOT}>
         <ModalSlider
           isShow={isMore}
           className={CL.MENU_MORE}
           model={this._MODEL_MORE}
           onClose={this._hToggleMore}
         />
         <Caption onClose={onCloseItem}>
           <A.SvgMore
             style={S.BT_MORE}
             onClick={this._hShowMore}
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
                {_token_count}
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
           <TaggedItemList
             items={items}
             onRemoveItem={this._onRemoveItem}
           />
         </A.ShowHide>
       </div>
     );
  }
}

export default StackTaggedQuestions
