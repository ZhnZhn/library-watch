import React from 'react'

import SvgClose from '../zhnAtoms/SvgClose';
import ShowHide from '../zhnAtoms/ShowHide';
import LineChart from '../charts/LineChart';


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

  SPAN_SUM : {
    color: '#80c040',
    paddingLeft : '10px',
    paddingRight : '10px'
  },
  SPAN_START : {
    paddingRight : '10px'
  }
}

const chartConfig = {
  labels: ['1', '2'],
  datasets: [
    {
      label: 'Downloads',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(128, 192, 64, 0.4)',
      //rgba(128, 192, 64, 1)
      //rgba(75,192,192,1)
      borderColor: 'rgba(128, 192, 64, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(128, 192, 64, 1)',
      //pointBackgroundColor: '#fff',
      pointBackgroundColor : 'rgba(128, 192, 64, 1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(128, 192, 64, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [0, 0]
    }
  ]
};


const NpmRecentDownloads = React.createClass({
  getInitialState(){
    return {
      isShow : true
    }
  },

  _handlerToggleOpen(){
    this.setState({ isShow : !this.state.isShow });
  },

  render(){
    const {
            packageName, caption, sumDownloads, fromDate, toDate,
            labels, data,
            onCloseItem
          } = this.props
        , _styleCaption = styles.captionSpanOpen
        , { isShow } = this.state

    chartConfig.labels = labels;
    chartConfig.datasets[0].data = data;

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
              {packageName}
            </span>
            <span style={styles.SPAN_SUM}>
               {sumDownloads}
            </span>
            <span style={styles.SPAN_START}>
              {fromDate}
            </span>
            <span>
              {toDate}
            </span>
          </span>
          <SvgClose onClose={onCloseItem} />
        </div>
        <ShowHide isShow={isShow}>
          <LineChart
             data={chartConfig}
          />
        </ShowHide>
      </div>
    );
  }
});

export default NpmRecentDownloads
