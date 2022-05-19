import React from "react";
import "../css/main.css";
import { BiLogIn } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { DiAngularSimple } from 'react-icons/di';

import { MdAutoGraph } from 'react-icons/md';



export default function () {
  return (
    <div className="sidebar">
      <div className="sidetitlediv">
        <DiAngularSimple className="ADLRlogo" size="55px"/>
        <span className="sidetitle">dvanced</span>
        <span className="sidetitledlr">DLR</span>

      </div>
      <div className="userdiv">
        <div className="circle">
          <img className="profile" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
        </div>
        <span className="username">Ali Jezzine</span>
        <span className="admin">Administrator</span>


      </div>
      <div className="sidetabs">
      <Link to="/statistics">
          <div className="tabs">
            <MdAutoGraph size="30px" className="sideicon" />
            <span className="sidetab">Statistics</span>
          </div>
        </Link>
        <Link to="/sources">
          <div className="tabs">
            <BiLogIn size="30px" className="sideicon" />
            <span className="sidetab">Login</span>
          </div>
        </Link>

        <Link to="/sources">
          <div className="tabs">
            <MdAddBox size="30px" className="sideicon" />
            <span className="sidetab">Add source</span>
          </div>
        </Link>
        <Link to="/searchcdr">
          <div className="tabslast">
            <AiOutlineSearch size="30px" className="sideicon" />
            <span className="sidetab">Search CDR</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
