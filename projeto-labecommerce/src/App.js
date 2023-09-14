import Filters from './Components/Filters/Filters.js';
import Body from './Components/ProductList/Home/Body.js';
import Footer from './Components/ProductList/Home/Footer.js';
import Header from './Components/ProductList/Home/Header.js';
import Navigation from './Components/ProductList/Home/Navigation.js';
import Cart from './Components/ShoppingCart/Cart/Cart.js';

export default function App() {
  return (
    <div className='App'>
      <Filters />
      <Body />
      <Footer />
      <Header />
      <Navigation />
      <Cart />
    </div>
  );
}
