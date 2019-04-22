import React from 'react';
import { render } from "react-dom";
import Demo from './demo';


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Demo />
  </div>
);

render(<App />, document.getElementById("root"));
