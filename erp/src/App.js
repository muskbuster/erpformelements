import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import OrderForm from './pages/orderform';
import Orders from './pages/orders';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Orders/>
    </div>
  );
}

export default App;
