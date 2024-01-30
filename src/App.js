import "./App.css";
import Countries from "./Countries/Countries";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState(null);
  const handleChange = (e) => setValue(e.target.value);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search for countries"
          onChange={handleChange}
          className="text"
        ></input>
      </div>

      <Countries
        data={
          value
            ? data.filter((item) =>
                item.name.common.toLowerCase().includes(value.toLowerCase())
              )
            : data
        }
      />
    </div>
  );
}

export default App;
