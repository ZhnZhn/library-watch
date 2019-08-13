import React, { Component } from 'react';
import timeago from 'timeago.js';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption'
import STYLE from './Item.Style'

const ITEM_DESCRIPTION = "GitHub Repository Commits";

const CL_ITEM = 'row-item not-selected';

class GitHubCommits extends Component {
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

  _renderCommits = (commits) => {
     const _timeago = timeago(Date.now());
     return commits.map((item, index) => {
        const { commit={}, html_url } = item
        , { message='', committer={} } = commit
        , { date='', name='' } = committer
        , _dateTime = date.replace('T', ' ').replace('Z', '')
        , _dateAgo = _timeago.format(_dateTime)

        return (
           <div key={index} className={CL_ITEM}>
              <a href={html_url}>
              <div style={STYLE.PB_8}>
                <span style={STYLE.PR_8}>
                  {name}
                </span>
                <A.DateAgo
                   dateAgo={_dateAgo}
                   date={_dateTime}
                />
              </div>
                <div>
                  {message}
                </div>
              </a>
           </div>
        );
     })
  }

  render(){
    const {
        repo, caption, commits,
        onCloseItem
       } = this.props
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
             <span>
               {repo}
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
           {this._renderCommits(commits)}
         </A.ShowHide>
       </div>
     );
  }
}

export default GitHubCommits
