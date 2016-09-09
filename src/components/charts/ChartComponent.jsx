import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import deepEqual from './deepEqual';

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = 'bold';


Chart.defaults.global.tooltips.titleFontColor = '#a487d4';
Chart.defaults.global.tooltips.titleFontSize =  16;
Chart.defaults.global.tooltips.bodyFontColor = '#80c040';
Chart.defaults.global.tooltips.bodyFontSize = 16;

const ChartComponent = React.createClass({

	displayName: 'ChartComponent',

	propTypes: {
		data: PropTypes.object.isRequired,
		height: PropTypes.number,
		legend: PropTypes.object,
		onElementsClick: PropTypes.func,
		options: PropTypes.object,
		redraw: PropTypes.bool,
		type: PropTypes.oneOf(['doughnut', 'pie', 'line', 'bar', 'horizontalBar', 'radar', 'polarArea']),
		width: PropTypes.number
	},

	getDefaultProps() {
		return {
			legend: {
				display: true,
				position: 'bottom'
			},
			type: 'doughnut',
			height: 150,
			width: 300,
			redraw: false
		};
	},

	componentWillMount() {
		this.chart_instance = undefined;
	},

	componentDidMount() {
		this.renderChart();
	},

	componentDidUpdate() {
		if (this.props.redraw) {
			this.chart_instance.destroy();
			this.renderChart();
		} else {
			this.updateChart();
		}
	},

	_objectWithoutProperties (obj, keys) {
		var target = {};
		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}
		return target;
	},

	shouldComponentUpdate(nextProps, nextState) {
		const ignoredProperties = ['id', 'width', 'height', 'onElementsClick'];
		const compareNext = this._objectWithoutProperties(nextProps, ignoredProperties);
		const compareNow = this._objectWithoutProperties(this.props, ignoredProperties);
		return !deepEqual(compareNext, compareNow, {strict: true});
	},

	componentWillUnmount() {
		this.chart_instance.destroy();
	},

	updateChart() {
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
	},

	renderChart() {
    //legend
		const {data, options, type} = this.props;
		const node = ReactDOM.findDOMNode(this);
    
		this.chart_instance = new Chart(node, {
			type,
			data,
			options
		});
	},

	handleOnClick(evt) {
		const elems = this.chart_instance.getElementsAtEvent(evt);
		if (elems.length) {
			const {onElementsClick} = this.props;
			onElementsClick(elems);
		}
	},

	render() {
		const { height, width, onElementsClick } = this.props;

		return (
			<canvas
				 height={height}
				 width={width}
				 onClick={typeof onElementsClick === 'function' ? this.handleOnClick : null}
			/>
		);
	}
});

export default ChartComponent;
