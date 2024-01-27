import "./App.css";
import Countries from "./Countries/Countries";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});

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
      <Countries data={data} />
    </div>
  );
}

export default App;

