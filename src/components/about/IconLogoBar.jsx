import React from 'react';

import IconGitHub from './IconGitHub';
import IconReact from './IconReact';

const STYLE = {
  ROOT : {
    textAlign : 'center',
    paddingTop: '20px'
  }
}

const IconLogoBar = (props) => {
  return (
    <div style={STYLE.ROOT}>
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
