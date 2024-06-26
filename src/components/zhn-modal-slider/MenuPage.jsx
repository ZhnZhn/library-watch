import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  focusRefInput
} from '../uiApi';

import MenuTitle from './MenuTitle';
import MenuItemList from './MenuItemList';

const _fFocus = ref => () => {
  focusRefInput(ref)
};

const MenuPage = ({
  isShow,
  items=[],
  style,
  title,
  titleCl,
  itemCl,
  pageCurrent,
  pageNumber,
  onClose,
  children,
  onNextPage,
  onPrevPage
}) => {
  const _refTitle = useRef()
  , _refFirst = useRef()
  , _hClickTitle = useCallback(() => {
      onPrevPage(pageNumber)
  }, [onPrevPage, pageNumber])
  , _isFocus = (pageCurrent === pageNumber) && isShow;

 useEffect(() => {
   if (_isFocus) {
     if (getRefValue(_refTitle)) {
        setTimeout(_fFocus(_refTitle), 1000)
     } else if (getRefValue(_refFirst)) {
        setTimeout(_fFocus(_refFirst), 1000)
     }
   }
 })

 return (
    <div style={style}>
      <MenuTitle
        refEl={_refTitle}
        titleCl={titleCl}
        title={title}
        onClick={_hClickTitle}
      />
      <MenuItemList
        refEl={_refFirst}
        items={items}
        itemCl={itemCl || titleCl}
        pageNumber={pageNumber}
        onNextPage={onNextPage}
        onClose={onClose}
      />
      {children}
    </div>
  );
}

/*
MenuPage.propTypes = {
  isShow: PropTypes.bool,
  title: PropTypes.string,
  pageNumber: PropTypes.number,
  items: PropTypes.arrayOf(
     PropTypes.shapeOf({
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func
     })
  ),
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default MenuPage
