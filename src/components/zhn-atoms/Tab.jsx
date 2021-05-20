//import PropTypes from "prop-types";

const CL = "tab";

const S = {
  SELECTED : {
    borderColor : '#a487d4',
    color : '#a487d4'
  }
};

const Tab = ({ title, isSelected, onClick }) => {
  const _style = isSelected ? S.SELECTED : void 0;
  return (
     <button
        role="tab"
        aria-selected={isSelected}
        tabIndex="0"
        className={CL}
        style={_style}
        onClick={onClick}
     >
        <span>{title}</span>
     </button>
  );
}

/*
Tab.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
*/

export default Tab
