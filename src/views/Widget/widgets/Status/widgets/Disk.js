import React, {Component} from 'react';
import { Doughnut, Line } from 'react-chartjs-2';

const line = {
  labels: ['09:25:17', '09:27:57', '09:29:37', '09:33:17', '09:33:57', '09:35:37'],
  datasets: [
    {
      label: 'Disk %',
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
      data: [65, 59, 55, 81, 56, 80]
    }
  ]
};

const doughnut = {
  labels: [
    'Disk %'
  ],
  datasets: [{
    data: [60, 40],
    backgroundColor: [
    '#FF6384',
    '#36A2EB'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB'
    ]
  }]
};

class Disk extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose() {
    this.props.close('Disk');
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Disk
          <div className="card-actions">
            <button type="button" className="btn btn-link" onClick={ this.handleClose.bind(this) }><i className="fa fa-times"></i></button>
          </div>
        </div>
        <div className="card-block">
          <div className="row">
            <div className="col-4">
              <div className="chart-wrapper">
                <Doughnut data={doughnut}
                  options={{
                    rotation: 1 * Math.PI,
                    circumference: 1 * Math.PI
                  }}
                />
              </div>
            </div>
            <div className="col-8">
              <div className="chart-wrapper">
                <Line data={line}
                  options={{
                    scales: {
                      yAxes: [{
                        ticks: {
                          suggestedMin: 0,
                          suggestedMax: 100
                        }
                      }]
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Disk;
