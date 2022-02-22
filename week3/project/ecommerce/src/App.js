import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoriteContextProvider } from "./context/FavoritesContext";
import FavoritesItem from "./pages/FavoritesItems";

function App() {
  return (
    <FavoriteContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<FavoritesItem />} />
        </Routes>
      </Router>
    </FavoriteContextProvider>
  );
}

export default App;
