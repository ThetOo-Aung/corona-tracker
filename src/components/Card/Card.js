import React from "react";
import "./Card.css";
import { Panel, Divider } from "rsuite";
import CountUp from "react-countup";

// last Update not included
const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <div className="Card">
      {confirmed && recovered && deaths && (
        <div className="cardcontainer">
          <Panel bordered shaded className="editCard" style={{backgroundColor:" rgb(255,245,245)"}}>
            <h4>
              {confirmed.value && (
                <CountUp
                  start={1000}
                  end={confirmed.value}
                  duration={2}
                ></CountUp>
              )}
            </h4>
            
            <Divider>{new Date(lastUpdate).toDateString()}</Divider>
            <h6  style={{backgroundColor: "rgb(254,215,215)"}}>Confirmed</h6>
          </Panel>

          <Panel bordered shaded className="editCard" style={{backgroundColor:"rgb(240,255,244)"}}>
            <h4>
              {recovered.value && (
                <CountUp
                  start={10000}
                  end={recovered.value}
                  duration={3}
                ></CountUp>
              )}
            </h4>
            <Divider>{new Date(lastUpdate).toDateString()}</Divider>
            <h6  style={{backgroundColor: "rgb(198,246,213)"}}>Recovered</h6>
          </Panel>

          <Panel bordered shaded className="editCard" style={{backgroundColor:"rgb(237,242,247)"}}>
            <h4>
              {deaths.value && (
                <CountUp
                  start={10000}
                  end={deaths.value}
                  duration={3}
                ></CountUp>
              )}
            </h4>
            <Divider>{new Date(lastUpdate).toDateString()}</Divider>
            <h6  style={{backgroundColor: "rgb(226,232,240)"}}>Deaths</h6>
          </Panel>
        </div>
      )}
    </div>
  );
};

export default Card;
