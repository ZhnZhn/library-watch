import React, { Component } from 'react';

import A from '../zhn-atoms/A'
import Caption from './ItemCaption'
import STYLE from './Item.Style'

const _formatDate = strDate => (''+strDate)
 .replace('T', ' ')
 .replace('Z', '');

const ItemDescription = (props) => {
  const { library={} } = props
  , {
      name, description, size, created_at, pushed_at, stargazers_count,
      open_issues, watchers_count, html_url
    } = library
  , _dateCreatedAt = _formatDate(created_at)
  , _datePushedAt = _formatDate(pushed_at);
  return (
    <div className="library">
          <div>
             <span className="library__title">
               {name}
             </span>
          </div>
          <div>
            <span>
              {description}
            </span>
          </div>
          <div>
            <span className="library__value-title">
              Size:
            </span>
            <span className="library__value">
              {size}
            </span>
          </div>
          <div>
             <span className="library__value-title">
               Created At:
             </span>
             <span className="library__value">
               {_dateCreatedAt}
             </span>
             <span className="library__value-title">
              Pushed At:
             </span>
             <span className="library__value">
               {_datePushedAt}
             </span>
          </div>
          <div>
            <span className="library__value-title">
              Stars:
            </span>
            <span className="library__value">
              {stargazers_count}
            </span>
            <span className="library__value-title">
              Issues:
            </span>
            <span className="library__value">
              {open_issues}
            </span>
            <span className="library__value-title">
              Watchers:
            </span>
            <span className="library__value">
              {watchers_count}
            </span>
          </div>
          <div>
             <a
                className="library__link"
                href={html_url}
              >
                Link to GitHub Repository
             </a>
          </div>
        </div>
  );
}


class GitHubSearchInfo extends Component {
  state = {
    isShow: true
  }

  _hToggleOpen = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  render(){
    const { repo, stars_count, pushed_at, caption, library, onCloseItem } = this.props
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
            <span style={STYLE.SPAN_VERSION}>
              {stars_count}
            </span>
            <span>
              {pushed_at}
            </span>
          </button>
        </Caption>
        <A.ShowHide isShow={isShow}>
          <ItemDescription
            library={library}
          />
        </A.ShowHide>
      </div>
    );
  }
}

export default GitHubSearchInfo
