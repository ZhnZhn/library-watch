import { forwardRef } from 'react';

import MenuAriaItem from './MenuAriaItem';

const S = {
  ITEM: {
    position: 'relative'
  },
  PREV_PAGE: {
    position: 'absolute',
    top: 0,
    left: 16
  },
  TITLE: {
    paddingLeft: 16
  }
};

const MenuTitle = forwardRef(({
  titleCl,
  title,
  pageNumber,
  onClick,
}, ref) => {
  if (!title) { return null; }
  return (
    <MenuAriaItem
      ref={ref}
      className={titleCl}
      style={S.ITEM}
      onClick={onClick}
    >
      <span style={S.PREV_PAGE}>
        {'<'}
      </span>
      <span style={S.TITLE}>
        {title}
      </span>
    </MenuAriaItem>
  );
})

/*
MenuTitle.propTypes = {
  baseTitleCl: PropTypes.string,
  title: PropTypes.string,
  pageNumber: PropTypes.number,
  onPrevPage: PropTypes.func,
  onReg: PropTypes.func
}
*/

export default MenuTitle
