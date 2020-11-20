import React from 'react'
//import {AgGridReact,AgGridColumn} from 'ag-grid-react';
 import {AgGridRow} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-enterprise';
import { connect } from "react-redux";
//import moment from 'moment'
import Check from './Check'
import {removeTask,toggleChecked} from '../../store/actions/taskActions'
const AgGridBody = ({task,removeTask,toggleChecked}) => {

    const handleRemove=(task)=>{
        removeTask(task)
    }
    const handleCheck=(task)=>{
        toggleChecked(task)
    }
    return (
        <>
        <div>
            <AgGridRow>{task.task}</AgGridRow>
            {/* <AgGridRow>date:{moment(task.date.toDate()).calender()}</AgGridRow> */}
            <AgGridRow>
                <input type="checkbox"/>
                {/* <Check onClick={() => handleCheck(task)} checked={task.checked} /> */}
            </AgGridRow>
            <AgGridRow>          
                            <span
                            className="material-icons text-danger"
                            style={{ cursor: "pointer" }}
                             onClick={() => handleRemove(task)}>
                                delete
                            </span>
            </AgGridRow>
            </div>
        </>
    )
}
const mapDistpatchToProps=dispatch=>({
    removeTask: task =>dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task)),
})
export default connect(null,mapDistpatchToProps)(AgGridBody)
