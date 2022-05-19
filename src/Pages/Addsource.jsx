import React, { useState, useContext, useEffect } from "react";
import "../css/main.css";
import Source from "../components/Source";
import { RiAddFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { SourcesContext } from "../Context/SourcesContext";
import { useAlert } from "react-alert";
import axios from "axios";

export default function () {
  const [sourcevalue, setsourcevalue] = useState("");
  const [inputclass, setinputclass] = useState(false);
  const { srcs } = useContext(SourcesContext);
  const [sources, setsources] = srcs;

  const handleinput = (e) => {
    setsourcevalue(e.target.value);
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/auth/source").then((response) => {
      let aux = [];
      for (let i = 0; i < response.data.data.length; i++) {
        aux.push(response.data.data[i].sender_id);
      }
      setsources(aux)
    });
  }, []);
  //found check if the entered source already exits
  const found = () => {
    for (let i = 0; i < sources.length; i++) {
      if (sources[i] == sourcevalue) {
        return true;
      }
    }
    return false;
  };
  const handlebutton = async () => {
    if (found()) {
      setinputclass(true);
      setsourcevalue("");
      await new Promise((r) => setTimeout(r, 1500));
      setinputclass(false);
    } else {
      if (sourcevalue != "") {
        const sender_id = sourcevalue;
        const data = { sender_id };
        axios.post("http://127.0.0.1:8000/api/auth/createSource", data)
        setsources((oldArray) => [...oldArray, sourcevalue]);
        setsourcevalue("");
      }
    }
  };
  return (
    <div className="container">
      <div className="addsourcetop">
        <FaUserAlt className="addicon" size="24px" />
        <input
          type="text"
          value={sourcevalue}
          className={!inputclass ? "sourceinput" : "errorinput"}
          onChange={handleinput}
          placeholder={!inputclass ? "Add Source" : "Source already exists"}
        />
        <RiAddFill className="addicon" size="30px" onClick={handlebutton} />
      </div>
      <div className="addsourcebottom">
        {sources.map((source) => {
          return <Source sourcevalue={source} />;
        })}
      </div>
    </div>
  );
}
