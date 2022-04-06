const S_ROW_DIV = {
  display: 'flex',
  alignItems: 'center',
  margin: 5
};

const Row = ({
  style,
  children
}) => (
  <div style={{...S_ROW_DIV, ...style}}>
    {children}
  </div>
);

export default Row
