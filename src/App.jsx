import { useState } from 'react';

import './App.css';

import inventoryData from './assets/inventory.json';

import Header from './Header';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

// import ctdLogo from './assets/mono-blue-logo.svg';

// console.log(inventoryData); // this is a object

/* ========================================================= */

// const message = 'Coming Soon...'; //This is outside the function definition for App

// let message = 'Coming Soon...'; //This is outside the function definition for App

// setTimeout(() => {
//   message = 'We can feel it...';

//   console.log(`Updated message: ${message}`);
// }, 3000);

/* ========================================================= */
// function App() {
//   // const title = ' CTD Swag'; // This is inside the Component before the return

//   return (
//     <div className="coming-soon">
//       <h1>{title}</h1>
//       <div style={{ height: 100, width: 100 }}>
//         <img src={ctdLogo} alt="Code The Dream Logo" />
//       </div>
//       <h2>{message}</h2>
//     </div>
//   );
// }

/* ========================================================= */
function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);

  // Vi du cach su dung "Children" Props
  function promoteItem() {
    return (
      <ProductCard
        baseName="Limited Edition Tee!"
        baseDescription="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!"
      />
    );
  }

  return (
    <main>
      <Header />

      <ProductList inventory={inventory}>{promoteItem()}</ProductList>
      {/*invoking promoted item between the tags inserts the ItemCard*/}
    </main>
  );
}

/* ========================================================= */
export default App;
