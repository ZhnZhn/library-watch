import React from 'react'

const CL = 'zhn-bt-circle2';

const ButtonCircle2 = ({
  className,
  style,
  caption,
  onClick,
  ...rest
}) => (
  <button
     className={`${CL} ${className}`}
     style={style}
     onClick={onClick}
     {...rest}
  >
    <div>
      {caption}
    </div>
  </button>
);
ButtonCircle2.defaultProp = {
  className: '',
  caption: ''
}


export default ButtonCircle2
