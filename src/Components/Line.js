import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'
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
                labels: ['00:00','01:00', '02:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00','10:10', '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
                datasets:[
                  {
                    label:'Percentage of KG Contamination/Ton Product',
                    data:[
                      70,
                      80,
                      30,
                      65,
                      88,
                      20,
                      40,
                      35,
                      90,
                      100,
                      70,
                      90,
                      30,
                      65,
                      88,
                      20,
                      40,
                      35,
                      90,
                      100                      
                    ],
                    backgroundColor:[
                      'rgba(250, 150, 220, 0.6)',
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
                }
                //   ,
                //   {
                //     label:'Monthly Production',
                //     data:[
                //       100,
                //       850,
                //       0,
                //       500,
                //       880,
                //       250,
                //       600,
                //       800,
                //       600,
                //       500,
                //       100,
                //       850,
                //       0,
                //       500,
                //       880,
                //       250,
                //       600,
                //       800,
                //       600,
                //       500                      
                //     ],
                //     backgroundColor:[
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)',
                //         'rgba(100, 99, 5, 0.6)'
                //     ]
                //   }



                  
                ]
              }
        }
    }

    render(){
      const { classes } = this.props;
        return(
            <div className = {classes.Chart}>
                <Line
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
