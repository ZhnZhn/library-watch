import React, { Component } from 'react';

import ChartComponent from './ChartComponent';

class LineChart extends Component {

	_refChart = node => this.chart_instance = node

	render() {
		return (
			<ChartComponent
				{...this.props}
				ref={this._refChart}
				type="line"
			/>
		);
	}
}

export default LineChart
