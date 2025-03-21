import React, { useState } from "react";
import { Blockchain_backend } from "../../declarations/Blockchain_backend";
function App() {
    const [data, setData] = useState("");
    const [message, setMessage] = useState("");
    const [fetchedData, setFetchedData] = useState("");
    const handleStore = async () => {
        const result = await Blockchain_backend.store_data(data);
        setMessage(result);
    };
    const handleRetrieve = async () => {
        const result = await Blockchain_backend.get_data();
        setFetchedData(result);
    };
    return (<div className="container">
      <h1>🔐 Personal Data Vault</h1>
      <textarea rows="4" cols="50" placeholder="Enter sensitive data..." value={data} onChange={(e) => setData(e.target.value)}></textarea>
      <div>
        <button onClick={handleStore}>Store Data</button>
        <button onClick={handleRetrieve}>Retrieve Data</button>
      </div>
      <p>{message}</p>
      <h3>Retrieved Data:</h3>
      <p>{fetchedData}</p>
    </div>);
}
export default App;
