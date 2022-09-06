import React from 'react'
import "../css/main.css"
import { AiFillHome } from 'react-icons/ai';

export default function Header() {
  return (
    <div className="header">
        <AiFillHome size="17px"/>
        
        <span style={{marginLeft:"10px"}}>Home / Statistics</span>
        
        </div>
  )
}
