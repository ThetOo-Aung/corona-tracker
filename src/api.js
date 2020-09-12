import Axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await Axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};


export const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`${url}/daily`);
    const resultSlicer = data.slice(data.length - 30);
    // console.log(resultSlicer);
    const resultData = resultSlicer.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    // console.log(resultData);
    return resultData;
  } catch (error) {
    console.log(error);
  }
};
