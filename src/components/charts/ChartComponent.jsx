import { Component } from 'react';
import Chart from 'chart.js';
import configChart from './configChart';
import deepEqual from '../../utils/deepEqual';
import omit from '../../utils/omit';

const IGNORED_PROPERTIES = [
	'id', 'width', 'height', 'onElementsClick'
];

const _isFn = fn => typeof fn === 'function'
, _configMerge = Chart.helpers.configMerge;

configChart(Chart)

const DF_OPTIONS = {
	tooltips: {
		callbacks: {
			labelTextColor: function(tooltipItem, chartInst) {
				 //console.log(chartInst.data.datasets[tooltipItem.datasetIndex].borderColor);
				 return chartInst.data.datasets[tooltipItem.datasetIndex].borderColor;
			}
		}
	}
};


class ChartComponent extends Component {


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
		legendOptions: PropTypes.object
	},
	*/

	static defaultProps = {
			type: 'doughnut',
			height: 150,
			width: 300,
			redraw: false,
	}


	componentDidMount() {
		this._renderChart();
	}

	componentDidUpdate() {
		if (this.props.redraw) {
			this.chart_instance.destroy();
			this._renderChart();
		} else {
			this._updateChart();
		}
	}


	shouldComponentUpdate(nextProps, nextState) {
		const compareNext = omit(nextProps, IGNORED_PROPERTIES)
		, compareNow = omit(this.props, IGNORED_PROPERTIES);
		return !deepEqual(compareNext, compareNow, { strict: true });
	}

	componentWillUnmount() {
		this.chart_instance.destroy();
	}

	_updateChart = () => {
		const { data, options } = this.props;

		if (!this.chart_instance) return;

		if (options) {
			this.chart_instance.options = _configMerge(this.chart_instance.options, options);
		}

		this.chart_instance.config.data = {
			...this.chart_instance.config.data,
			...data
		};

		this.chart_instance.update();
	}

	_renderChart = () => {
		const { data, options, type } = this.props
		, _options = _configMerge(DF_OPTIONS, options);
		this.chart_instance = new Chart(this.rootNode, {
			type,
			data,
			options: _options
		});
	}

	_hClick = (evt) => {
		const elems = this.chart_instance.getElementsAtEvent(evt);
		if (elems.length) {			
			this.props.onElementsClick(elems);
		}
	}

  _refRoot = n => this.rootNode = n

	render() {
		const { height, width, onElementsClick } = this.props
		, _onClick = _isFn(onElementsClick)
		     ? this._hClick
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
