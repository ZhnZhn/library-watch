import { CL_BT_ARROW } from './CL';

const S_SVG_OPEN = {
  color: "#1b75bb"
}
, S_SVG_CLOSE = {
  color: "#858585"
};

const ArrowCell = ({
  isShowOption,
  onClick
}) => (
  <button
     className={CL_BT_ARROW}
     type="button"
     tabIndex="-1"
     aria-label="Toggle suggestions"
     onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      style={isShowOption ? S_SVG_OPEN : S_SVG_CLOSE}
    >
      <path d="M 3,6 L 10,12.5 M 10,12.5 L 17,6" />
    </svg>
  </button>
);

export default ArrowCell
