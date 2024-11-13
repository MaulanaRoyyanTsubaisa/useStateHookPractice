import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [interval, setIntervalid] = useState(null);
  const getTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  const startAutoUpdate = () => {
    if (!interval) {
      const id = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      setIntervalid(id);
    }
  };

  const stopInterval = () => {
    if (interval) {
      clearInterval(interval);
      setIntervalid(null);
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{time}</h1>
      <button onClick={getTime}>klik</button>

      <button onClick={stopInterval}>stop Auto Update</button>
      <button onClick={startAutoUpdate}>start Auto Update</button>
    </div>
  );
}
export default App;
