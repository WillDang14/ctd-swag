import { useState } from 'react';

import ctdLogo from './assets/mono-blue-logo.svg';

import './App.css';

function App() {
  const [testList, setTestList] = useState([1, 2, 3]);

  return (
    <>
      <div className="coming-soon">
        <h1>CTD Swag</h1>

        <div style={{ height: 100, width: 100 }}>
          <img src={ctdLogo} alt="Code The Dream Logo" />
        </div>

        <h2>Coming Soon ...</h2>

        <ul>
          {testList.map((item) => (
            <li key={{ item }}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
