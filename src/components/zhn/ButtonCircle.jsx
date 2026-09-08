import { crCn } from '../styleFn';

const CL_BT_CIRCLE = 'zhn-bt-circle';

const ButtonCircle = (props) => {
  const _className = crCn(
    [!props.isWithoutDefault, CL_BT_CIRCLE],
    props.className
  );
  return (
    <button
       type="button"
       className={_className}
       style={props.style}
       title={props.title}
       onClick={props.onClick}
    >
      <div>{props.caption ?? ""}</div>
    </button>
  );
};

export default ButtonCircle
