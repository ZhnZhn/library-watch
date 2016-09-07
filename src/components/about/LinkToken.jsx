import React from 'react';

const LinkToken = (props) => {
  const { isFirstBlank, color, href, title, children } = props
      , _firstChart = (isFirstBlank) ? ' ' : undefined;
  return (
    <a
      className="github-link"
      style={{color: color}}
      target="_blank"
      href={href}
      title={title}
    >
      {_firstChart}
      {children}
    </a>
  );
};

export default LinkToken
