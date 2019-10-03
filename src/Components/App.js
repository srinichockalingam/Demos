import React ,{Component, Fragment} from 'react';
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import Writers from './writers';
import Layout from './Layout';
import {NotFound} from './Errors';
import SignInSide from '../SignInSide';
import BasicMUI from './Layout/Master/basicMaterialUI';
import MTCountry from './Layout/Master/MaterialTable';
import MTFactory from './Layout/Master/MaterialTableFactory';
import Contamination from './Layout/Report/Chart';
import Bar from './Bar';
import Line from './Line';
import Radar from './Radar';
import Pie from './Pie';
import Doughnut from './Doughnut';
import Polar from './Polar';
// import { Polar } from 'react-chartjs-2';


export default class extends Component{
state = {
  writers:[],
  reportdata:[]
}


async componentDidMount(){
 /* const writers = await(await fetch('http://localhost:3004/writers?_embed=texts')).json()
  this.setState({writers})
  const reportdata = await(await fetch('http://localhost:3004/chartData')).json()
  this.setState({reportdata})
  console.log(reportdata)*/
}




  render(){
    //const {writers, reportdata} = this.state
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <SignInSide/>}></Route>
          <Layout >
          <Route path="/Home" ></Route>
          <Route path="/Home/Master/Country" render={() => <MTCountry/>}></Route>
          <Route path="/Home/Master/Factory" render={() => <MTFactory/>}></Route>
          <Route path="/Home/Report/Bar" render={() => <Bar/>}></Route>
          <Route path="/Home/Report/Radar" render={() => <Radar/>}></Route>
          <Route path="/Home/Report/Pie" render={() => <Pie/>}></Route>
          <Route path="/Home/Report/Doughnut" render={() => <Doughnut/>}></Route>
          <Route path="/Home/Report/Polar" render={() => <Polar/>}></Route>
          <Route path="/Home/Report/Line" render={() => <Line/>}></Route>
          
          </Layout>
          <Route render ={() => <NotFound/>}/>
        </Switch>
      </BrowserRouter>         
    );
  }
}

/*          
writers={writers} this is located beside layout

<Route path="/Home/writers" render={
            props => <Writers {...props} writers={writers} ></Writers>}
            ></Route>
                              data={reportdata.datasets[0].data}
                  title={reportdata.datasets[0].label}
                  color={reportdata.datasets[0].Color}
            
            
            */