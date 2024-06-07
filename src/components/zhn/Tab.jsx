const CL_TAB = "tab"
, SELECTED_COLOR = '#a487d4'
, S_SELECTED = {
  borderColor: SELECTED_COLOR,
  color: SELECTED_COLOR
};

const Tab = ({
  isSelected,
  title,
  onClick
}) => {
  const _style = isSelected
    ? S_SELECTED : void 0;
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      tabIndex="0"
      className={CL_TAB}
      style={_style}
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default Tab
