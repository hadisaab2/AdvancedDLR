import React, { useContext } from "react";
import "../css/main.css";
import "antd/dist/antd.css";
import { Select, DatePicker, Space } from "antd";
import moment from "moment";
import Table from "../components/Table";
import axios from "axios";
import Senderstats from "../components/Senderstats";
import { SourcesContext } from "../Context/SourcesContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const { RangePicker } = DatePicker;

const { Option } = Select;

export default function () {
  const [senderid, setsenderid] = React.useState("");
  const [destination, setdestination] = React.useState("");
  const [startdate, setstartdate] = React.useState();
  const [enddate, setenddate] = React.useState();
  const [data, setdata] = React.useState([]);
  const [showtable, setshowtable] = React.useState(false);
  const { clickedstate, showstats } = useContext(SourcesContext);
  const [clickedsender, setclickedsender] = clickedstate;

  const handleSearch = () => {
    const data = { senderid, destination, startdate, enddate };
    axios.post("http://127.0.0.1:8000/api/auth/cdr", data).then((response) => {
      let aux = [];
      for (let i = 0; i < response.data.length; i++) {
        let object = response.data[i];
        Object.assign(object, { id: i });
        aux.push(object);
      }
      console.log(aux);
      setdata(aux);
    });
    setshowtable(true);
  };

  const handleStartChange = (date) => {
    if (!!date) {
      setstartdate(date["_d"]);
    }
  };
  const handleEndChange = (date) => {
    if (!!date) {
      setenddate(date["_d"]);
    }
  };

  function onsourceChange(value) {
    setsenderid(value);
  }
  function ondestinationChange(value) {
    setdestination(value);
  }

  return (
    <>
      <Sidebar />
      <div className="maindiv">
        <Header />
        <div className="searchcontainer">
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onsourceChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className="sourcesearch"
          >
            <Option value="9">9</Option>
            <Option value="Google">Google</Option>
            <Option value="Facebook">Facebook</Option>
          </Select>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={ondestinationChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className="destsearch"
          >
            <Option value="hi">hi</Option>
            <Option value="lucy">Google</Option>
            <Option value="tom">Facebook</Option>
          </Select>
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            className="datepicker"
            placeholder="Start Date"
            onChange={handleStartChange}
          />
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            className="datepicker"
            placeholder="End Date"
            onChange={handleEndChange}
          />
          <button className="searchbutton" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="stattablediv">
          <Table data={data} />
        </div>
      </div>
    </>
  );
}
