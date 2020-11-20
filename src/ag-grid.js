import React ,{useState,useEffect} from 'react';
import axios from 'axios'
import {withRouter,Redirect} from 'react-router-dom'
import {useHistory} from 'react-router'
//import firebase from 'firebase'
//import firebase from './config'
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-enterprise';
const urlPosts = `https://jsonplaceholder.typicode.com/users`

const initialRowData = null

  const initialColumnData=[
    {headerName: "Name", field: "name",sortable:true,filter:true,checkboxSelection:true,editable:true },//rowGroup:true},
    {headerName: "User Name", field: "username",sortable:true,filter:true,editable:true},
    {headerName: "Email", field: "email",sortable:true,filter:true ,editable:true},
    {headerName: "Phone", field: "phone",sortable:true,filter:true ,editable:true},
    {headerName: "Website", field: "website",sortable:true,filter:true ,editable:true},
    {headerName: "Address", field: "address.city",sortable:true,filter:true ,editable:true},
    {headerName: "Company", field: "company.name",sortable:true,filter:true, editable:true},

  ]
const AgGrid=(props)=> {
  
  const [ColumnDefs, setColumnDefs] = useState(initialColumnData)
  const [rowData, setrowData] = useState(initialRowData)
  const [isSignedIn, setisSignedIn] = useState("")
  const [gridApi, setGridApi] = useState(null)

  //let history = useHistory();

  useEffect(() => {
    const getRows= async()=>{
    const res = await axios.get(urlPosts)
    setrowData(res.data) 
    console.log('res', res.data)
    }
    getRows()
  },[])
  
  
  return (
    <div className="ag-theme-balham" style={{width:500,height:315}}>
      <br/>
      <div style={{width:500,height:315,display:"inline"}}>
      <h1>Welcome to Ag Grid</h1>
      </div>
      <br/>
      <br/>
      <AgGridReact
        columnDefs={ColumnDefs}
        rowData={rowData}
        rowSelection="multiple"
        onGridReady ={params => setGridApi(params.api)}
        groupSelectsChildren={true}
        autoGroupColumnDef={{
           headerName: "Name",
           field: "name",
            //cellRenderer:'agGroupCellRenderer',
           cellRendererParams: {
               checkbox: true
           }
       }}

      />


    </div>
  );
}

export default withRouter(AgGrid)
