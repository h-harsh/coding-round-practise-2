import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import {ProductsPage} from './Pages/Products'
import { CartPage } from './Pages/Cart';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        <Link to="/" > <h2>Products</h2></Link>
        <Link to="/cart" > <h2>Cart</h2></Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </div>
  );
}

export default App;
