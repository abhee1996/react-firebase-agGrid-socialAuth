import React, {Component} from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
 //import Fblogin from './fb-login'
import AgGrid  from './ag-grid'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Header from './components/header/header'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Dashboard from './components/Dashboard/Dashboard'
class App extends Component{
  render(){
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Dashboard} />

          {/* <Route exact path="/fblogin"  component={Fblogin}/> */}
          <Route exact path="/aggrid" component={AgGrid} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Signup} />

        </Switch>
      </Router>
    </>
  );
  }
}

export default App;
