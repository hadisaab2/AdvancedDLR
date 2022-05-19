import React, { useEffect, useState,useContext } from 'react'

import "../css/main.css"
import { DataGrid , GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid';
import axios from "axios"
import { SourcesContext } from "../Context/SourcesContext";



function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport style={{color:"#2b585c"}} />
      </GridToolbarContainer>
    );
  }





export default function (props) {
  const { clickedstate,tablerows,tablecolumns} = useContext(SourcesContext);
  const[clickedsender,setclickedsender]=clickedstate
  const [rows, setrows]=tablerows
  const [columns, setcolumns]=tablecolumns



  const handlecellClick=(e)=>{
    setclickedsender(e.row)
    console.log(e.row.sender_id)
  } 

  return (
    <div className="tablecontainer">
    <DataGrid
      // rows={props.data}
      rows={rows}
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[5]}
      style={{backgroundColor:"white"}}
      components={{
        Toolbar: CustomToolbar,
      }}
      onCellClick={handlecellClick}
      
    />
  </div>
  )
}
