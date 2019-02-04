import React from 'react';

import ItemOption from './ItemOption'

const S = {
  TOPIC : {
    width: '100%',
    whiteSpace : 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'rgb(164, 135, 212)'
  }
}

const ItemTopicOption = (props) => {
  const { item } = props
  return (
     <div>
       <ItemOption {...props} />
       <div style={S.TOPIC}>
         {item.topic}
       </div>
     </div>
  )
};

export default ItemTopicOption
