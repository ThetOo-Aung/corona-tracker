import React, { useEffect, useState } from "react";
import "./Chart.css";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState();

  useEffect(() => {
    const fetchApi = async() => {
      setDailyData(await fetchDailyData());
    }
    fetchApi();
  },[]);

  const barChart = () => {
    return confirmed ? (
      <Bar
        data={{
          labels: ["Infected", "Recovery", "Deaths"],
          datasets: [
            {
              label: "People",
              data: [confirmed.value, recovered.value, deaths.value],
              fill: true,
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
            },
          ],
        }}
      />
    ) : (
      "null"
    );
  };

  const lineChart = () => {
    return dailyData ? <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets:[
          {
            label:"Infected",
            data: dailyData.map(({confirmed}) => confirmed),
            borderColor: "rgba(255,0,0,0.5)",
            backgroundColor:"rgba(255,0,0,0.2)"
            
          },{
            label:"Deaths",
            data: dailyData.map(({deaths}) => deaths),
            borderColor: " rgba(53, 53, 53,0.7)",
            backgroundColor: "rgba(196, 196, 196, 0.459)",
            fill: true,
          }
          ],
      }}
    
     /> : "null"
    
    
  };

  return <div className="Chart chart-container">
    {country ? barChart() : lineChart()}
    
  </div>;
};

export default Chart;
