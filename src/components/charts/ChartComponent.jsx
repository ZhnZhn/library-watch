import { isFn } from '../../utils/isTypeFn';

import {
	memo,
	useRef,
	useMemo,
	useLayoutEffect,
	getRefValue,
	setRefValue
} from '../uiApi';

import {
	Chart,
	LineElement,
	LineController,
	BarElement,
	BarController,
	Legend,
  Tooltip,
	CategoryScale,
	LinearScale,
	PointElement
} from 'chart.js';

import configChart from './configChart';
import merge from '../../utils/merge';
import deepEqual from '../../utils/deepEqual';
import omit from '../../utils/omit';

const IGNORED_PROPERTIES = [
	'id',
	'width',
	'height',
	'onElementsClick'
];

Chart.register(
	LineElement,
  LineController,
	BarElement,
	BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

configChart(Chart)

const DF_OPTIONS = {
	tooltips: {
		callbacks: {
			labelTextColor: function(tooltipItem, chartInst) {
				 return chartInst.data.datasets[tooltipItem.datasetIndex].borderColor;
			}
		}
	}
};

const _isNotShouldRerender = (
	prevProps,
	nextProps
) => deepEqual(
	omit(prevProps, IGNORED_PROPERTIES),
	omit(nextProps, IGNORED_PROPERTIES),
	{ strict: true }
)
,  _renderChart = (
	refChartInst,
	refCanvas,
	type,
	data,
	options
) => {
	 setRefValue(refChartInst, new Chart(getRefValue(refCanvas), {
		 type,
		 data,
		 options: merge({...DF_OPTIONS}, options)
	}));
}
, _updateChart = (
	chartInst,
	data,
	options
) => {
	 if (options) {
		 chartInst.options = merge(chartInst.options, options);
	 }
	 chartInst.config.data = {
		 ...chartInst.config.data,
		 ...data
	 };
	 chartInst.update();
};

export const ChartComponent = memo(({
	 type='line',
	 height=150,
	 width=300,
	 redraw=false,
	 data,
	 options,
	 onElementsClick
}) => {
  const _refCanvas = useRef()
	, _refChartInst = useRef()
	, _hClick = useMemo(() => isFn(onElementsClick)
	    ? event => {
				  const elems = getRefValue(_refChartInst).getElementsAtEvent(event);
				  if (elems.length) {
					  onElementsClick(elems);
				  }
			  }
			: null
  , [onElementsClick]);

	useLayoutEffect(() => {
		const _chartInst = getRefValue(_refChartInst);
		if (_chartInst) {
			if (redraw) {
				_chartInst.destroy()
				_renderChart(_refChartInst, _refCanvas, type, data, options)
			} else {
				_updateChart(_chartInst, data, options)
			}
		}
	})

  /*eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
		_renderChart(_refChartInst, _refCanvas, type, data, options)
	  return () => {
			getRefValue(_refChartInst).destroy()
			setRefValue(_refChartInst, null)
		}
	}, [])
	// type, data, options
	/*eslint-enable react-hooks/exhaustive-deps */

	return (
		<canvas
			 ref={_refCanvas}
			 height={height}
			 width={width}
			 onClick={_hClick}
		/>
	);
}, _isNotShouldRerender);

/*
ChartComponent.propTypes = {
  type: PropTypes.oneOf([
	  'line',
		'bar'
	]),
	width: PropTypes.number,
	height: PropTypes.number,
	redraw: PropTypes.bool,
	data: PropTypes.object.isRequired,
	options: PropTypes.object,
	legend: PropTypes.object,
	legendOptions: PropTypes.object
	onElementsClick: PropTypes.func
},
*/
