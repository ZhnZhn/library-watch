import Reflux from 'reflux-core';

export const CAT_INIT_AND_SHOW_DIALOG = 'initAndShowDialog'
export const CAT_SHOW_DIALOG = 'showDialog'
export const CAT_CLOSE_CHART_CONTAINER = 'closeChartContainer'
export const CAT_CLOSE_COMP_ITEM_LIST = 'closeCompItemList'

const _ComponentActions = Reflux.createActions({
  [CAT_INIT_AND_SHOW_DIALOG] : {},
  [CAT_SHOW_DIALOG] : {},
  [CAT_CLOSE_CHART_CONTAINER] : {},
  [CAT_CLOSE_COMP_ITEM_LIST] : {}
});

export const ComponentActions = _ComponentActions
