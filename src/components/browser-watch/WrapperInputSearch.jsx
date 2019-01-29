import React, { Component } from 'react';


import TransformFn from '../zhn-select/TransformFn';
import InputSearch from '../zhn-select/InputSearch';
import ItemTopicOption from '../zhn-select/ItemTopicOption';

const SEARCH_PLACEHOLDER = 'Find Item';

const _isFn = fn => typeof fn === 'function';

class WrapperInputSearch extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShouldUpdate){
      return true;
    }
    return false;
  }

  _handlerSelectItem = (item) => {
    const { onSelect } = this.props;
     if (item && _isFn(onSelect)){
       onSelect(item);
     }
  }

  render(){
    const  { style, data } = this.props
         , _options = TransformFn.fromLevel3(data);

    return (
      <div style={style}>
        <InputSearch
           placeholder={SEARCH_PLACEHOLDER}
           propCaption="caption"
           options={_options}
           ItemOptionComp={ItemTopicOption}
           onSelect={this._handlerSelectItem}
        />
     </div>
    );
  }
}

export default WrapperInputSearch
