import { useCallback } from '../uiApi';
import { crVisibilityHidden } from '../styleFn';

import { useItemsFocusTrap } from '../hooks/useFocus';
import useCanBeHidden from './useCanBeHidden';

import FocusTrap from '../zhn-moleculs/FocusTrap';
import MenuTitle from './MenuTitle';
import MenuItemList from './MenuItemList';

const MenuPage = ({
  isShow,
  items=[],
  style,
  isVisible,
  canBeHidden,
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
  const _hClickTitle = useCallback(() => {
    onPrevPage(pageNumber)
  }, [onPrevPage, pageNumber])
  , [
    _refFirstItem,
    _refLastItem,
    _getRefItem
  ] = useItemsFocusTrap(
    items,
    isVisible,
    !title
  )
  ,  _style = useCanBeHidden(canBeHidden);

  return (
    <div style={{
      ...style,
      ...crVisibilityHidden(isVisible),
      ..._style
    }}>
      <FocusTrap
        refFirst={_refFirstItem}
        refLast={_refLastItem}
      >
        <MenuTitle
          refEl={_refFirstItem}
          titleCl={titleCl}
          title={title}
          onClick={_hClickTitle}
        />
        <MenuItemList
          getRefItem={_getRefItem}
          items={items}
          itemCl={itemCl || titleCl}
          pageNumber={pageNumber}
          onNextPage={onNextPage}
          onClose={onClose}
        />
      {children}
      </FocusTrap>
    </div>
  );
}

/*
MenuPage.propTypes = {
  isShow: PropTypes.bool,
  isVisible: PropTypes.bool,
  canBeHidden: PropTypes.bool,
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
