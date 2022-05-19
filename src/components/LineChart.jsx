import React, { useRef, useContext } from "react";
import "../css/main.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, getElementAtEvent } from "react-chartjs-2";
import { SourcesContext } from "../Context/SourcesContext";

var faker = require("faker");

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Fake SMS Chart",
    },
  },
  layout: {
    padding: 30,
  },
};

const labels = [
  "Microsoft",
  "Google",
  "Facebook",
  "Outlook",
  "Instagram",
  "Twitter",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Sources",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
      data: [0, 17, 8, 10, 15, 2],
      fill:true,
      backgroundColor: "rgba(255, 255, 255)",
      borderColor: "rgba(43, 88, 92)",
    },
  ],
};

export default function (props) {
  const { clickedstate, tablerows } = useContext(SourcesContext);
  const [clickedsender, setclickedsender] = clickedstate;
  const [rows, setrows] = tablerows;

  const chartRef = useRef();
  const sourceclick = (event) => {
    const element = getElementAtEvent(chartRef.current, event);
    if (element.length != 0) {
      //element[0].index brings the index of the source from 0 to number of sources-1
      const clickedelement = labels[element[0].index];
      //bring label[index] which is the name of the source
      const object = getrow(clickedelement);
      //set the clicked state object
      setclickedsender(object);
    }
  };
  //get row function bring the data of the clicked state or source on the graph
  const getrow = (element) => {
    let i = 0;
    for (; i < rows.length; i++) {
      if (rows[i].sender_id == element) {
        return rows[i];
      }
    }
  };

  return (
    <div className="linechartdiv">
      <Line
        options={options}
        data={data}
        className="linechart"
        ref={chartRef}
        onClick={sourceclick}
      />
    </div>
  );
}
