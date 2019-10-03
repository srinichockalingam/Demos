import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';
import {  withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  Chart:{
    display: 'flex',
    margin:-50,
  }
})

class LineChart1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019', 'Sep 2019', 'Oct 2019','Nov 2019', 'Dec 2019'],
                datasets:[
                  {
                    label:'Monthly Target',
                    data:[
                      700,
                      800,
                      300,
                      650,
                      888,
                      200,
                      400,
                      350,
                      900,
                      1000                      
                    ],
                    backgroundColor:'rgba(100, 99, 200, 1)',
                    borderColor:'rgba(100, 99, 200, 1)',
                    fill:false,
                    lineTension:0
                  },
                  {
                    label:'Monthly Production',
                    data:[
                      100,
                      850,
                      0,
                      500,
                      880,
                      250,
                      600,
                      800,
                      600,
                      500                      
                    ],
                    backgroundColor:'rgba(100, 99, 5, 1)',
                    borderColor:'rgba(100, 99, 5, 1)',
                    fill:false,
                    lineTension:0
                  },
                  {
                    label:'LL',
                    data:[
                      300,
                      300,
                      300,
                      300,
                      300,
                      300,
                      300,
                      300,
                      300,
                      300,
                      300,                    
                    ],
                    backgroundColor:'rgba(255, 0, 0, 0.5)',
                    borderColor:'rgba(255, 0, 0, 0.5)',
                    fill:false,
                    lineTension:0
                  },
                  {
                    label:'L',
                    data:[
                      350,
                      350,
                      350,
                      350,
                      350,
                      350,
                      350,
                      350,
                      350,
                      350,
                      350,                    
                    ],
                    backgroundColor:'rgba(255, 255, 0, 0.5)',
                    borderColor:'rgba(255, 255, 0, 0.5)',
                    fill:false,
                    lineTension:0
                  },{
                    label:'HH',
                    data:[
                      900,
                      900,
                      900,
                      900,
                      900,
                      900,
                      900,
                      900,
                      900,
                      900,
                      900,                    
                    ],
                    backgroundColor:'rgba(255, 0, 0, 0.5)',
                    borderColor:'rgba(255, 0, 0, 0.5)',
                    fill:false,
                    lineTension:0
                  },
                  {
                    label:'H',
                    data:[
                      850,
                      850,
                      850,
                      850,
                      850,
                      850,
                      850,
                      850,
                      850,
                      850,
                      850,                    
                    ],
                    backgroundColor:'rgba(255, 255, 0, 0.5)',
                    borderColor:'rgba(255, 255, 0, 0.5)',
                    fill:false,
                    lineTension:0
                  }  
                ]
              }
        }
    }

    render(){
      const { classes } = this.props;
        return(
            <div className={classes.Chart}>
                <Line 
                data = {this.state.chartData}
                width = {100}
                height= {50}
                options = {
                    {maintainAspectRatio: true}           
                }
                />
            </div>
        )
    }
}

export default  withStyles(styles)(LineChart1);
/*export default  class LineChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = this.props.data.map(d => d.time);
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        options: {
          scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'week'
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  min: 0
                }
              }
            ]
          }
        },
        data: {
          labels: this.props.data.map(d => d.time),
          datasets: [{
            label: this.props.title,
            data: this.props.data.map(d => d.value),
            fill: 'none',
            backgroundColor: this.props.color,
            pointRadius: 2,
            borderColor: this.props.color,
            borderWidth: 1,
            lineTension: 0
          }]
        }
      });
    }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
  }*/
