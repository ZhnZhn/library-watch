import { Component } from '../uiApi';

import ArrowCell from './ArrowCell';

const MAX_WITHOUT_ANIMATION = 800

const S_ROOT_DIV = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  backgroundColor: '#e1e1cb'
}
, S_INPUT_TEXT = {
  color: 'green',
  width: '100%',
  height: 30,
  paddingLeft: 10,
  paddingRight: 40,
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none',
  fontSize: '16px',
  fontWeight: 'bold'
}
, S_ROOT_OPTION_DIV = {
  zIndex: '10',
  position: 'absolute',
  left: 0,
  color: 'green',
  width: '100%',
  //height: '160px',
  backgroundColor: '#e1e1cb',
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5
}
, S_OPTION_DIV = {
  width: '100%',
  //height: '160px',
  minHeight: 160,
  maxHeight: 200,
  overflow: 'auto'
}
, S_SPINNER_CELL = {
  display: 'inline-block',
  position: 'relative',
  left: 8,
  top: 4,
  width: 16,
  height: 16
}
, S_SPINNER_FAILED_CELL = {
  ...S_SPINNER_CELL,
  borderColor: '#f44336',
  cursor: 'pointer'
}
, S_INPUT_HR = {
  margin: '0 40 5 10',
  borderWidth: 'medium medium 1px',
  borderStyle: 'none none solid',
  borderColor: '#1b75bb',
  borderImage: 'none',
 }
 , S_ARROW_SHOW = {
    borderColor: '#1b75bb transparent transparent'
 }
 , S_ITEM_DIV = {
  padding: '4px 0 4px 5px',
  cursor: 'pointer'
}
, S_ITEM_ODD = {
  backgroundColor: '#c3c3ac'
}
, S_ITEM_EVEN = {
  backgroundColor: '#d5d5bc'
}
, S_OPTIONS_FOOTER = {
  backgroundColor: 'silver',
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5
}
, S_FILTERED_SPAN = {
  display: 'inline-block',
  color: 'gray',
  fontWeight: 'bold',
  padding: '4px 0 4px 10px'
}
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' }
, CL_OPTION_ROW_ACTIVE = "option-row__active";

const _decorateOfDomActiveOption = (
  domActiveOption
) => {
  if (domActiveOption){
    domActiveOption.classList.add(CL_OPTION_ROW_ACTIVE);
  }
}
, _undecorateOfDomActiveOption = (
  domActiveOption
) => {
   if (domActiveOption){
     domActiveOption.classList.remove(CL_OPTION_ROW_ACTIVE);
  }
};

class InputSearch extends Component {
  static defaultProps = {
    options: [],
    optionName: '',
    optionNames: '',
    isUpdateOptions: false,
    propCaption: 'caption'
  }

