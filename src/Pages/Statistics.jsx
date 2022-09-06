import React, { useContext } from "react";
import LineChart from "../components/LineChart";
import Senderstats from "../components/Senderstats";
import TotalSms from "../components/TotalSms";
import "../css/main.css";
import { SourcesContext } from "../Context/SourcesContext";
import Statisticscount from "../components/Statisticscount";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Statistics() {
  const { clickedstate, showstats, tablerows } = useContext(SourcesContext);
  const [clickedsender, setclickedsender] = clickedstate;
  const [rows, setrows] = tablerows;

  return (
    <>
      <Sidebar />
      <div className="maindiv">
        <Header />
        <Statisticscount />
        <div className="chartcountdiv">
          <LineChart />
          <Senderstats clickedsender={clickedsender} />
        </div>
      </div>
    </>
  );
}
