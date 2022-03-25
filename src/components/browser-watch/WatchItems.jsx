import { Component } from 'react';

import withDnDStyle from './decorators/withDnDStyle';
import withDnDItem from './decorators/withDnDItem';

import WatchActions from '../../flux/actions/WatchActions';

import DRAG from './WatchDnDConfig';

import {
  showDialogWatchItem,
  removeWatchItem
} from './Handlers';

import WatchItem from './WatchItem';

const _isArr = Array.isArray;

@withDnDStyle
@withDnDItem
class WatchItems  extends Component {

  constructor(props){
    super(props)
    this._bindDnDItem(DRAG, WatchActions)
  }

  render() {
    const {
      isModeEdit,
      items,
      groupCaption,
      listCaption
    } = this.props;
    return _isArr(items) ? items.map((item, index) => {
      const { caption } = item
      , _className = (index % 2)
           ? 'row__topic__even not-selected'
           : 'row__topic__odd not-selected'
      return (
         <WatchItem
            key={caption}
            className={_className}
            isModeEdit={isModeEdit}
            item={item}
            option={{
              groupCaption,
              listCaption,
              caption
            }}
            onClick={showDialogWatchItem}
            onClose={removeWatchItem}
            onDragStart={this._hDragStartItem}
            onDragOver={this._hDragOverItem}
            onDragEnter={this._hDragEnterItem}
            onDragLeave={this._hDragLeaveItem}
            onDrop={this._hDropItem}
         />
      );
    }) : null;
  }
}

export default WatchItems
