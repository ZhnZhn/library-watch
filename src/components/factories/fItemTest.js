import TestItem from '../items/TestItem';

const fItemTest = function({
  createElement,
  option,
  json,
  parentProps
}){
  const {
    repo,
    requestType
  } = option
  return createElement(TestItem, {
     key : `${repo}_${requestType}`,
     ...parentProps
  });
}

export default fItemTest
