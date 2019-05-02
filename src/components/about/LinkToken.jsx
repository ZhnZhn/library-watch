import React from 'react';

const CL = "github-link";

const S = {
  WRAPPER: {
    paddingLeft: 8,
    paddingRight: 8
  }
};

const LinkToken = ({
  color, href, 
  caption, title,
  children
}) => (
  <span style={S.WRAPPER}>
    <a
      className={CL}
      style={{color: color}}
      target="_blank"
      href={href}
      title={title}
    >
      {caption || children}
    </a>
  </span>
);


export default LinkToken
