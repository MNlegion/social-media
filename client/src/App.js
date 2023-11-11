import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    // Test API call
    axios.get('/api/test')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Hello, Social Media App!</h1>
    </div>
  );
}

export default App;
