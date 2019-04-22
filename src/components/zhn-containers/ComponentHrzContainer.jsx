import React, { Component } from 'react';

//import PropTypes from "prop-types";

class ComponentHrzContainer extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    initShowAction: PropTypes.string
  }
  */
  state = {
    containers : []
  }
  
  componentWillMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
     const { initShowAction } = this.props;
     if (actionType === initShowAction){
       this.state.containers.unshift(data);
       this.setState(this.state);
     }
  }

 /*
  _renderContainers(containers){
    return containers.map((container, index) => {
      return container;
    })
  }
  */

  render(){
    const { containers } = this.state;
    return (
       <div className="hrz-container">
          {containers}
       </div>
    );
  }
}

export default ComponentHrzContainer
