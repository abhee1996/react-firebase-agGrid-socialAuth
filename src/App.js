import React, {Component} from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Fblogin from './fb-login'
import AgGrid  from './ag-grid'
import Action from './action'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

class App extends Component{
  render(){
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"  component={Fblogin}/>
          <Route exact path="/ag-grid" component={AgGrid} />
        </Switch>
      </Router>
    </>
  );
  }
}

export default App;
