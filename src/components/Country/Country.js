import React, { useState, useEffect } from "react";
import "./Country.css";
import { Panel, Form} from "rsuite";
import Axios from "axios";

const Country = ({ handleCountrySelect }) => {
  const [fetchedCountries, setFetchedCountries] = useState();

  const url = "https://covid19.mathdro.id/api";
  const fetchCountries = async () => {
    try {
      const {
        data: { countries },
      } = await Axios.get(`${url}/countries`);

      setFetchedCountries(countries.map((country) => country.name));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="Country">
      <Panel bordered shaded>
        <h5>Live</h5>
        <hr></hr>
        <h5>Stats Overview</h5>

        <Form>
          <select
            
            onChange={(event) => handleCountrySelect(event.target.value)}
          >
         
            <option value="">Global</option>
            {fetchedCountries &&
              fetchedCountries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </Form>
      </Panel>
    </div>
  );
};

export default Country;
