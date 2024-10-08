import { crCn } from '../styleFn';

const CL_BT_CIRCLE_2 = 'zhn-bt-circle2';

const ButtonCircle2 = ({
  className,
  style,
  caption='',
  onClick,
  ...restProps
}) => (
  <button
     type="button"
     className={crCn(CL_BT_CIRCLE_2, className)}
     style={style}
     onClick={onClick}
     {...restProps}
  >
    <div>
      {caption}
    </div>
  </button>
);

export default ButtonCircle2
