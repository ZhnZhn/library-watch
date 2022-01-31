import STYLE from '../../styles/DialogStyles'

const Plain = ({
  style,
  children
}) => (
  <div style={{ ...STYLE.rowDiv, ...style }}>
    {children}
  </div>
);

const Row = {
  Plain
};

export default Row
