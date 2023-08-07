import findItemCounterSetValue from './findItem';

export const setIsOpen = (
  chartType,
  menu,
  value
) => {
  const setValue = findItemCounterSetValue(
    menu,
    chartType
  );
  if (setValue) {
    setValue(prevValue => ({
      v: prevValue.v,
      is: value
    }))
  }
}

export const plusCounter = (
  chartType,
  menu,
  value
) => {
  const setValue = findItemCounterSetValue(
    menu,
    chartType
  );
  if (setValue) {
    setValue(prevValue => ({
      v: prevValue.v + value,
      is: true
    }))
  }
}

export const resetCounter = (
  chartType,
  menu
) => {
  const setValue = findItemCounterSetValue(
    menu,
    chartType
  );
  if (setValue) {
    setValue(prevValue => ({
      v: 0,
      is: prevValue.is
    }))
  }
}
