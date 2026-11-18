import { crCn } from '../styleFn';

const _fButtonCircle = (crBtCn) => (props) => (
  <button
    aria-label={props.ariaLabel}
    type="button"
    className={crBtCn(props.className)}
    style={props.style}
    title={props.title}
    onClick={props.onClick}
  >
    {
      props.children
        ? props.children
        : <div>{props.caption ?? ''}</div>
    }
  </button>
)

const CL_BT_CIRCLE = 'zhn-bt-circle';
const CL_BT_CIRCLE_2 = 'zhn-bt-circle2';

const _fCrCn = className1 => className2 => crCn(className1, className2);

export const ButtonCircle = _fButtonCircle(_fCrCn(CL_BT_CIRCLE))
export const ButtonCircle2 = _fButtonCircle(_fCrCn(CL_BT_CIRCLE_2))
export const ButtonCircleCn = _fButtonCircle(className => className)
