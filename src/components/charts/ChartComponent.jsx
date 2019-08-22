import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import deepEqual from './deepEqual';

const IGNORED_PROPERTIES = [
	'id', 'width', 'height', 'onElementsClick'
];

const _isFn = fn => typeof fn === 'function';
const _assign = Object.assign;


_assign(Chart.defaults.global, {
	defaultFontColor: 'black',
  defaultFontSize: 14,
  defaultFontStyle: 'bold'
})

_assign(Chart.defaults.global.tooltips, {
	titleFontColor: '#a487d4',
	titleFontSize: 16,
	bodyFontColor: '#80c040',
	bodyFontSize: 16
});

const _objectWithoutProperties = (obj, keys) => {
	const target = {};
	let i;
	for (i in obj) {
		if (keys.indexOf(i) >= 0) continue;
		if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		target[i] = obj[i];
	}
	return target;
}

class ChartComponent extends Component {

	//displayName: 'ChartComponent',

  /*
	static propTypes = {
		data: PropTypes.object.isRequired,
		height: PropTypes.number,
		legend: PropTypes.object,
		onElementsClick: PropTypes.func,
		options: PropTypes.object,
		redraw: PropTypes.bool,
		type: PropTypes.oneOf(['doughnut', 'pie', 'line', 'bar', 'horizontalBar', 'radar', 'polarArea']),
		width: PropTypes.number
	},
	*/

	static defaultProps = {
			legend: {
				display: true,
				position: 'bottom'
			},
			type: 'doughnut',
			height: 150,
			width: 300,
			redraw: false,
			options: {
				tooltips: {
					callbacks: {
						labelTextColor: function(tooltipItem, chartInst) {
							 return chartInst.data.datasets[tooltipItem.datasetIndex].borderColor;
						}
					}
				}
			}
	}


	componentDidMount() {
		this.chart_instance = void 0;
		this.renderChart();
	}

	componentDidUpdate() {
		if (this.props.redraw) {
			this.chart_instance.destroy();
			this.renderChart();
		} else {
			this.updateChart();
		}
	}


	shouldComponentUpdate(nextProps, nextState) {
		const compareNext = _objectWithoutProperties(nextProps, IGNORED_PROPERTIES)
		, compareNow = _objectWithoutProperties(this.props, IGNORED_PROPERTIES);
		return !deepEqual(compareNext, compareNow, { strict: true });
	}

	componentWillUnmount() {
		this.chart_instance.destroy();
	}

	updateChart = () => {
		const {data, options} = this.props;

		if (!this.chart_instance) return;

		if (options) {
			this.chart_instance.options = Chart.helpers.configMerge(this.chart_instance.options, options);
		}

		this.chart_instance.config.data = {
			...this.chart_instance.config.data,
			...data
		};

		this.chart_instance.update();
	}

	renderChart = () => {
		const {data, options, type} = this.props;
		this.chart_instance = new Chart(this.rootNode, {
			type,
			data,
			options
		});
	}

	handleOnClick = (evt) => {
		const elems = this.chart_instance.getElementsAtEvent(evt);
		if (elems.length) {
			const {onElementsClick} = this.props;
			onElementsClick(elems);
		}
	}

  _refRoot = n => this.rootNode = n

	render() {
		const { height, width, onElementsClick } = this.props
		    , _onClick = _isFn(onElementsClick)
		         ? this.handleOnClick
				     : null;
		return (
			<canvas
				 ref={this._refRoot}
				 height={height}
				 width={width}
				 onClick={_onClick}
			/>
		);
	}
}

export default ChartComponent;
