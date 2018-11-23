import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optiosn: {},
      series: [{}]
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        height="450"
        width="100%"
      />
    );
  }
}

export default PopChart;
