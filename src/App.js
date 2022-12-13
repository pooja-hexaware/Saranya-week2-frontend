import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './menu/menu';
import Restaurant from './restaurant/restaurant';
import Cart from './cart/cart';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path = "/" element={<Restaurant />} />
        <Route path='menu' element={<Menu />}/>
        <Route path="cart" element = {<Cart />}/>

        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
