
const TransformFn = {
  fromLevel3(data){
    const caption = "caption"
        , level1 = "groups"
        , level2 = "lists"
        , level3 = "items"
        , _options = [];

     for(const group of data[level1] || [] ){
       for(const list of group[level2] || [] ){
         for(const item of list[level3] || [] ){
           item.topic = `${group[caption]}/${list[caption]}`
           _options.push(item);
         }
       }
     }

     return _options;
  }
}

export default TransformFn
