import React, { Component, Fragment } from 'react'

import TaggedItem from './TaggedItem'


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
        const { question_id } = item;
        return (
          <TaggedItem
             key={question_id}
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
