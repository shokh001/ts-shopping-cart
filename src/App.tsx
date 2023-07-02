import './App.css';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList />
      <ProductForm />
      <Cart />
    </div>
  );
}

export default App;
