export const crA11yLabelledByProps = (
  labelId
) => ({
  "aria-labelledby": labelId
})

export const crA11yComboboxProps = (
  labelId
) => ({
  role: "combobox",
  "aria-autocomplete": "list",
  ...crA11yLabelledByProps(labelId)
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
