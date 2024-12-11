import TestItem from "../items/TestItem";

const fItemTest = ({
  option,
  parentProps
}) => (<TestItem
  key={`${option.repo}_${option.requestType}`}
  {...parentProps}
/>);

export default fItemTest
