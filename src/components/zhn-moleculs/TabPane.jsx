import React, { Component } from 'react';

//import PropTypes from "prop-types";

const STYLE = {
  UL : {
    listStyle : 'outside none none',
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '5px',
    borderBottom : '2px solid rgba(164, 135, 212, 1)'
  },
  DIV : {
    width: "100%",
    height : "100%"
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
    super()
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
                    ? {display: 'block', width: "100%", height : "100%"}
                    : {display : 'none'};
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
        <ul className="tabpane__tabs" style={STYLE.UL}>
           {this._renderTabs(children)}
        </ul>
        <div style={STYLE.DIV}>
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