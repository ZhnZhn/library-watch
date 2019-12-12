import React from 'react';

import IconGitHub from './IconGitHub';
import IconReact from './IconReact';

const S = {
  ROOT: {
    textAlign : 'center',
    paddingTop: 20
  }
};

const IconLogoBar = (props) => {
  return (
    <div style={S.ROOT}>
       <IconGitHub
           className="icon__github"
           title="GitHub Library Watch"
           uri="https://github.com/ZhnZhn/library-watch.git"
       />
       <IconReact />
    </div>
  );
}

export default IconLogoBar
