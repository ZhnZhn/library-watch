import React from 'react';

const AppLabel = (props) => {
  const { caption, title, style } = props;
  return (
    <span style={style} title={title}>
      {caption}
    </span>
  );
};

export default AppLabel
