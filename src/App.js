
import './App.css';
import{BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {Navbar} from './components/navbar.jsx';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import {} from './components/navbar.css'
import { ShopContextProvider } from './context/shop-context';
import { About } from './pages/about/about.jsx';
import {} from './pages/about/about.css'
import { Checkout } from './pages/checkout/checkout';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/about" element={<About />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
