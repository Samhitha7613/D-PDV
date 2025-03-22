import React, { useState } from "react";

// ✅ CORRECT import for Dfinity backend actor
import { blockchain_backend } from "@backend";

import "./App.css"; // your CSS file for styling

function App() {
  const [data, setData] = useState(""); // user input data
  const [message, setMessage] = useState(""); // status message
  const [fetchedData, setFetchedData] = useState(""); // data retrieved from backend

  const handleStore = async () => {
    console.log("Attempting to store data:", data);
    try {
      const result = await blockchain_backend.store_data(data);
      console.log("Backend response:", result);
      setMessage(result); // should return: "✅ Data securely stored..."
    } catch (err) {
      console.error("Error storing data:", err);
      setMessage("❌ Failed to store data!");
    }
  };

  const handleRetrieve = async () => {
    console.log("Attempting to retrieve data");
    try {
      const result = await blockchain_backend.get_data();
      console.log("Fetched data:", result);
      setFetchedData(result); // display retrieved string
    } catch (err) {
      console.error("Error retrieving data:", err);
      setFetchedData("❌ Failed to retrieve data!");
    }
  };

  return (
    <div className="vault-dashboard">
      <h1>🔐 Personal Data Vault</h1>

      <textarea
        rows="4"
        cols="50"
        placeholder="Enter sensitive data..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>

      <div className="actions">
        <button onClick={handleStore}>💾 Store Data</button>
        <button onClick={handleRetrieve}>📤 Retrieve Data</button>
      </div>

      {message && <p className="message">{message}</p>}

      <h3>Retrieved Data:</h3>
      <p className="retrieved">{fetchedData}</p>
    </div>
  );
}

export default App;

