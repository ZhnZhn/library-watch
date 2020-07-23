import React, { Component, Fragment } from 'react'

import A from '../zhn-atoms/A'
import Caption from './ItemCaption'
import CL from '../styles/CL'
import STYLE from './Item.Style'

const ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

const _formatDate = strDate => (''+strDate)
 .replace('T', ' ')
 .replace('Z', '');

const Token = ({ caption, value }) => (
  <Fragment>
    <span className="library__value-title">
      {caption+':'}
    </span>
    <span className="library__value">
      {value}
    </span>
  </Fragment>
);

const CellValue = props => (
  <div>
    <Token {...props} />
  </div>
);

const CellValueDate = ({ caption, value, date }) => (
  <div>
    <Token
      caption={caption}
      value={value}
    />
    <Token
      caption="Date"
      value={_formatDate(date)}
    />
  </div>
);

const Detail = (props) => {
  const { json } = props
      , { commit, files, stats, html_url } = json
      , { author, message, committer } = commit
      , { date:authorDate, name:authorName } = author
      , { date:committerDate, name:committerName } = committer
      , { total, additions, deletions } = stats

  const _renderFiles = (files=[]) => {
     return files.map((file, index) => {
       const className = (index % 2)
                ? 'row__topic__even not-selected'
                : 'row__topic__odd not-selected'
          , {filename} = file
        return (
          <div key={index} className={className}>
            {filename}
          </div>
        );
     })
  };

  return (
    <div className="library">
      <CellValue
        caption="Message"
        value={message}
      />
      <CellValueDate
        caption="Author"
        value={authorName}
        date={authorDate}
      />
      <CellValueDate
        caption="Committer"
        value={committerName}
        date={committerDate}
      />
      <div>
        <Token
          caption="Total"
          value={total}
        />
        <Token
          caption="Additions"
          value={additions}
        />
        <Token
          caption="Deletions"
          value={deletions}
        />
      </div>
      <A.OpenClose2 caption={`Files (${files.length})`} isClose={true}>
        {_renderFiles(files)}
      </A.OpenClose2>
      <a
         href={html_url}
         className="github-link"
      >
         Link to description of commit
      </a>
    </div>
  );
}

class GitHubRecentTag extends Component {
  state = {
    isShow: true,
    isDetail: false,
    json: {}
  }

  _hClickWatch = () => {
    const { repo, requestType, version, onWatchItem } = this.props
        , { tagDate } = this.state
        , caption = `${repo} ${version}`
        , descr = ITEM_DESCRIPTION;
    onWatchItem({
       caption: caption,
       config: { repo, requestType, version, caption, descr, date: tagDate }
    });
  }

  _hClickDetail = () => {
    this.props.onClickDetail()
     .then(json => {
        const { commit={} } = json
        , { committer={} } = commit
        , { date } = committer
        , tagDate = _formatDate(date)
        this.setState({
          isDetail: true,
          isShow: true,
          json, tagDate
        });
     });
  }

  _hToggleOpen = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  render(){
    const { repo, version, caption, onCloseItem } = this.props
        , { isShow, isDetail, json } = this.state;
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
          </button>
          <A.ButtonCircle
             caption="W"
             title="Add to Watch"
             style={STYLE.BTN_CIRCLE}
             onClick={this._hClickWatch}
          />
          <A.ButtonCircle
             caption="D"
             title="Load Tag Details"
             style={STYLE.BTN_CIRCLE}
             onClick={this._hClickDetail}
          />
        </Caption>
        <A.ShowHide isShow={isShow}>
          {isDetail && <Detail json={json} />}
        </A.ShowHide>
      </div>
    );
  }
}

export default GitHubRecentTag
