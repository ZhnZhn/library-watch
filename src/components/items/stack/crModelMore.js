import { CL_ROW_MENU_MORE } from '../../styles/CL'

const _fSortByItem = onClick => (
  name,
  propName
) => ({
  name,
  onClick: onClick.bind(null, propName, name),
  isClose: true
});

const crModelMore = ({
  setSortByProp,
  reverse
  //onRemoveAll
}={}) => {
  const _crSortByItem = _fSortByItem(setSortByProp);
  return {
    titleCl: CL_ROW_MENU_MORE,
    pageWidth: 180,
    maxPages: 2,
    p0: [
      {
        id: 'p1',
        type: 'sub',
        cn: CL_ROW_MENU_MORE,
        name: 'Sort By, DESC'
      }/*,{
        cn: CL_ROW,
        name: 'Remove Visited',
        onClick: onRemoveAll,
        isClose: true
      }*/
    ],
    p1: [
      _crSortByItem('Answer Count', 'answer_count'),
      _crSortByItem('Score', 'score'),
      _crSortByItem('View Count', 'view_count'),
      _crSortByItem('Reputation', 'reputation'), {
        name: 'Reverse Items',
        onClick: reverse,
        isClose: true
      }
    ]
  }
};

export default crModelMore
