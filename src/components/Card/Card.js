import React from "react";
import "./Card.css";
import { Panel } from "rsuite";
import CountUp from "react-countup";

// last Update not included
const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <div className="Card">
      {confirmed && recovered && deaths && (
        <div className="cardcontainer">
          <Panel bordered header="Confirmed" shaded className="editCard">
            <hr></hr>
            <h5>Stats Overview</h5>
            <h6>
              {confirmed.value && (
                <CountUp
                  start={1000000}
                  end={confirmed.value}
                  duration={3}
                ></CountUp>
              )}
            </h6>
          </Panel>

          <Panel bordered header="Recovered" shaded>
            <hr></hr>
            <h5>Stats Overview</h5>
            <h6>
              {recovered.value && (
                <CountUp
                  start={10000}
                  end={recovered.value}
                  duration={3}
                ></CountUp>
              )}
            </h6>
          </Panel>

          <Panel bordered header="Deaths" shaded>
            <hr></hr>
            <h5>Stats Overview</h5>
            <h6>
              {deaths.value && (
                <CountUp
                  start={10000}
                  end={deaths.value}
                  duration={3}
                ></CountUp>
              )}
            </h6>
          </Panel>
        </div>
      )}
    </div>
  );
};

export default Card;
