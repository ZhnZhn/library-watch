import DataWL from '../constants/DataWL';

const _routeDialog = Object.create(null);
_routeDialog.WL = DataWL

export const setDialogItems = (
  browserType,
  items
) => {
  _routeDialog[browserType] = items;
}

export const getDataConf = (dialogType) => {
  const dataId = dialogType.split('_')[0];
  return _routeDialog[dataId][dialogType];
}
