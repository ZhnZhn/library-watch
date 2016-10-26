import React from 'react';

import TransformFn from '../zhn-select/TransformFn';
import InputSearch from '../zhn-select/InputSearch';
import ItemTopicOption from '../zhn-select/ItemTopicOption';

const SEARCH_PLACEHOLDER = 'Find Item';

const WrapperInputSearch = React.createClass({

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShouldUpdate){
      return true;
    }
    return false;
  },

  _handlerSelectItem(item){
     if (item){
      this.props.onSelect(item);
     }
  },

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
});

export default WrapperInputSearch
