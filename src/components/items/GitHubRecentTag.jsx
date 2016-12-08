import React from 'react'

import ButtonCircle from '../zhnAtoms/ButtonCircle';
import SvgClose from '../zhnAtoms/SvgClose';
import ShowHide from '../zhnAtoms/ShowHide';
import OpenClose2 from '../zhnAtoms/OpenClose2';

const ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

const styles = {
  rootDiv : {
    lineHeight : 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position : 'relative'
  },
  headerDiv: {
    backgroundColor: '#232F3B',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    paddingTop: '4px',
    paddingLeft: '10px',
    lineHeight: 1.5,
    //height: '25px',
    //width: '600px'
    width : '100%',
    height: '30px'
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
      <div>
        <span className="library__value-title">
          Message:
        </span>
        <span className="library__value">
          {message}
        </span>
      </div>
      <div>
        <span className="library__value-title">
          Author:
        </span>
        <span className="library__value">
          {authorName}
        </span>
        <span className="library__value-title">
          Date:
        </span>
        <span className="library__value">
          {authorDate.replace('T', ' ').replace('Z', '')}
        </span>
      </div>
      <div>
        <span className="library__value-title">
          Committer:
        </span>
        <span className="library__value">
          {committerName}
        </span>
        <span className="library__value-title">
          Date:
        </span>
        <span className="library__value">
          {committerDate.replace('T', ' ').replace('Z', '')}
        </span>
      </div>
      <div>
        <span className="library__value-title">
          Total:
        </span>
        <span className="library__value">
          {total}
        </span>
        <span className="library__value-title">
          Additions:
        </span>
        <span className="library__value">
          {additions}
        </span>
        <span className="library__value-title">
          Deletions:
        </span>
        <span className="library__value">
          {deletions}
        </span>
      </div>
      <OpenClose2 caption={`Files (${files.length})`} isClose={true}>
        {_renderFiles(files)}
      </OpenClose2>
      <a
         href={html_url}
         className="github-link"
      >
         Link to description of commit
      </a>
    </div>
  );
}

const GitHubRecentTag = React.createClass({
  getInitialState(){
     return {
       isShow : true,
       isDetail : false,
       json : {}
     }
  },

  _handlerClickWatch(){
    const { repo, requestType, version, onWatchItem } = this.props
        , { tagDate } = this.state
        , caption = `${repo} ${version}`
        , descr = ITEM_DESCRIPTION
    onWatchItem({
       caption : caption,
       config : { repo, requestType, version, caption, descr, date: tagDate }
    });
  },

  _handlerClickDetail(){
    this.props.onClickDetail().then((json) => {
      //console.log(json);
      const { commit={} } = json
          , { committer={} } = commit
          , { date:tagDate } = committer
          , _tagDate = tagDate.replace('T', ' ').replace('Z', '')
      this.setState({ isDetail: true, isShow: true, json: json, tagDate : _tagDate });
    });
  },

  _handlerToggleOpen(){
    this.setState({ isShow : !this.state.isShow });
  },


  _renderDetail(json){
    return (
      <Detail
         json={json}
      />
    );
  },

  render(){
    const { repo, version, caption, onCloseItem } = this.props
        , _styleCaption = styles.captionSpanOpen
        , { isShow, isDetail, json } = this.state;
    return (
      <div style={styles.rootDiv}>
        <div style={styles.headerDiv}>
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
          </span>
          <ButtonCircle
             caption={'W'}
             title="Add to Watch"
             style={styles.BTN_CIRCLE}
             onClick={this._handlerClickWatch}
          />
          <ButtonCircle
             caption={'D'}
             title="Load Tag Details"
             style={styles.BTN_CIRCLE}
             onClick={this._handlerClickDetail}
          />
          <SvgClose onClose={onCloseItem} />
        </div>
        <ShowHide isShow={isShow}>
          {isDetail && this._renderDetail(json)}
        </ShowHide>
      </div>
    );
  }
});

export default GitHubRecentTag
