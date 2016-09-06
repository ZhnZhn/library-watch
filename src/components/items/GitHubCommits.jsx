import React from 'react';

import ButtonCircle from '../zhnAtoms/ButtonCircle';
import SvgClose from '../zhnAtoms/SvgClose';
import ShowHide from '../zhnAtoms/ShowHide';

const ITEM_DESCRIPTION = "GitHub Repository Commits"

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


const GitHubCommits = React.createClass({
  getInitialState(){
    return {
      isShow : true
    }
  },

  _handlerToggleOpen(){
    this.setState({ isShow: !this.state.isShow })
  },

  _handlerClickWatch(){
    const { repo, requestType, onWatchItem } = this.props
        , caption = `${repo}`
        , descr = ITEM_DESCRIPTION
    onWatchItem({
       caption : caption,
       config : { repo, requestType, version : '', caption, descr }
    });
  },

  _renderCommits(commits){
     return commits.map((item, index) => {
        const { commit={}, html_url } = item
            , { message='', committer={} } = commit
            , { date='', name='' } = committer
            , className = (index % 2)
                     ? 'row-even not-selected'
                     : 'row-odd not-selected'
        return (
           <div key={index} className={className}>
             <a href={html_url}>
                <div style={{ paddingBottom: '8px' }}>
                  <span style={{ paddingRight: '8px' }}>
                    {name}
                  </span>
                  <span>
                    {date.replace('T', ' ').replace('Z', '')}
                  </span>
                </div>
                <div>
                  {message}
                </div>
             </a>
           </div>
        );
     })
  },

  render(){
    const {
            repo, caption, commits,
            onCloseItem
           } = this.props
        , _styleCaption = styles.captionSpanOpen
        , { isShow } = this.state;

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
           </span>
           <ButtonCircle
              caption={'W'}
              title="Add to Watch"
              style={styles.BTN_CIRCLE}
              onClick={this._handlerClickWatch}
           />
           <SvgClose onClose={onCloseItem} />
         </div>
         <ShowHide isShow={isShow}>
           {this._renderCommits(commits)}
         </ShowHide>
       </div>
     );
  }
});

export default GitHubCommits
