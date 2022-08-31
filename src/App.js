/* Components */
import NavBar from './components/NavBar/NavBar';
import CartContainer from './components/NavBar/CartContainer';
import Categories from './components/Categories/Categories';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';

import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
  return (
    <>
      <NavBar/>
      <CartContainer/>
      <Banner/>
      <ItemCount/>
      <Categories/>
      <Banner2/>
      <Footer/>
    </>
  );
}

export default App;

