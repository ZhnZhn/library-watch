import { Component } from 'react'
//import PropTypes from 'prop-types'

const S_DIV = { backgroundColor: '#4d4d4d' };


class ModalPane extends Component {
  /*
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.object,
    isShow: PropTypes.bool,
    onClose: PropTypes.func
  }
  */

  static defaultProps = {
    onClose: () => {}
  }

  _hClickOutside = (event) => {
    if (this.rootNode
      && this.rootNode.contains
      && !this.rootNode.contains(event.target)
    ){
      event.stopPropagation()
      this.props.onClose(event)
    }
  }

  _addOutsideListener = () => {
    document.addEventListener('click', this._hClickOutside, true)
  }
  _removeOutsideListener = () => {
    document.removeEventListener('click', this._hClickOutside, true)
  }

  componentDidMount() {
    if (this.props.isShow) {
      this._addOutsideListener()
    }
  }
  componentWillUnmount() {
    this._removeOutsideListener()
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps ){
      if (this.props.isShow){
        this._addOutsideListener()
      } else {
        this._removeOutsideListener()
      }
    }
  }

  _refRootNode = n => this.rootNode = n

  render(){
    const { children } = this.props;

    return (
      <div
         ref={this._refRootNode}
         style={S_DIV}
      >
        {children}
      </div>
    );
  }
}

export default ModalPane
