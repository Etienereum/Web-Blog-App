// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (

//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = (props) => {
  useEffect(() => {
    axios.get("/api/hello").then((res) => setState(res.data));
  }, []);

  const [state, setState] = useState("");

  return (
    <div>
      Home
      <p>{state}</p>
    </div>
  );
};

export default App;
