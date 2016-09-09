import React from 'react';

import ChartComponent from './ChartComponent';

const LineChart =React.createClass({
	render() {
		return (
			<ChartComponent
				{...this.props}
				ref={ref => this.chart_instance = ref && ref.chart_instance}
				type="line"
			/>
		);
	}
});

export default LineChart
