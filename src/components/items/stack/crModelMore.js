
import CL from '../../styles/CL'

const CL_ROW = CL.ROW_MENU_MORE;

const _fSortByItem = onClick => (name, propName) => ({
  cn: CL_ROW,
  name,
  onClick: onClick.bind(null, propName),
  isClose: true
});

const crModelMore = ({
  setSortByProp
  //onRemoveAll
}={}) => {
  const _crSortByItem = _fSortByItem(setSortByProp);
  return {
    baseTitleCl: CL_ROW,
    pageWidth: 180,
    maxPages: 2,
    p0: [
      {
        id: 'p1',
        type: 'sub',
        cn: CL_ROW,
        name: 'Sort By'
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
      _crSortByItem('Reputation', 'reputation')
    ]
  }
};

export default crModelMore
