import { Component } from 'react';

import withDnDStyle from './decorators/withDnDStyle';
import withDnDGroup from './decorators/withDnDGroup';

import WatchActions from '../../flux/actions/WatchActions';
import DRAG from './WatchDnDConfig';

import Comp from '../Comp';
import WatchLists from './WatchLists';

const { OpenClose2 } = Comp
, _isArr = Array.isArray
, S_GROUP_DIV = { lineHeight: 2 }

@withDnDStyle
@withDnDGroup
class WatchGroups extends Component {

  constructor(props){
    super(props)
    this._bindDnDGroup(DRAG, WatchActions)
  }

  render(){
    const {
      isModeEdit,
      groups
    } = this.props;

    return _isArr(groups) ? groups
      .map(({caption, lists}) => (
          <OpenClose2
             key={caption}
             style={S_GROUP_DIV}
             caption={caption}
             isClose={true}
             isDraggable={isModeEdit}
             option={{ caption }}
             onDragStart={this._hDragStartGroup}
             onDragEnter={this._hDragEnterGroup}
             onDragOver={this._hDragOverGroup}
             onDragLeave={this._hDragLeaveGroup}
             onDrop={this._hDropGroup}
           >
             <WatchLists
               isModeEdit={isModeEdit}
               groupCaption={caption}
               lists={lists}
             />
           </OpenClose2>
      )) : null;
  }
}

export default WatchGroups
