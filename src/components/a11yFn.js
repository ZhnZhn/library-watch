export const crA11yComboboxProps = (
  labelId
) => ({
  role: "combobox",
  "aria-autocomplete": "list",
  "aria-labelledby": labelId
})

export const crA11yExpandedProps = (
  isExpaned,
  controlsId
) => ({
  "aria-expanded": isExpaned,
  "aria-controls": isExpaned
     ? controlsId
     : void 0
})
