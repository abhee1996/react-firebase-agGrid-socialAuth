import React, { Component } from 'react'

import {AgGridReact} from 'ag-grid-react';
//import {AgGridRow} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-enterprise';
import AgGridBody from './Task'

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import {connect} from 'react-redux'

class Tasks extends Component {
      state ={
          tasks:this.props.tasks,
        ColumnDefs:[
            {headerName: "Task", field: "task",sortable:true,filter:true,checkboxSelection:true,editable:true },
            {headerName: "Added date", field: "added date",sortable:true,filter:true,editable:true},
            {headerName: "Status", field: "status",sortable:true,filter:true ,editable:true},
            {headerName: "Delete", field: "delete",sortable:true,filter:true ,editable:true},
              ],
         //rowData:{tasks(task=>{})},
         gridApi: null


      }
      
      render() {
          const {ColumnDefs,tasks} = this.state
          return (
    <>
        <div className="container">

    <div className="ag-theme-balham" style={{width:500,height:315}}>

      <br/>

        <AgGridReact
        columnDefs={ColumnDefs}
        rowData={tasks}//(task)=><AgGridBody task={tasks}/> }
        //&& tasks.map(task =><AgGridBody task={task} key={task.id}/>)}
        rowSelection="multiple"
        
      />
        
            
      </div>
      </div>

              </>
          )
      }
  }
//   const mapDistpatchToProps=dispatch=>({
//     removeTask: task =>dispatch(removeTask(task)),
//     toggleChecked: (task) => dispatch(toggleChecked(task)),
// })

  const mapStateToProps = (state) => {
    console.log(state);
    const tasks = state.firestore.ordered.tasks;
    return {
      tasks: tasks,
      uid: state.firebase.auth.uid
    };
  };
  export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "tasks",
        where: ["authorId", "==", ownProps.uid],
        orderBy: ["date", "desc"],
      },
    ])
  )(Tasks);
  







