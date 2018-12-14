import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from '../src/components/Form/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path='/' 
        render={()=><div style={{margin : '200px'}}><h1>Welcome to Sample</h1><Link style={{fontSize : '30px'}} to='/user-form'>Go to Form</Link></div>} />
        <Route exact path='/user-form' component={Form} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
