//import PropTypes from "prop-types";
import React, { Component } from 'react';

const S_TABS = {
  margin: '10px 5px 0 10px',
  borderBottom: '2px solid #a487d4'
}
, S_TABPANES = {
  width: "100%",
  height: "100%"
}
, S_TABPANE_SELECTED = {
  display: 'block',
  width: "100%",
  height: "100%"
}
, S_TABPANE_HIDED = { display: 'none' };


class TabPane extends Component {
  /*
  static propTypes = {
     width: PropTypes.number,
     height: PropTypes.number,
     children: PropTypes.arrayOf(PropTypes.node)
  }
  */

  constructor(props){
    super(props)
    const components = props.children.map((tab, index) => {
       return  React.cloneElement(tab.props.children, { key : 'comp' + index });
    })
    this.state = {
      selectedTabIndex : 0,
      components
    }
  }

  _handlerClickTab = (index) => {
    this.setState({selectedTabIndex : index});
  }

  _renderTabs = (children) => {
      const {selectedTabIndex} = this.state;
      return children.map((tab, index) => {
        const isSelected = (index === selectedTabIndex) ? true : false;
        return React.cloneElement(tab, { key : index, onClick : this._handlerClickTab.bind(null, index), isSelected })
      })
  }

  _renderComponents = () => {
     const {selectedTabIndex, components} = this.state;
     return components.map((comp, index) => {
        const divStyle = (index === selectedTabIndex)
           ? S_TABPANE_SELECTED
           : S_TABPANE_HIDED;
         return (
            <div style={divStyle} key={'a'+index}>
               {comp}
            </div>
          )
     })
  }

  render(){
    const { children, width, height } = this.props;
    return (
      <div style={{ width, height }}>
        <div style={S_TABS}>
           {this._renderTabs(children)}
        </div>
        <div style={S_TABPANES}>
           {this._renderComponents()}
        </div>
      </div>
    )
  }

  getSelectedTabIndex(){
    return this.state.selectedTabIndex;
  }
}


export default TabPane
