import {
  ddGroup,
  ddList
} from '../../../flux/watch-list/watchListStore';

import { bindTo } from '../../uiApi';

import DRAG from '../WatchDnDConfig';

import getTransferData from './getTransferData';
import { dropWithDnDStyle } from './DnDStyleHandlers';
import {
  fDragStart,
  fDragEnter,
  hDragOver,
  hDragLeave
} from './DnDHandlers';
import crDnDHandlers from './crDnDHandlers';

const _crGroupId = ({ caption }) => `${caption};`;

export const hDragStartGroup = fDragStart(
  [DRAG.GROUP],
  _crGroupId
);

export const hDropGroup = (
  //{ caption },
  options,
  evt
) => {
  dropWithDnDStyle(evt)
  const {
    xType,
    dragId
  } = getTransferData(evt)
  , dropId = _crGroupId(options);

  if (xType === DRAG.GROUP) {
    if (dragId === dropId) {
      return;
    } else {
      evt.preventDefault()
      ddGroup({
        dragId,
        dropId
      })
    }
  } else if (xType === DRAG.LIST) {
    evt.preventDefault()
    ddList({
      dragId,
      dropId
    })
  }
};

const hDragEnterGroup = fDragEnter(
  DRAG.GROUP,
  DRAG.C_GROUP_ENTER
);

export const crDnDGroupHandlers = bindTo(
  crDnDHandlers,
  hDragStartGroup,
  hDropGroup,
  hDragEnterGroup,
  hDragOver,
  hDragLeave
)
