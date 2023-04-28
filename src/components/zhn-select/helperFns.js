
export const isNumber = n => typeof n === 'number'
  && n-n === 0;

export const getDataIndex = element => {
  const { dataset } = element
  , { index } = dataset || {};
  return Number(index);
};

export const crOnEnterItem = (
  item,
  propCaption,
  isWithInput
) => item.value !== 'noresult'
  ? item
  : isWithInput
      ? {
          [propCaption]: 'From Input',
          value: item.inputValue
        }
      : void 0

export const crFooterIndex = (
  options,
  initialOptions
) => [
  options[0] && options[0].value !== 'noresult'
     ? options.length
     : 0,
  initialOptions
     ? initialOptions.length
     : 0
];

export const makeVisibleActiveRowComp = (
  comp
) => {
  if (comp) {
    const  { offsetTop } = comp
    , optionsElement = comp.parentElement
    , { scrollTop } = optionsElement;
    if (offsetTop - scrollTop > 70){
       optionsElement.scrollTop += offsetTop - scrollTop - 70;
    }
    if (offsetTop - scrollTop < 0){
      optionsElement.scrollTop = 0;
    }
  }
}
