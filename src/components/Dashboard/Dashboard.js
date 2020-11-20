import React, { Component } from 'react'
import AddTask from '../Task/AddTask'
import Tasks from '../Task/Tasks'
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"

const Dashboard = ({ uid }) => {
    if (!uid) return <Redirect to="/signin" />;

        return (
            <>
            <h1>Dashboard</h1>
                <AddTask/>
                <Tasks/>
            </>
        )
    
}
const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return {
      uid: uid,
    };
  };
  
  export default connect(mapStateToProps)(Dashboard);
  
