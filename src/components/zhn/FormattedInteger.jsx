import { formatNumber } from '../../utils/formatNumber';

const FormattedInteger = (props) => (
  <span style={props.style}>
    {formatNumber(props.value ?? 0)}
  </span>
);

export default FormattedInteger
