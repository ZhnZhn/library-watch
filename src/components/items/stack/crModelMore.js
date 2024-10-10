import { bindTo } from '../../uiApi';
import { setFirstToUpperCase } from '../../../utils/strFn';
import { CL_ROW_MENU_MORE } from '../../styleFn';
import {
  PN_BOUNTY_AMOUNT,
  PN_ANSWER_COUNT,
  PN_SCORE,
  PN_VIEW_COUNT,
  PN_REPUTATION
} from './config';

const _crName = (
  propName
) => propName.split("_")
  .map(setFirstToUpperCase)
  .join(" ");

const _fSortByItem = onClick => (
  propName
) => {
  const name = _crName(propName);
  return {
    name,
    onClick: bindTo(onClick, propName, name),
    isClose: true
  };
}

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
      _crSortByItem(PN_BOUNTY_AMOUNT),
      _crSortByItem(PN_ANSWER_COUNT),
      _crSortByItem(PN_SCORE),
      _crSortByItem(PN_VIEW_COUNT),
      _crSortByItem(PN_REPUTATION), {
        name: 'Reverse Items',
        onClick: reverse,
        isClose: true
      }
    ]
  }
};

export default crModelMore
