
import withToggle from './withToggle'

const _addBtTo = (arr, caption, title, onClick, compInst) => {
  arr.push({
    caption, title,
    onClick: compInst
      ? onClick.bind(compInst)
      : onClick
  })
};

const _createType2WithToolbar = function(
  props, { noLabels, hasDate } = {}
){
  const buttons = []
  , _toggle = this._toggleStateByWithToggle;

  if (!noLabels) {
    this._clickLabelWithToolbar = _toggle
      .bind(this, 'isShowLabels')
    _addBtTo(buttons, 'L', "Click to toggle row's labels",
      this._clickLabelWithToolbar
    )
  }
  if (hasDate) {
     this._clickDateWithToolbar = _toggle
       .bind(this, 'isShowDate')
    _addBtTo(buttons, 'D', 'Click to toggle date input',
      this._clickDateWithToolbar
    )
  }
  return buttons;
}

const _toggleWithToolbar = function(){
  this.setState(prevState => ({
    isToolbar: !prevState.isToolbar
  }))
};

const withToolbar = (target) => {
  withToggle(target)
  Object.assign(target.prototype, {
    _createType2WithToolbar,
    _toggleWithToolbar
  })
};

export default withToolbar
