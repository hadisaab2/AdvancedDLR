import React from "react";
import "../css/main.css";
import sms from "../assets/sms.svg";
import { DiAngularSimple } from "react-icons/di";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { FaKey } from "react-icons/fa";

export default function Login() {
  return (
    <div className="loginmaindiv">
      <div className="loginleft">
        <div className="logintitlediv">
          <DiAngularSimple className="loginADLRlogo" size="55px" />
          <span className="logintitle">dvanced</span>
          <span className="logintitledlr">DLR</span>
        </div>
        <img src={sms} className="smsimage" />
      </div>
      <div className="loginright">
          <div className="logindiv">
              <span className="loginspan">Log in to AdvancedDLR</span>
              <span className="passwordspan">Welcome back! login with your data that you entered during registration</span>

        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" style={{color:"#2b585c"}} />}
          className="username"
        />
        <Input
          placeholder="Enter your password"
          prefix={<FaKey className="site-form-item-icon" style={{color:"#2b585c"}}  />}
          className="password"
        />
        <button className="loginbutton">LOGIN</button>
        </div>
      </div>
    </div>
  )
}
