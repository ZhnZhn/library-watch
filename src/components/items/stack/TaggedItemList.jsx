import React, { Component, Fragment } from 'react'

import TaggedItem from './TaggedItem'

const CL = {
  ROW_EVEN: 'row-even not-selected',
  ROW_ODD: 'row-odd not-selected'
};

class TaggedItemList extends Component {
  static defaultProps = {
    items: []
  }

  shouldComponentUpdate(nextProps){
    if (nextProps.items === this.props.items) {
      return false;
    }
    return true;
  }

  _renderItems = () => {
    const { items, onRemoveItem } = this.props;
     return items.map((item, index) => {
        const { question_id } = item
        , className = (index % 2)
            ? CL.ROW_EVEN
            : CL.ROW_ODD;
        return (
          <TaggedItem
             key={question_id}
             className={className}
             item={item}
             onRemoveItem={onRemoveItem}
           />
        );
     })
  }

  render(){
    return (
      <Fragment>
        {this._renderItems()}
      </Fragment>
    );
  }
}

export default TaggedItemList
