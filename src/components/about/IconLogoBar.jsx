import IconGitHub from './IconGitHub';
import IconReact from './IconReact';

const S_ROOT = {
  paddingTop: 20,
  textAlign: 'center'
};

const IconLogoBar = () => (
  <div style={S_ROOT}>
     <IconGitHub
        className="icon__github"
        title="GitHub Library Watch"
        uri="https://github.com/ZhnZhn/library-watch.git"
     />
     <IconReact />
  </div>
);

export default IconLogoBar
