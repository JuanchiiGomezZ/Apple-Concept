import { Routes, Route, BrowserRouter } from "react-router-dom";

/* Components */
import NavBar from "./components/Global/NavBar/NavBar";
import CartContainer from "./components/Global/NavBar/CartContainerNav";
import Footer from "./components/Global/Footer/Footer";
import PageNotFound from "./components/Global/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/Products/ItemDetailContainer";
import ItemsListContainer from "./components/Products/ItemsListContainer";
import Cart from "./components/Global/Cart/Cart";
import CartProvider from "./components/Global/Cart/CartContext";

import './utils/firebaseConfig'

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <CartContainer />
          <Routes>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Shop/:categoryId" element={<ItemsListContainer />}></Route>
            <Route path="/Shop/:categoryId/:productId" element={<ItemDetailContainer />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
