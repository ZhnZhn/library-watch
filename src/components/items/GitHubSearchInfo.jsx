import React, { Component } from 'react';

import Caption from './ItemCaption'
import ShowHide from '../zhn-atoms/ShowHide';

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
  }
}

const ItemDescription = (props) => {
  const { library={} } = props
      , {
          name, description, size, created_at, pushed_at, stargazers_count,
          open_issues, watchers_count, html_url
        } = library
      , _dateCreatedAt = created_at.replace('T', ' ').replace('Z', '')
      , _datePushedAt = pushed_at.replace('T', ' ').replace('Z', '')
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

  _handlerToggleOpen = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  render(){
    const { repo, stars_count, pushed_at, caption, library, onCloseItem } = this.props
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
            <span>
              {repo}
            </span>
            <span style={styles.SPAN_VERSION}>
              {stars_count}
            </span>
            <span>
              {pushed_at}
            </span>
          </span>
        </Caption>
        <ShowHide isShow={isShow}>
          <ItemDescription
            library={library}
          />
        </ShowHide>
      </div>
    );
  }
}

export default GitHubSearchInfo
