import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2'
import {  withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  Chart:{
    display: 'flex',
    margin:-50,
  }
})
class Chart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Jan 2019','Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019', 'Sep 2019', 'Oct 2019', 'Nov 2019','Dec 2019'],
                datasets:[
                    {
                        label:'Target',
                        data:[
                          700,
                          800,
                          400,
                          650,
                          880,
                          200,
                          400,
                          350,
                          900,
                          1000,
                          700,
                          900                      
                        ],
                        backgroundColor:[
                          'rgba(125, 150, 120, 0.6)',
                          'rgba(200, 150, 120, 0.6)',
                          'rgba(170, 199, 002, 0.6)',
                          'rgba(002, 30, 70, 0.6)',
                          'rgba(20, 220, 90, 0.6)',
                          'rgba(100, 9, 20, 0.6)',
                          'rgba(100, 99, 200, 0.6)',
                          'rgba(10, 99, 200, 0.6)',
                          'rgba(70, 99, 200, 0.6)',
                          'rgba(100, 200, 100, 0.6)',
                          'rgba(98, 35, 170, 0.6)',
                          'rgba(180, 170, 20, 0.6)'
                          
                        ]
                    }
                      ,
                      {
                        label:'Production',
                        data:[
                          600,
                          810,
                          350,
                          500,
                          800,
                          250,
                          600,
                          800,
                          600,
                          500,
                          900,
                          850                     
                        ],
                        backgroundColor:[
                            'rgba(125, 150, 8, 0.6)',
                            'rgba(200, 150, 120, 0.6)',
                            'rgba(170, 199, 002, 0.6)',
                            'rgba(002, 230, 70, 0.6)',
                            'rgba(200, 220, 90, 0.6)',
                            'rgba(100, 9, 20, 0.6)',
                            'rgba(100, 99, 200, 0.6)',
                            'rgba(10, 99, 200, 0.6)',
                            'rgba(70, 99, 200, 0.6)',
                            'rgba(100, 200, 100, 0.6)',
                            'rgba(98, 35, 170, 0.6)',
                            'rgba(180, 170, 20, 0.6)'
                        ]
                      }



                  
                ]
              }
        }
    }

    render(){
      const { classes } = this.props;
        return(
            <div className = {classes.Chart}>
                <Polar
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

export default  withStyles(styles)(Chart);
