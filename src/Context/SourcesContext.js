import { createContext, useState, useRef } from "react";
//data of table
import {rows,columns} from "../data.js"

export const SourcesContext = createContext();
export const SourcesProvider = ({ children }) => {
    const [srcs,setsrcs]=useState([])
    const [tablerows,settablerows]=useState(rows)
    const [tablecolumns,settablecolumns]=useState(columns)
    const [clickedstate,setclickedstate]=useState(rows[0])



  return (
    <SourcesContext.Provider
      value={{

        srcs: [srcs, setsrcs],
        //for one source statistics when graph is clicked(bring data from rows)
        clickedstate: [clickedstate, setclickedstate],
        //tabledata
        tablerows: [tablerows, settablerows],
        //table columns
        tablecolumns: [tablecolumns, settablecolumns]
      }}
    >
      {children}
    </SourcesContext.Provider>
  );
};
