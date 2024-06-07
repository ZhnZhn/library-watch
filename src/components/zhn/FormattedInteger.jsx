
const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g
, _formatValue = value => value >= 1000
   ? ('' + value).replace(REPLACER_PATTERN, '$1,')
   : value;

const FormattedInteger = ({
  style,
  value=0
}) => (
  <span style={style}>
    {_formatValue(value)}
  </span>
);

export default FormattedInteger
