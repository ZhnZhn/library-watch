import React from 'react';

//import { ChartActionTypes } from '../../flux/actions/ChartActions';

const ComponentHrzContainer = React.createClass({
  getInitialState(){
    return {
      containers : []
    }
  },

  componentWillMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore);
  },
  componentWillUnmount(){
    this.unsubscribe();
  },
  _onStore(actionType, data){
     const { initShowAction } = this.props;
     if (actionType === initShowAction){
       this.state.containers.unshift(data);
       this.setState(this.state);
     }
  },

  _renderContainers(containers){
    return containers.map((container, index) => {
      return container;
    })
  },

  render(){
    const { containers } = this.state;
    return (
       <div className="hrz-container">
          {this._renderContainers(containers)}
       </div>
    )
  }
});


export default ComponentHrzContainer
