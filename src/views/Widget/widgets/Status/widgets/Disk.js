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
      data: []
    }
  ]
};

for (let i = 0; i < 60; i++) {
  line.datasets[0].data.push(0);
}

const doughnut = {
  labels: [
    'Disk usage %',
    'Disk free %'
  ],
  datasets: [{
    data: [60, 40],
    backgroundColor: [
    '#60B044',
    '#e0e0e0'
    ],
    hoverBackgroundColor: [
    '#60B044',
    '#e0e0e0'
    ]
  }]
};

class Disk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    /*
    $.get('/platform//resouces_usage', function (result) {
    
      result = result || {};
      result = $.type(result) == 'object' ? result : JSON.parse(result);

    });
    */
    let result = Math.floor((Math.random() * 5) + 50);
    if (result < 30) {
      doughnut.datasets[0].backgroundColor[0] = doughnut.datasets[0].hoverBackgroundColor[0] = '#60B044';
    } else if (result < 60) {
      doughnut.datasets[0].backgroundColor[0] = doughnut.datasets[0].hoverBackgroundColor[0] = '#F6C600';
    } else if (result < 90) {
      doughnut.datasets[0].backgroundColor[0] = doughnut.datasets[0].hoverBackgroundColor[0] = '#F97600';
    } else {
      doughnut.datasets[0].backgroundColor[0] = doughnut.datasets[0].hoverBackgroundColor[0] = '#FF0000';
    }
    doughnut.datasets[0].data = [result, 100 - result];
    line.datasets[0].data.shift();
    line.datasets[0].data.push(result);

    /* update timer x axis */
    line.labels = this.getTimeseries();

    this.setState({
      data: doughnut.datasets[0].data
    });
  }

  componentWillMount() {
    this.loadData();
    this.timer = setInterval(this.loadData, 10000);
  }

  handleClose() {
    this.props.close('Disk');
    clearInterval(this.timer);
  }

  getTimeseries() {
    let categoriesArrStr = []; //caegoryAxis arr
    let startStamp = Math.round(new Date() / 1000);
    for (let i = 0; i < 60; i++) {
      let oneStamp = startStamp - 10 * i; //this only shows 10mins
      let newDate = new Date();
      newDate.setTime(oneStamp * 1000);
      let dateStr = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
      categoriesArrStr.push(dateStr);
    }
    categoriesArrStr.reverse();
    return categoriesArrStr;
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
	        <div className="card-text">
	          {this.state.data[0]} %
	        </div>
              </div>
            </div>
            <div className="col-8">
              <div className="chart-wrapper">
                <Line data={line}
                  options={{
                    scales: {
		      xAxes: [{
		        ticks: {
			  maxTicksLimit: 6
			}
		      }],
                      yAxes: [{
                        ticks: {
                          suggestedMin: 0,
                          suggestedMax: 100
                        },
                        scaleLabel:{
	                  display: true,
	                  labelString: '%',
	                  fontColor: "#546372"
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
