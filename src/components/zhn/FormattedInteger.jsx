
const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g
, _formatValue = value => value >= 1000
   ? ('' + value).replace(REPLACER_PATTERN, '$1,')
   : value;

const FormattedInteger = (props) => (
  <span style={props.style}>
    {_formatValue(props.value ?? 0)}
  </span>
);

export default FormattedInteger
