import React, { useState, useEffect } from "react";
import "./App.css";
import Country from "./components/Country/Country";
import Card from "./components/Card/Card";
import Chart from "./components/Chart/Chart";
import "rsuite/dist/styles/rsuite-default.css";
import { Grid, Row, Col } from "rsuite";
import { fetchData } from "./api.js";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState();

  const handleCountrySelect = async (resCountry) => {
    const fetchCountryData = await fetchData(resCountry);
    console.log(resCountry);
    console.log(fetchCountryData);
    setData(fetchCountryData);
    setCountry(resCountry);
  };

  useEffect(() => {
    const fetchApi = async () => {
      setData(await fetchData());
    };

    fetchApi();
  }, []);

  return (
    <div className="App ">
      <Grid>
        <Row className="show-grid">
          <Col md={6} sm={12}>
            <Country handleCountrySelect={handleCountrySelect}></Country>
          </Col>
          <Col md={6} sm={12}>
            {data && <Card data={data}></Card>}
          </Col>
        </Row>
      </Grid>

      <Chart></Chart>
    </div>
  );
}

export default App;
