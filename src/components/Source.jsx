import React,{useContext} from 'react'
import "../css/main.css"
import { MdDelete } from 'react-icons/md';
import { SourcesContext } from "../Context/SourcesContext";
import axios from "axios";




export default function 
(props) {
    const { srcs } = useContext(SourcesContext);
    const [sources, setsources] = srcs;

    const remove = () =>{
        const aux =[]
        sources.map((source)=>{
            if(source !== props.sourcevalue){
                aux.push(source)
            }
        })
        return (aux)
    }
    const handledelete = () =>{
        axios.delete(`http://127.0.0.1:8000/api/auth/source/${props.sourcevalue}`).then((response) => {

          });
        setsources(remove()); 

    }
    
  return (
    <div className="source">
        <span className="sourcespan">{props.sourcevalue}</span>
        <MdDelete  className="delete" onClick={handledelete} size="20px"/>

    </div>
  )
}
