import React, { useState } from "react";
import CountUp from "react-countup";
import { MdAutoGraph } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function (props) {
  const [percentage, setpercentage] = useState(0);
  const [endvalue, setendvalue] = useState(0);
  const [firstload, setfirstload] = useState(true);


  useState(async () => {
    await new Promise((r) => setTimeout(r, 50));
    setpercentage(props.clickedsender.percentage);
    setfirstload(false)
  });
  return (
    <div className="senderstatsdiv">
      <div className="clickedtitlediv">
        <span className="clickedtitle">{props.clickedsender.sender_id}</span>
      </div>
      <div className="totalsourcesmsdiv">
        <MdAutoGraph size="40px" className="counticon" />
        <div className="countdiv">
          <CountUp
            end={props.clickedsender.totalsms}
            duration={1}
            className="count"
          />
          <span className="sms">sms</span>
        </div>
      </div>
      <div className="piediv">
        <div className="fakesmspercdiv"><span className="fakesmsperc"> Fake SMS Percentage</span></div>
        <CircularProgressbar
          value={firstload ? percentage :props.clickedsender.percentage}
          text={`${firstload ? percentage :props.clickedsender.percentage}%`}
          counterClockwise
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "14px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 2,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(43, 88, 92)`,
            textColor: "rgba(43, 88, 92)",
            trailColor: "#F1F4F9",
            backgroundColor: "#3e98c7",
          })}
          className="pie"
        />
        <div className="legenddiv">
          <div className="legendcolor"></div>
          <span className="legendspan">Fake Sms</span>
        </div>
      </div>
    </div>
  );
}
