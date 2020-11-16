import React ,{Component} from 'react';
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import { withRouter } from "react-router";

// import FacebookLogin from 'react-facebook-login';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: "AIzaSyAbsVIHpBt8F3Whb3zl0LXQIKXOj-cPdZU",
  authDomain:"ag-grid-social-login.firebaseapp.com"
})

class Fblogin extends Component {
    state={
      accessToken: "",
      isSignedIn:false,
    }
  uiConfig ={
    signinFlows:"popup",
    signInOptions :[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks:{
      signInSuccess: () => false
    }
  }
  componentDidMount=()=>{
    
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({
        isSignedIn:!!user
      })
      this.props.history.push({pathname:'/ag-grid'});

    })

  }
   responseFacebook = (response,props) => {
        if(response.accessToken){
          console.log('response.accessToken ::', response.accessToken)

        this.setState({
          accessToken: response.accessToken,
        })

        this.props.history.push({pathname:'/ag-grid'});
      }

  }
   componentClicked = data => {
    console.log("data",data);
  }
  
  
  render(){
    const {accessToken,isSignedIn} = this.state
  return (
    <>
    <div  style={{width:500,height:315}}>
      <br/>
      facebook access token: {accessToken}

      <br/>
      <div>
        {isSignedIn ? 
        (<div> authenticated</div>)
        :(<div> 
          <StyledFirebaseAuth 
            uiConfig={this.uiConfig} 
            firebaseAuth={firebase.auth()}/>
          </div>)}
      </div>
      <br/>
      

    
      {/* <FacebookLogin
    appId="429483541778154"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />, */}

    </div>
  
    </>
  );
  }
}

export default withRouter(Fblogin);
