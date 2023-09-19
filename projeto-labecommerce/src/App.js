import Filters from './Components/Filters/Filters.js';
import ProductList from './Components/ProductList/ProductList.js';
import Cart from './Components/ShoppingCart/Cart/Cart.js';
import './App.css'
import Button from './Components/Button/Button.js';

export default function App() {
  const botaoRemove = 'Remover'
  return (
    <div className='App'>
      <Filters />
      <ProductList />
      <Cart />
    </div>
  );
}
