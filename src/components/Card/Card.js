import React from "react";
import "./Card.css";
import { Panel, Grid, Row, Col } from "rsuite";
import CountUp from "react-countup";


// last Update not included
const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <div className="Card">
      {confirmed && recovered && deaths && (
        <Grid>
          <Row className="show-grid">
            <Col md={6} sm={12}>
              <Panel bordered header="Confirmed" shaded>
                <hr></hr>
                <h5>Stats Overview</h5>
                <h6>
                  {confirmed.value && (
                    <CountUp
                      start={0}
                      end={confirmed.value}
                      duration={3}
                    ></CountUp>
                  )}
                </h6>
              </Panel>
            </Col>
            <Col md={6} sm={12}>
              <Panel bordered header="Recovered" shaded>
                <hr></hr>
                <h5>Stats Overview</h5>
                <h6>
                  {recovered.value && (
                    <CountUp
                      start={0}
                      end={recovered.value}
                      duration={3}
                    ></CountUp>
                  )}
                </h6>
              </Panel>
            </Col>
            <Col md={6} sm={12}>
              <Panel bordered header="Deaths" shaded>
                <hr></hr>
                <h5>Stats Overview</h5>
                <h6>
                  {deaths.value && (
                    <CountUp
                      start={0}
                      end={deaths.value}
                      duration={3}
                    ></CountUp>
                  )}
                </h6>
              </Panel>
            </Col>
          </Row>
        </Grid>
      )}
    </div>
  );
};

export default Card;
