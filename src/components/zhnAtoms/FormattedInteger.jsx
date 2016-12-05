import React, { PropTypes } from 'react';

const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;

const FormattedInteger = ({ value, style }) => {
  if (value >= 1000) {
    value = String(value).replace(REPLACER_PATTERN, '$1,');
  }

  return (
    <span style={style}>
      {value}
    </span>
  );
}

FormattedInteger.propTypes = {
  value: PropTypes.number.isRequired
};

export default FormattedInteger;
