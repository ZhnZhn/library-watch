import React, { Component } from 'react';

//import PropTypes from "prop-types";

const S = {
  TABS : {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 5,
    borderBottom : '2px solid #a487d4'
  },
  TABPANES : {
    width: "100%",
    height : "100%"
  },
  TABPANE_SELECTED: {
    display: 'block',
    width: "100%",
    height : "100%"
  },
  TABPANE_HIDED: {
    display : 'none'
  }
};

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
           ? S.TABPANE_SELECTED
           : S.TABPANE_HIDED;
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
        <div style={S.TABS}>
           {this._renderTabs(children)}
        </div>
        <div style={S.TABPANES}>
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
