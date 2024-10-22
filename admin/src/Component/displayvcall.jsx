import React, { useState } from 'react';
import VideoCall from './VideoCall';

function App() {
  const [identity, setIdentity] = useState('');

  const handleLogin = () => {
    if (identity) {
      // Start video call
      return <VideoCall identity={identity} />;
    }
  };

  return (
    <div className="App">
      <h1>Patient-Doctor Video Call</h1>
      <div>
        <input
          type="text"
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
          placeholder="Enter your name (Patient or Doctor)"
        />
        <button onClick={handleLogin}>Start Video Call</button>
      </div>
    </div>
  );
}

export default App;
