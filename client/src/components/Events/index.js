import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';


export default function Events() {
    
    return (
    <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          columns={[{ field: 'Events Name' }, { field: 'Detail' }, { field: 'age' }]}
          rows={[
            {
              id: 1,
              username: 'defunkt',
              age: 38,
            },
          ]}
        />
    </div>
    )
}