import React, { Component } from 'react';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption'
import CL from '../styles/CL'
import STYLE from './Item.Style'

const ITEM_DESCRIPTION = "GitHub Repository Recent Release";

class GitHubRecentRelease extends Component {
  state = {
    isShow: true
  }

  _hToggleOpen = () => {
     this.setState(prevState => ({
       isShow: !prevState.isShow
     }))
  }

  _hClickWatch = () => {
     const { repo, requestType, version, published_at, onWatchItem } = this.props
         , caption = `${repo} ${version}`
         , descr = ITEM_DESCRIPTION
     onWatchItem({
        caption : caption,
        config : { repo, requestType, version, caption, descr, date : published_at }
     });
  }

  render(){
    const {
        caption, repo, version, published_at, html_url,
        onCloseItem
      } = this.props
    , { isShow } = this.state;
    return (
      <div style={STYLE.ROOT}>
        <Caption onClose={onCloseItem}>
          <button
             className={CL.BT_ITEM}             
             title={caption}
             style={STYLE.CAPTION_OPEN}
             onClick={this._hToggleOpen}
          >
            <span>
              {repo}
            </span>
            <span style={STYLE.SPAN_VERSION}>
               {version}
            </span>
            <span>
               {published_at}
            </span>
          </button>
          <A.ButtonCircle
             caption="W"
             title="Add to Watch"
             style={STYLE.BTN_CIRCLE}
             onClick={this._hClickWatch}
          />
        </Caption>
        <A.ShowHide isShow={isShow} style={STYLE.PT_8}>
          <a
             href={html_url}
             className="github-link"
             style={STYLE.ML_8}
          >
             Link to description of recent release tag
          </a>
        </A.ShowHide>
      </div>
    );
  }
}

export default GitHubRecentRelease
