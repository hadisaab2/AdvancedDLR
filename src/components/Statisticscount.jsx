import React from "react";
import CountUp from "react-countup";
import { RiMessage3Fill } from "react-icons/ri";
import { ImBlocked } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { DatePicker, Select } from "antd";
const { Option } = Select;

export default function () {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div className="statisticscount">
      <div className="statisticstotalsms">
        <div className="totalcountdiv">
          <span className="totalsms">Total SMS</span>
          <CountUp end={28021} duration={1} className="totalcount" />
        </div>
        <div className="iconcirclediv">
          <div className="iconcircle">
            <RiMessage3Fill size="28px" className="totalsmsicon" />
          </div>
        </div>
      </div>
      <div className="statisticstotalfake">
        <div className="totalcountdiv">
          <span className="totalsms">Total Fake</span>
          <CountUp end={10000} duration={1} className="totalcount" />
        </div>
        <div className="iconcirclediv">
          <div className="iconcircle">
            <ImBlocked size="28px" className="totalsmsicon" />
          </div>
        </div>
      </div>
      <div className="statisticstotalvendors">
        <div className="totalcountdiv">
          <span className="totalsms">Total Vendors</span>
          <CountUp end={20} duration={1} className="totalcount" />
        </div>
        <div className="iconcirclediv">
          <div className="iconcircle">
            <FaUsers size="28px" className="totalsmsicon" />
          </div>
        </div>
      </div>

      <div className="date">
        <DatePicker onChange={onChange} picker="year" className="yearpicker" />
        <Select
          showSearch
          placeholder="Select Month"
          optionFilterProp="children"
          onChange={onChange}
          className="selectmonth"

        >
          <Option value="June">June</Option>
          <Option value="July">July</Option>
          <Option value="May">May</Option>
        </Select>
        <Select
          showSearch
          placeholder="Select Day"
          optionFilterProp="children"
          onChange={onChange}
          className="selectmonth"

        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
      </div>
      
    </div>
  );
}
