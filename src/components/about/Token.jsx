
const Token = ({
  isFirstBlank,
  color,
  children
}) => (
  <span style={{ color, fontWeight: 'bold' }}>
    {isFirstBlank ? ' ' : null}
    {children}
  </span>
);

export default Token
