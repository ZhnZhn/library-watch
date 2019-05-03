import React, { Component } from 'react';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption'
import STYLE from './Item.Style'

const ITEM_DESCRIPTION = "GitHub Repository Issues"

const _toDate = strDate => (''+strDate)
  .replace('T', ' ')
  .replace('Z', '');

class GitHubIssues extends Component {
  state = {
    isShow: true
  }

  _hToggleOpen = () => {
    this.setState( prevState => ({
      isShow: !prevState.isShow
    }))
  }

  _hClickWatch = () => {
    const { repo, requestType, onWatchItem } = this.props
        , caption = `${repo}`
        , descr = ITEM_DESCRIPTION
    onWatchItem({
       caption: caption,
       config: { repo, requestType, version : '', caption, descr }
    });
  }

  _renderIssues = (issues) => {
     return issues.map((item, index) => {
        const { state, number, created_at, updated_at, title, html_url } = item
            , className = (index % 2)
                     ? 'row-even not-selected'
                     : 'row-odd not-selected';
        return (
           <div key={index} className={className}>
             <a href={html_url}>
                <div style={STYLE.PB_8}>
                  <span style={STYLE.PR_8}>
                    {state}
                  </span>
                  <span style={STYLE.PR_8}>
                    {`(#${number})`}
                  </span>
                  <span style={STYLE.PR_8}>
                    {_toDate(created_at)}
                  </span>
                  <span>
                    {_toDate(updated_at)}
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
        , { isShow } = this.state;

     return (
       <div style={STYLE.ROOT}>
         <Caption onClose={onCloseItem}>
           <button
              className="not-selected"
              title={caption}
              style={STYLE.CAPTION_OPEN}
              onClick={this._hToggleOpen}
           >
             <span style={STYLE.PR_8}>
               {repo}
             </span>
             <span>
               {_number}
             </span>
           </button>
           <A.ButtonCircle
              caption="W"
              title="Add to Watch"
              style={STYLE.BTN_CIRCLE}
              onClick={this._hClickWatch}
           />
         </Caption>
         <A.ShowHide isShow={isShow}>
           {this._renderIssues(issues)}
         </A.ShowHide>
       </div>
     );
  }
}

export default GitHubIssues
