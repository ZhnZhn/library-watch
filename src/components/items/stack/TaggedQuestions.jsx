import {
  useState,
  useCallback
} from '../../uiApi';

import {
  CL_NOT_SELECTED,
  CL_MENU_MORE
} from '../../styleFn';

import useToggle from '../../hooks/useToggle';
import useMenuMore from '../../hooks/useMenuMore';

import ShowHide from '../../zhn/ShowHide';
import SvgMore from '../../zhn/SvgMore';
import Caption from '../ItemCaption';
import ModalSlider from '../../zhn-modal-slider/ModalSlider';
import TaggedItemList from './TaggedItemList';

import crModelMore from './crModelMore';
import sortItemsBy from './sortItemsBy';

import {
  S_ROOT,
  S_CAPTION_OPEN
} from '../Item.Style';

const S_BT_MORE = {
  position: 'relative',
  top: 3,
  marginRight: 12
}
, S_ITEM_COUNT = {
  color: '#a9a9a9',
  padding: '0 12px'
}
, S_BT_REVERSE = {
  color: '#a487d4',
  fontWeight: 'bold',
  cursor: 'pointer'
}
, S_NOT_FLOAT = { float: 'none' }
, DF_ITEMS = [];

const StackTaggedQuestions = (props) => {
  const {
    repo,
    caption,
    onCloseItem
  } = props
  , [state, setState] = useState(() => ({
     items: props.items || DF_ITEMS,
     pnForSort: '',
     titleForSort: '',
     itemRemoved: 0
  }))
  , {
      items,
      titleForSort,
      itemRemoved
    } = state
  , [isShow, _toggleIsShow] = useToggle(true)
  , _reverseItems = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      items: [...prevState.items.reverse()]
    }))
  }, [])
  , _sortItemsByPropName = useCallback((propName, title) => {
    setState(prevState => ({
      ...prevState,
      pnForSort: propName,
      titleForSort: title,
      items: [...sortItemsBy(prevState.items, propName)]
    }))
  }, [])
  , _onRemoveItem = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      itemRemoved: prevState.itemRemoved + 1
    }))
  }, [])
  , [
      _MODEL_MORE,
      _isMenuMore,
      _toggleMenuMore,
      _showMenuMore
    ] = useMenuMore(crModelMore, {
      setSortByProp: _sortItemsByPropName,
      reverse: _reverseItems
  })
  , _itemsLength = items.length
  , _tokenItemsCount = itemRemoved
      ? `${_itemsLength - itemRemoved}/${_itemsLength}`
      : `${_itemsLength}`
  , _titleForSort = `Sorted By ${titleForSort}`;

  return (
    <div style={S_ROOT}>
      <ModalSlider
        isShow={_isMenuMore}
        className={CL_MENU_MORE}
        model={_MODEL_MORE}
        onClose={_toggleMenuMore}
      />
      <Caption onClose={onCloseItem}>
        <SvgMore
          style={S_BT_MORE}
          onClick={_showMenuMore}
        />
        <button
           className={CL_NOT_SELECTED}
           title={caption}
           style={{...S_CAPTION_OPEN, ...S_NOT_FLOAT}}
           onClick={_toggleIsShow}
        >
          <span>
            {repo}
          </span>
          <span style={S_ITEM_COUNT}>
             {_tokenItemsCount}
          </span>
        </button>
        <button
          className={CL_NOT_SELECTED}
          style={S_BT_REVERSE}
          title="Reverse Items"
          onClick={_reverseItems}
        >
           {_titleForSort}
        </button>
      </Caption>
      <ShowHide isShow={isShow}>
        <TaggedItemList
          items={items}
          onRemoveItem={_onRemoveItem}
        />
      </ShowHide>
    </div>
  );
};

export default StackTaggedQuestions
