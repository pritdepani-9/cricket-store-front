import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/productDetails';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" reverseOrder={false} />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
