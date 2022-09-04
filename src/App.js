import { Routes, Route} from "react-router-dom";
/* Components */
import NavBar from './components/Global/NavBar/NavBar';
import CartContainer from './components/Global/NavBar/CartContainer';
import Footer from './components/Global/Footer/Footer';
import PageNotFound from "./components/Global/PageNotFound/PageNotFound";
import Home from './components/Home/Home';
import Iphone from './components/Iphone/Iphone';


/* import ItemCount from './components/ItemCount/ItemCount'; */

const App = () => {
  return (
    <>
      <NavBar/>
      <CartContainer/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Shop/iPhone' element={<Iphone/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

