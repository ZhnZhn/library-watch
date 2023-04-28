const _crFilteredOptions = (
  options,
  value,
  caption
) => {
   const valueFor = value.toLowerCase();
   return (options || [])
     .filter(option => option[caption]
        .toLowerCase()
        .indexOf(valueFor) !== -1
     );
};

const INPUT_PREFIX = 'From input:';
const _crItemNotFounded = (
  inputValue,
  propCaption,
  isWithInput
) => {
  const _inputValue = String(inputValue)
    .replace(INPUT_PREFIX,'').trim()
    , _caption = isWithInput
         ? `${INPUT_PREFIX} ${_inputValue}`
         : 'No results found';
  return {
    [propCaption]: _caption,
    value: 'noresult',
    inputValue: _inputValue
  };
};

const crFilteredOptions = (
  token,
  options,
  propCaption,
  isWithInput
) => {
  const _filteredOptions = _crFilteredOptions(
    options,
    token,
    propCaption
  );

  if (_filteredOptions.length === 0){
    _filteredOptions.push(_crItemNotFounded(
       token,
       propCaption,
       isWithInput
    ))
  }
  return _filteredOptions;
};

export default crFilteredOptions
