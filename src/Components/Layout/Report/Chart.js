import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {  withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  Chart:{
    display: 'flex',
    margin:-50,
  }
})
class Contamination extends Component {

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
                    backgroundColor:[
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)',
                      'rgba(100, 99, 200, 0.6)'
                    ]
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
                    backgroundColor:[
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)',
                        'rgba(100, 99, 5, 0.6)'
                    ]
                  }



                  
                ]
              }
        }
    }

    render(){
        const { classes } = this.props;
        return(
            <div className = {classes.Chart} >
                <Bar
                data = {this.state.chartData}
                width = {100}
                height= {50}
                options = {{maintainAspectRatio: true
                }}
                />
            </div>
        )
    }
}

export default  withStyles(styles)(Contamination);
