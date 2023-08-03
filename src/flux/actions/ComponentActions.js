import Reflux from 'reflux-core';

export const CAT_CLOSE_CHART_CONTAINER = 'closeChartContainer'
export const CAT_CLOSE_COMP_ITEM_LIST = 'closeCompItemList'

const _ComponentActions = Reflux.createActions({
  [CAT_CLOSE_CHART_CONTAINER] : {},
  [CAT_CLOSE_COMP_ITEM_LIST] : {}
});

export const ComponentActions = _ComponentActions
