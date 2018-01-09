import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const line = {
  labels: ['09:25:17', '09:27:57', '09:29:37', '09:33:17', '09:33:57', '09:35:37'],
  datasets: [
    {
      label: 'Currtent Sessions',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55]
    },
  ]
};

class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose() {
    this.props.close('Sessions');
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Sessions
          <div className="card-actions">
            <button type="button" className="btn btn-link" onClick={ this.handleClose.bind(this) }><i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="card-block">
          <div className="chart-wrapper">
            <Line data={line}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      suggestedMin: 0,
                    }
                  }]
                }
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Sessions;
