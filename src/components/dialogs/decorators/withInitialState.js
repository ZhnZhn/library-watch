import has from '../../has'

const _withInitialState = () => ({
    isShowLabels: has.wideWidth(),
    isToolbar: true,
    isShowDate: false,
    validationMessages: []
});

const withInitialState = target => {
  Object.assign(target.prototype, {
    _withInitialState
  })
};

export default withInitialState
