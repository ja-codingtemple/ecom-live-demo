import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: "$999", description: "High performance laptop"},
    { id: 2, name: "Phone", price: "$499", description: "Latest smartphone"},
    { id: 3, name: "Headphones", price: "$199", description: "Noise-canceling headphones"},
  ]);

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
