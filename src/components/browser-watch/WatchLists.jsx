import { Component } from 'react'

import withDnDStyle from './decorators/withDnDStyle';
import withDnDList from './decorators/withDnDList';

import WatchActions from '../../flux/actions/WatchActions';
import Comp from '../Comp';
import WatchItems from './WatchItems';

import DRAG from './WatchDnDConfig';

const { OpenClose2 } = Comp;

const S_LIST_DIV = {
  marginLeft: 8,
  paddingLeft: 12,
  lineHeight: 2,
  borderLeft: '1px solid yellow',
}
, S_ITEM_NOT_SELECTED = {
  marginRight: 10,
  borderBottom: '1px solid rgba(128, 192, 64, 0.6)'
};

const _isArr = Array.isArray;

@withDnDStyle
@withDnDList
class WatchLists extends Component {

  constructor(props){
    super(props)
    this._bindDnDList(DRAG, WatchActions)
  }

  render(){
    const {
      isModeEdit,
      groupCaption,
      lists  
    } = this.props;
    return _isArr(lists) ? lists.map(list => {
      const { caption, items } = list;
      return (
        <OpenClose2
           key={caption}
           fillOpen="#80c040"
           style={S_LIST_DIV}
           styleNotSelected={S_ITEM_NOT_SELECTED}
           caption={caption}
           isClose={true}
           isDraggable={isModeEdit}
           option={{ groupCaption, caption }}
           onDragStart={this._hDragStartList}
           onDragEnter={this._hDragEnterList}
           onDragOver={this._hDragOverList}
           onDragLeave={this._hDragLeaveList}
           onDrop={this._hDropList}
        >
          <WatchItems
            isModeEdit={isModeEdit}
            items={items}
            groupCaption={groupCaption}
            caption={caption}
          />
        </OpenClose2>
      )
    }) : null;
  }
}

export default WatchLists
