import crCn from '../zhn-utils/crCn';

const CL_BT_CIRCLE = 'zhn-bt-circle';

const ButtonCircle = ({
  isWithoutDefault,
  className,
  style,
  caption='',
  title,
  onClick
}) => {
  const _className = crCn(
    [!isWithoutDefault, CL_BT_CIRCLE],
    className
  );
  return (
    <button
       type="button"
       className={_className}
       style={style}
       title={title}
       onClick={onClick}
    >
      <div>{caption}</div>
    </button>
  );
};

export default ButtonCircle
