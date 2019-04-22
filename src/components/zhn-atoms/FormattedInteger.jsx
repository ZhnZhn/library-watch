import React from 'react';

//import PropTypes from "prop-types";

const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;

const FormattedInteger = ({ value, style }) => {
  if (value >= 1000) {
    value = ('' + value).replace(REPLACER_PATTERN, '$1,');
  }

  return (
    <span style={style}>
      {value}
    </span>
  );
}

/*
FormattedInteger.propTypes = {
  value: PropTypes.number,
  style: PropTypes.object
}
*/
FormattedInteger.defaultProps = {
  value: 0
}

export default FormattedInteger
