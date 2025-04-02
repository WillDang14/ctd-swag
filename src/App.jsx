import { useState } from 'react';

import ctdLogo from './assets/mono-blue-logo.svg';

import './App.css';

/* ========================================================= */
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

/* ========================================================= */
// function declarations
// function Component1() {
//   return <p>Component1 uses a function declaration</p>;
// }

// // function expressions
// const Component2 = function () {
//   return <p>Component2 uses a function expression</p>;
// };

// // arrow functions
// const Component3 = () => {
//   return <p>Component3 uses an arrow function</p>;
// };

// // arrow function with implicit return
// const Component4 = () => (
//   <p>Component4 uses an arrow function with implicit return</p>
// );

// function App() {
//   return (
//     <>
//       <Component1 />
//       <Component2 />
//       <Component3 />
//       <Component4 />
//     </>
//   );
// }

/* ========================================================= */
export default App;
