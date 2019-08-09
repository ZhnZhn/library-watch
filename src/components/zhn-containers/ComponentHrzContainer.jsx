import React, { Component } from 'react';

//import PropTypes from "prop-types";

const CL = "hrz-container";

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

  componentDidMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
     const { initShowAction } = this.props;
     if (actionType === initShowAction){
       this.setState(prevState => {
         prevState.containers.unshift(data)
         return {
           containers: [...prevState.containers]
         };
       })
       //this.state.containers.unshift(data);
       //this.setState(this.state);
     }
  }

  render(){
    const { containers } = this.state;
    return (
       <div className={CL}>
          {containers}
       </div>
    );
  }
}

export default ComponentHrzContainer
