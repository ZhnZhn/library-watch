import React, { Component } from 'react'

import Chart from '../charts/Chart';

import Caption from './ItemCaption'
import ButtonCircle from '../zhn-atoms/ButtonCircle';
import FormattedInteger from '../zhn-atoms/FormattedInteger';
import ShowHide from '../zhn-atoms/ShowHide';
import LineChart from '../charts/LineChart';
import ButtonDownUp from '../zhn-atoms/ButtonDownUp';
import LinkImg from '../zhn-atoms/LinkImg';

const BASE_NODEICO = "https://nodei.co/npm/"
    , SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true"
    , BASE_NPM = "https://www.npmjs.com/package/"
    , ITEM_DESCRIPTION = "Npm Recent Month Downloads";

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

  SPAN_SUM : {
    color: '#80c040',
    paddingLeft : '10px',
    paddingRight : '10px'
  },
  SPAN_START : {
    paddingRight : '10px'
  },
  BTN_CIRCLE : {
    marginLeft: '10px'
  },

  DIV_NODEICO_BADGE : {
     marginLeft: '32px'
  },
  SPAN_NODEICO : {
    display: 'block',
    fontWeight: 'bold' ,
    color: '#3399FF',
    cursor: 'pointer'
  },

  BUTTON_DOWN_UP : {
    paddingTop : '4px',
    paddingBottom : '4px'
  },

  SHOW_HIDE_BADGE : {
     marginTop: '16px'
  }

}


class NpmRecentDownloads extends Component {
  state = {
    isShow : true,
    isLoadNodeIco : false,
    isShowNodeIco : false
  }

  _handlerToggleOpen = () => {
    this.setState({ isShow : !this.state.isShow });
  }
  _handlerClickWatch = () => {
    const { packageName, requestType, sumDownloads, toDate, onWatchItem } = this.props
        , _caption = `${packageName} ${sumDownloads}`
        , _descr = ITEM_DESCRIPTION
    onWatchItem({
       caption : _caption,
       config : {
          requestType,
          repo : packageName,
          descr: _descr,
          version : sumDownloads,
          caption : _caption,
          date : toDate
        }
    });
  }

  _handlerClickNodeIco = () => {
    this.setState({
      isLoadNodeIco : true,
      isShowNodeIco : !this.state.isShowNodeIco
    });
  }

  _renderButtonWatch = () => {
    return (
      <ButtonCircle
         caption="W"
         title="Add to Watch"
         style={styles.BTN_CIRCLE}
         onClick={this._handlerClickWatch}
      />
    )
  }

  _renderNodeIcoBadge = (packageName) => {
    const _href = BASE_NPM + packageName
        , _imgSrc = BASE_NODEICO + packageName + SUFFIX_NODEICO
    return (
      <LinkImg
         href={_href}
         imgClass="node-ico"
         imgSrc={_imgSrc}
      />
    );
  }

  render(){
    const {
            packageName, caption, sumDownloads=0, fromDate, toDate,
            labels, data,
            onCloseItem, onWatchItem
          } = this.props
        , _isButtonWatch = ( typeof onWatchItem === 'function' )
                ? true
                : false
        , _styleCaption = styles.captionSpanOpen
        , { isShow, isLoadNodeIco, isShowNodeIco } = this.state
        , _lineChartConfig = Chart.fLineConfig({ labels, data })
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
              {packageName}
            </span>
            <FormattedInteger
               value={sumDownloads}
               style={styles.SPAN_SUM}
            />
            <span style={styles.SPAN_START}>
              {fromDate}
            </span>
            <span>
              {toDate}
            </span>
          </span>
          { _isButtonWatch && this._renderButtonWatch() }
        </Caption>
        <ShowHide isShow={isShow}>
          <LineChart
             data={_lineChartConfig}
          />

          <div style={styles.DIV_NODEICO_BADGE}>
            <ButtonDownUp
               caption="NodeICO"
               title="Package badge from Nodei.co"
               styleRoot={styles.BUTTON_DOWN_UP}
               isUp={isShowNodeIco}
               onClick={this._handlerClickNodeIco}
            />
            <ShowHide isShow={isShowNodeIco} style={styles.SHOW_HIDE_BADGE}>
              {isLoadNodeIco && this._renderNodeIcoBadge(packageName)}
            </ShowHide>
          </div>

        </ShowHide>
      </div>
    );
  }
}

export default NpmRecentDownloads