  constructor(props){
    super(props)

    this.domOptionsCache = null;
    this.indexActiveOption = 0;

    const {
      options,
      optionName,
      optionNames,
      propCaption
    } = this.props
    , _optionName = optionName
         ? ' ' + optionName
         : ''
    , _optionNames = optionNames
         ? ' ' + optionNames
         : _optionName || '';

    this.propCaption = propCaption;
    this.state = {
      isShowOption: false,
      isValidDomOptionsCache: false,
      isLocalMode: false,
      value: '',
      options: options,
      optionName: _optionName,
      optionNames: _optionNames,
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      //New options come from Parent - Clear domCache, Init State
      if (this.props.options !== nextProps.options
          || nextProps.isUpdateOptions) {
        this._setStateToInit(nextProps.options);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps || nextProps.isUpdateOptions) {
      nextState.isLocalMode = false;
    } else {
      nextState.isLocalMode = true;
    }

    return true;
  }

  componentDidUpdate(){
     //Decorate Active Option
     if (this.state.isShowOption){
       let domActiveOption = this._getDomForActiveOption();
       _decorateOfDomActiveOption(domActiveOption);
       this._makeVisibleOfDomActiveOption(domActiveOption);
    }
  }

  _setStateToInit = (options) => {
    this.indexActiveOption = 0;
    this.setState({
      isShowOption: false,
      isValidDomOptionsCache: false,
      value: '',
      options: options
    });
  }

  _getDomForActiveOption = () => {
    return this.refs["v"+this.indexActiveOption];
  }

  _undecorateActiveOption = () => {
    _undecorateOfDomActiveOption(this._getDomForActiveOption())
  }

  _makeVisibleOfDomActiveOption = (domActiveOption) => {
    if (domActiveOption){
      const offsetTop = domActiveOption.offsetTop
      , scrollTop = this.domOptions.scrollTop;
      if ((offsetTop - scrollTop) > 70){
         this.domOptions.scrollTop += (offsetTop - scrollTop - 70);
      }
      if ((offsetTop - scrollTop) < 0){
        this.domOptions.scrollTop= 0;
      }
    }
  } 

  _filterOptionsToState = (
    options,
    value
  ) => {
     const valueFor = value.toLowerCase()
     , _caption = this.propCaption;
     return options
       .filter(option => option[_caption]
         .toLowerCase()
         .indexOf(valueFor) !== -1
       );
  }

  _handlerInputChange = (event) => {
    const { value } = event.target
    , _inputLength = value.length
    , _stateLength = this.state.value.length;
    if (_inputLength !== _stateLength){
      const _options = _inputLength > _stateLength
        ? this.state.options
        : _inputLength < _stateLength
            ? this.props.options
            : void 0
      , options = _options
        ? this._filterOptionsToState(_options, value)
        : [];
      if (options.length === 0) {
        options.push({
          [this.propCaption]: 'No results found',
          value: 'noresult'
        })
      }
      this._undecorateActiveOption();
      this.indexActiveOption = 0;
      this.setState({
        isShowOption: true,
        isValidDomOptionsCache: false,
        value,
        options
      })
    }
  }

  _startAfterInputAnimation = () => {
    if (this.state.options.length>MAX_WITHOUT_ANIMATION){
      this.arrowCell.startAnimation();
    }
  }
  _stopAfterInputAnimation = () => {
    this.arrowCell.stopAnimation();
  }

  _handlerInputKeyDown = (event) => {
    switch(event.keyCode){
      // enter
      case 13:{
         const item = this.state.options[this.indexActiveOption];

         if (item && item[this.propCaption]){
           this.setState({
             value: item[this.propCaption],
             isShowOption: false,
             isValidDomOptionsCache: true
           });

           if (item.value !== 'noresult'){
             this.props.onSelect(item);
           } else {
             this.props.onSelect(null);
           }
         }
         break;
      }
      //escape
      case 27:
        if (this.state.isShowOption){
          this.setState({ isShowOption: false });
        } else {
          this._undecorateActiveOption();
          this._setStateToInit(this.props.options);
          this.props.onSelect(null);
        }
      break;
      //down
      case 40:
        if (!this.state.isShowOption){
          this._startAfterInputAnimation();
          setTimeout(
             () => { this.setState({ isShowOption : true }, this._stopAfterInputAnimation) },
             0
          );
        } else {
          event.preventDefault();

          let domActiveOption = this._getDomForActiveOption();
          if (domActiveOption){
             _undecorateOfDomActiveOption(domActiveOption);

             this.indexActiveOption += 1;
             if (this.indexActiveOption>=this.state.options.length){
                this.indexActiveOption = 0;
                this.domOptions.scrollTop = 0;
             }

             domActiveOption = this._getDomForActiveOption();
             _decorateOfDomActiveOption(domActiveOption)

             const offsetTop = this._getDomForActiveOption().offsetTop;
             const scrollTop = this.domOptions.scrollTop;
             if ( (offsetTop - scrollTop) > 70){
                this.domOptions.scrollTop += (offsetTop - scrollTop - 70);
             }
          }
        }
      break;
      //up
      case 38:
        if (this.state.isShowOption){
          event.preventDefault();

          let domActiveOption = this._getDomForActiveOption();
          if (domActiveOption){
            _undecorateOfDomActiveOption(domActiveOption);

            this.indexActiveOption -= 1;
            if (this.indexActiveOption < 0){
              this.indexActiveOption = this.state.options.length - 1;
              const offsetTop2 = this.refs["v"+this.indexActiveOption].offsetTop;
              this.domOptions.scrollTop = offsetTop2;
            }

            domActiveOption = this._getDomForActiveOption();
            _decorateOfDomActiveOption(domActiveOption);

            const offsetTop = domActiveOption.offsetTop
            , scrollTop = this.domOptions.scrollTop;
            if ((offsetTop - scrollTop) < 70){
              this.domOptions.scrollTop -= ( 70 - (offsetTop - scrollTop) );
            }
          }
        }
      break;
      default: return;
    }
  }

  _handlerToggleOptions = () => {
    if (this.state.isShowOption){
       this.setState({ isShowOption: false });
    } else {
      this._startAfterInputAnimation()
      setTimeout(
        () => this.setState({ isShowOption: true}, this._stopAfterInputAnimation),
        1
      )
    }
  }

  _handlerClickOption = (
    item,
    index,
    event
  ) => {
    this.indexActiveOption = index;
    this.setState({
      value: item[this.propCaption],
      isShowOption: false
    });
    this.props.onSelect(item);
  }

  _refDomOptions = element => this.domOptions = element
  _refInput = c => this.domInputText = c
  _refArrowCell = c => this.arrowCell = c

  renderOptions = () => {
    const { ItemOptionComp } = this.props
    , {
      isShowOption,
      options,
      isValidDomOptionsCache
    } = this.state;

    let _domOptions;
    if (options){
      if (!isValidDomOptionsCache){
         const _caption = this.propCaption;
         _domOptions = options.map((item, index)=>{
            const _styleDiv = index % 2 === 0
              ? S_ITEM_ODD
              : S_ITEM_EVEN;
            return (
             <div
                key={index}
                ref={"v"+index}
                className="option-row"
                style={{...S_ITEM_DIV, ..._styleDiv}}
                onClick={this._handlerClickOption.bind(this, item, index)}
              >
                <ItemOptionComp
                   item={item}
                   propCaption={_caption}
                />
            </div>
           )
        });
        this.domOptionsCache = _domOptions;
      } else {
        _domOptions = this.domOptionsCache;
      }
    }

    const _styleOptions = isShowOption
      ? S_BLOCK
      : S_NONE
    , _item = options[0]
    , _numberFilteredItems = _item  && _item.value !== 'noresult'
        ? options.length
        : 0
    , _numberAllItems = this.props.options
        ? this.props.options.length
        : 0;

    return (
        <div style={{...S_ROOT_OPTION_DIV, ..._styleOptions}}>
          <div
             ref={this._refDomOptions}
             key="1"
             style={{...S_OPTION_DIV, ..._styleOptions}}
           >
            {_domOptions}
          </div>
          <div key="2" style={S_OPTIONS_FOOTER}>
            <span style={S_FILTERED_SPAN}>
              Filtered {_numberFilteredItems} : {_numberAllItems}
            </span>
          </div>
        </div>
    )
  }

  render(){
    const {
      value,
      isLocalMode,
      isShowOption
    } = this.state
    , _styleArrow = isShowOption
        ? S_ARROW_SHOW
        : null
    , _domOptions = (isLocalMode || isShowOption)
        ? this.renderOptions()
        : null
    , {
      isLoading,
      isLoadingFailed,
      placeholder
    } = this.props
    , {
      optionName,
      optionNames
    } = this.state;

    let _domAfterInput, _placeholder;
    if (!isLoading && !isLoadingFailed){
      _placeholder= (placeholder)
         ? placeholder
         : `Select${optionName}...`;
      _domAfterInput = (
        <ArrowCell
           ref={this._refArrowCell}
           styleArrow={_styleArrow}
           onClick={this._handlerToggleOptions}
        />
      );
    } else if (isLoading){
      _placeholder=`Loading${optionNames}...`;
      _domAfterInput = (
        <span
          style={S_SPINNER_CELL}
          data-loader="circle"
        />
      );
    } else if (isLoadingFailed) {
       _placeholder=`Loading${optionNames} Failed`;
       _domAfterInput = (
        <span
          style={S_SPINNER_FAILED_CELL}
          data-loader="circle-failed"
          onClick={this.props.onLoadOption}
        />
      )
    }

    return (
      <div style={S_ROOT_DIV}>
        <input
           ref={this._refInput}
           type="text"
           value={value}
           style={S_INPUT_TEXT}
           placeholder={_placeholder}
           onChange={this._handlerInputChange}
           onKeyDown={this._handlerInputKeyDown}
        />
        {_domAfterInput}
        <hr style={S_INPUT_HR} />
        {_domOptions}
      </div>
    )
  }

  focusInput(){
    this.domInputText.focus();
  }

  focusNotValidInput(){
    this.domInputText.focus();
  }
}

export default InputSearch
