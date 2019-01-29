import React, { Component } from 'react';

import Caption from './ItemCaption'
import ButtonCircle from '../zhnAtoms/ButtonCircle';
import ShowHide from '../zhnAtoms/ShowHide';

const ITEM_DESCRIPTION = "GitHub Repository Recent Release";

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


class GitHubRecentRelease extends Component {
  state = {
    isShow: true
  }

  _handlerToggleOpen = () => {
     this.setState({ isShow : !this.state.isShow });
  }

  _handlerClickWatch = () => {
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
        , _styleCaption = styles.captionSpanOpen
        , { isShow } = this.state
    return (
      <div style={styles.rootDiv}>
        <Caption onClose={onCloseItem}>
          <span
             className="not-selected"
             title={caption}
             style={_styleCaption}
             onClick={this._handlerToggleOpen}
          >
            <span>
              {repo}
            </span>
            <span style={styles.SPAN_VERSION}>
               {version}
            </span>
            <span>
               {published_at}
            </span>
          </span>
          <ButtonCircle
             caption="W"
             title="Add to Watch"
             style={styles.BTN_CIRCLE}
             onClick={this._handlerClickWatch}
          />
        </Caption>
        <ShowHide isShow={isShow} style={{ paddingTop: '8px' }}>
          <a
             href={html_url}
             className="github-link"
             style={{ marginLeft : '8px' }}
          >
             Link to description of recent release tag
          </a>
        </ShowHide>
      </div>
    );
  }
}

export default GitHubRecentRelease
