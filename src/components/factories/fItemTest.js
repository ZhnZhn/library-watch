
import TestItem from '../items/TestItem';

const fItemTest = function({ factory, option, json, parentProps }){
  const { repo, requestType } = option
  return factory.createElement(TestItem, {
      key : `${repo}_${requestType}`,
      ...parentProps
  })
}

export default fItemTest
