import {
  useState,
  cloneUiElement
} from "../uiApi";
import useRefInit from "../hooks/useRefInit";

const S_TABS = {
  margin: "10px 5px 0 10px",
  borderBottom: "2px solid #a487d4"
}
, S_TABPANES = {
  width: "100%",
  height: "100%"
}
, S_TABPANE_SELECTED = {
  display: "block",
  width: "100%",
  height: "100%"
}
, S_TABPANE_HIDED = {
  display: "none"
};

const TabPane = ({
  width,
  height,
  children
}) => {
  const components = useRefInit(() => children
    .map((TabElement, index) => cloneUiElement(
        TabElement.props.children, void 0, index
    )))[0]
  , [
     selectedTabIndex,
     setSelectedTabIndex
  ] = useState(0)
  , _isSelectedTabIndex = index =>
      index === selectedTabIndex;
  return (
    <div style={{ width, height }}>
      <div style={S_TABS}>
         {children.map((ElementTab, index) =>
            cloneUiElement(ElementTab, {
              onClick: () => setSelectedTabIndex(index),
              isSelected: _isSelectedTabIndex(index)
            }, index)
         )}
      </div>
      <div style={S_TABPANES}>
         {components.map((comp, index) => {
            const divStyle = _isSelectedTabIndex(index)
               ? S_TABPANE_SELECTED
               : S_TABPANE_HIDED;
             return (
               <div
                 key={index}
                 style={divStyle}
                >
                  {comp}
               </div>
             );
         })}
      </div>
    </div>
  );
};

export default TabPane
