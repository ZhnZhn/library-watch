import {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect
} from '../uiApi';

import useToggle from '../hooks/useToggle';

import ItemOptionDf from './ItemOptionDf'
import DivOptions from './DivOptions';
import OptionStack from './OptionStack';
import {
  CL_ROOT,
  CL_INPUT,
  CL_INPUT_HR
} from './CL';

import crStyleWidth from './crStyleWidth';
import crAfterInputEl from './crAfterInputEl';
import crFilteredOptions from './crFilteredOptions';

import useStepHandlers from './useStepHandlers';

import {
  isNumber,
  getDataIndex,
  crOnEnterItem,
  crFooterIndex,
  makeVisibleActiveRowComp
} from './helperFns';

const DF_OPTIONS = [];
const _crInitialStateFromProps = ({
  optionName,
  optionNames,
  options=DF_OPTIONS
}) => ({
  value: '',
  initialOptions: options,
  options: options,
  optionNames: optionNames || optionName || ''
});

const FN_NOOP = () => {};

const InputSelect = (
  props
) => {
  const {
    style,
    width,
    optionsStyle,

    propCaption='caption',
    ItemOptionComp=ItemOptionDf,

    isWithInput=false,
    onSelect=FN_NOOP
  } = props
  , _refDomInputText = useRef()
  , [
    state,
    setState
  ] = useState(() => _crInitialStateFromProps(props))
  , {
    value,
    options,
    initialOptions
  } = state
  , [
    isShowOption,
    toggleIsShowOption,
    setIsShowOption
  ] = useToggle(false)
  , [
    _refOptionsElement,
    _refIndexElement,
    setActiveIndexOption,
    getActiveIndexOption,
    _getActiveElement,
    _decorateActiveElement,
    _undecorateActiveElement,
    _stepDownOption,
    _stepUpOption
  ] = useStepHandlers()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _initStateFromProps = useCallback(() => {
     _undecorateActiveElement()
     setState(() => _crInitialStateFromProps(props))
     setIsShowOption(false)
     setActiveIndexOption(0)
     onSelect()
  }, [props.options, onSelect])
  // _undecorateActiveElement
  // setIsShowOption, setActiveIndexOption
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hInputChange = (evt) => {
    const token = evt.target.value
    , tokenLn = token.length
    , valueLn = value.length;
    if (tokenLn !== valueLn){
      if (getActiveIndexOption() !== 0) {
        _undecorateActiveElement()
        setActiveIndexOption(0)
      }

      setState(prevState => ({
        ...prevState,
        value: token,
        options: crFilteredOptions(
          token,
          tokenLn > valueLn
            ? options
            : initialOptions,
          propCaption,
          isWithInput
        )
      }))
      setIsShowOption(true)
    }
  }
  , _hInputKeyDown = (evt) => {
    switch(evt.keyCode){
      // enter
      case 13:{
         const _indexActiveOption = getActiveIndexOption();
         if (isNumber(_indexActiveOption)) {
            const item = options[_indexActiveOption];
            if (item && item[propCaption]){
              onSelect(crOnEnterItem(
                item,
                propCaption,
                isWithInput
              ))
              setIsShowOption(false)
              setState(prevState => ({
                ...prevState,
                value: item[propCaption]
              }));
            }
         } else {
           onSelect()
         }
         break;
      }
      //escape, delete
      case 27: case 46: {
        evt.preventDefault()
        if (isShowOption){
          setIsShowOption(false)
        } else {
          _initStateFromProps()
        }
        break;
      }
      //down
      case 40: {
        if (!isShowOption){
          setIsShowOption(true)
        } else {
          evt.preventDefault()
          _stepDownOption()
        }
        break;
      }
      //up
      case 38: {
        if (isShowOption){
          evt.preventDefault()
          _stepUpOption()
        }
        break;
      }
      default: return;
    }
  }

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickItem = useCallback((item, evt) => {
      _undecorateActiveElement()
      setActiveIndexOption(getDataIndex(evt.currentTarget))

      setIsShowOption(false)
      setState(prevState => ({
        ...prevState,
        value: item[propCaption],
      }))
      onSelect(item);
  }, [])
  // _undecorateActiveElement, setActiveIndexOption
  // setIsShowOption
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , domOptions = useMemo(() => (<OptionStack
       options={options}
       indexActiveOption={getActiveIndexOption()}
       propCaption={propCaption}
       ItemOptionComp={ItemOptionComp}
       onClick={_hClickItem}
     />
   ), [options]);
  // getActiveIndexOption, _hClickItem
  // propCaption, ItemOptionComp
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isShowOption) {
      const comp = _getActiveElement();
      _decorateActiveElement(comp);
      makeVisibleActiveRowComp(comp);
    }
  }, [isShowOption])
  // _decorateActiveElement, _getActiveElement
  /*eslint-enable react-hooks/exhaustive-deps */

  if (props.options !== initialOptions) {
    _initStateFromProps()
  }

  const indexActiveOption = getActiveIndexOption()
  , _style = crStyleWidth(width, style)
  , [
     placeholder,
     afterInputEl
  ] = crAfterInputEl(
     props,
     state,
     isShowOption,
     toggleIsShowOption
   )
  , [
     nFiltered,
     nAll
  ] = crFooterIndex(
     options,
     initialOptions
  );

  return (
    <div
      className={CL_ROOT}
      style={_style}
    >
      <input
         ref={_refDomInputText}
         className={CL_INPUT}
         type="text"
         name="select"
         //autoComplete="off"
         autoCorrect="off"
         autoCapitalize="off"
         spellCheck={false}
         value={value}
         placeholder={placeholder}
         onChange={_hInputChange}
         onKeyDown={_hInputKeyDown}
      />
      {afterInputEl}
      <hr className={CL_INPUT_HR} />
      <DivOptions
         refOptionsElement={_refOptionsElement}
         refIndexElement={_refIndexElement}
         optionsStyle={optionsStyle}
         width={width}
         isShowOption={isShowOption}
         indexActiveOption={indexActiveOption}
         nFiltered={nFiltered}
         nAll={nAll}
         onStepUp={_stepUpOption}
         onStepDown={_stepDownOption}
         onClear={_initStateFromProps}
      >
        {domOptions}
      </DivOptions>
    </div>
  );
}

/*
InputSelect.propTypes = {
   style: PropTypes.object,
   optionsStyle: PropTypes.object,
   propCaption: PropTypes.string,
   ItemOptionComp: PropTypes.element,
   width: PropTypes.string,
   options: PropTypes.arrayOf(PropTypes.shape({
      caption: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
   })),
   optionName: PropTypes.string,
   optionNames: PropTypes.string,
   placeholder: PropTypes.string,
   isWithInput: PropTypes.bool,
   prefixInput: PropTypes.string

   onSelect: PropTypes.func,
}
*/

export default InputSelect
