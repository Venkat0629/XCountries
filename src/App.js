import "./App.css";
import Countries from "./Countries/Countries";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search for countries"
          value={searchTerm}
          onChange={handleSearch}
          className="text"
        />
      </div>
      {data.length > 0 ? <Countries data={filteredData} /> : <p>Loading...</p>}
    </div>
  );
}
export default App;
