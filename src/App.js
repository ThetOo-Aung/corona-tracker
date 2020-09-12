import React, { useState, useEffect } from "react";
import "./App.css";
import Country from "./components/Country/Country";
import Card from "./components/Card/Card";
import Chart from "./components/Chart/Chart";
import "rsuite/dist/styles/rsuite-default.css";
import headPng from './img/image.png'

import { fetchData } from "./api.js";
import HomeNav from "./components/HomeNav";
import { Row, Grid, Col } from "rsuite";

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
    <div className="App">
      <HomeNav></HomeNav>
      <div className="imgedit"><img src={headPng} alt="COVID-19" /></div>
      <Grid className="gridEdit">
        <Row gutter={10}>
          <Col xs={24} sm={24} md={10} lg={6}>
            <Country handleCountrySelect={handleCountrySelect}></Country>
          </Col>
          <Col xs={24} sm={24} md={14} lg={18}>
            {" "}
            {data && <Card data={data}></Card>}{" "}
          </Col>
        </Row>
      </Grid>

      {data && <Chart data={data} country={country}></Chart>}
    </div>
  );
}

export default App;
