import withInitialState from './withInitialState'
import withToolbar from './withToolbar'
import withValidationLoad from './withValidationLoad'

const Decorators = {
  dialog: (dialog) => {
    withInitialState(dialog)
    withValidationLoad(dialog)
    withToolbar(dialog)
  }
};

export default Decorators
