import React, { Component } from 'react';

import Caption from './ItemCaption'
import ButtonCircle from '../zhnAtoms/ButtonCircle';
import ShowHide from '../zhnAtoms/ShowHide';

const ITEM_DESCRIPTION = "GitHub Repository Issues"

const styles = {
  rootDiv : {
    lineHeight : 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position : 'relative'
  },
  captionSpanOpen : {
    display : 'inline-block',
    color: 'rgba(164, 135, 212, 1)',
    cursor: 'pointer',
    maxWidth: '500px',
    fontWeight : 'bold',
    whiteSpace: 'nowrap',
    textOverflow : 'ellipsis',
    overflow : 'hidden',
    float : 'left'
  },

  SPAN_VERSION : {
    color: '#80c040',
    paddingLeft : '10px',
    paddingRight : '10px'
  },
  BTN_CIRCLE : {
    marginLeft: '10px'
  }
}


class GitHubIssues extends Component {
  state = {
    isShow: true
  }

  _handlerToggleOpen = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  _handlerClickWatch = () => {
    const { repo, requestType, onWatchItem } = this.props
        , caption = `${repo}`
        , descr = ITEM_DESCRIPTION
    onWatchItem({
       caption : caption,
       config : { repo, requestType, version : '', caption, descr }
    });
  }

  _renderIssues = (issues) => {
     return issues.map((item, index) => {
        const { state, number, created_at, updated_at, title, html_url } = item
            , className = (index % 2)
                     ? 'row-even not-selected'
                     : 'row-odd not-selected'
        return (
           <div key={index} className={className}>
             <a href={html_url}>
                <div style={{ paddingBottom: '8px' }}>
                  <span style={{ paddingRight: '8px' }}>
                    {state}
                  </span>
                  <span style={{ paddingRight: '8px' }}>
                    {`(#${number})`}
                  </span>
                  <span style={{ paddingRight: '8px' }}>
                    {created_at.replace('T', ' ').replace('Z', '')}
                  </span>
                  <span>
                    {updated_at.replace('T', ' ').replace('Z', '')}
                  </span>
                </div>
                <div>
                  {title}
                </div>
             </a>
           </div>
        );
     })
  }

  render(){
    const {
            repo, caption, issues=[],
            onCloseItem
           } = this.props
        ,  _number = issues.length
        , _styleCaption = styles.captionSpanOpen
        , { isShow } = this.state;

     return (
       <div style={styles.rootDiv}>
         <Caption onClose={onCloseItem}>
           <span
              className="not-selected"
              title={caption}
              style={_styleCaption}
              onClick={this._handlerToggleOpen}
           >
             <span style={{ paddingRight: '8px' }}>
               {repo}
             </span>
             <span>
               {_number}
             </span>
           </span>
           <ButtonCircle
              caption="W"
              title="Add to Watch"
              style={styles.BTN_CIRCLE}
              onClick={this._handlerClickWatch}
           />
         </Caption>
         <ShowHide isShow={isShow}>
           {this._renderIssues(issues)}
         </ShowHide>
       </div>
     );
  }
}

export default GitHubIssues
