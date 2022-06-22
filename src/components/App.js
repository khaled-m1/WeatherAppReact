import Search from "./Search";
import Header from "./Header";
import Card from "./Card";
import BtnSearch from "./BtnSearch";
import Loding from "./Loding";
import { useState, useEffect } from "react";

function App() {
  const [caountryName, setcaountryName] = useState("");
  const [searchcaountry, setSearchcaountry] = useState("Caountry Name");
  const [temperature, setTemperature] = useState(0);
  const [loding, setLoading] = useState(true);

  // functions to get
  const onChange = (e) => {
    setcaountryName(e.target.value);
  };
  const onClick = async (e) => {
    if (caountryName == "") {
      alert("write name country :)");
      return;
    }
    setLoading(true);
    const request = await fetch(
      "https://goweather.herokuapp.com/weather/" + caountryName
    );
    const data = await request.json();
    setLoading(false);
    if (request.status !== 200) {
      alert("Country not found :(");
      return;
    }
    setTemperature(data.temperature);
    setSearchcaountry(caountryName);
    setcaountryName("");
  };
  return (
    <>
      <Header />
      <div className="container">
        <Search caountryName={caountryName} onChange={onChange} />
        <BtnSearch onClick={onClick} />

        {loding ? (
          <Loding />
        ) : (
          <>
            <Card searchcaountry={searchcaountry} temperature={temperature} />
          </>
        )}
      </div>
    </>
  );
}
export default App;
