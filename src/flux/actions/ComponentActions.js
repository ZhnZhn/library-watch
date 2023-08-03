import Reflux from 'reflux-core';

import { ModalDialog as MD } from '../../constants/Type'

export const CAT_INIT_AND_SHOW_DIALOG = 'initAndShowDialog'
export const CAT_SHOW_DIALOG = 'showDialog'
export const CAT_CLOSE_CHART_CONTAINER = 'closeChartContainer'
export const CAT_CLOSE_COMP_ITEM_LIST = 'closeCompItemList'
export const CAT_SHOW_MODAL_DIALOG = 'showModalDialog'

const _ComponentActions = Reflux.createActions({

  [CAT_INIT_AND_SHOW_DIALOG] : {},
  [CAT_SHOW_DIALOG] : {},
  [CAT_CLOSE_CHART_CONTAINER] : {},
  [CAT_CLOSE_COMP_ITEM_LIST] : {},

  [CAT_SHOW_MODAL_DIALOG] : {}
});
_ComponentActions.showAlert = _ComponentActions
  .showModalDialog.bind(null, MD.ALERT)

export const ComponentActions = _ComponentActions
