import ProductItem from "../components/ProductItem";
import { useContext, useState, useEffect } from "react";
import FavoriteContext from "../context/FavoritesContext";
import Nav from "../components/Nav";

const FavoritesItems = () => {
  const { favorites } = useContext(FavoriteContext);
  const [favoriteList, setFavoriteList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getFavorites() {
      try {
        const fetches = favorites.map(async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
          );
          return await response.json();
        });

        const results = await Promise.all(fetches);
        setLoading(false);
        setFavoriteList(results);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    getFavorites();
  }, [favorites]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoading && !error && favoriteList.length === 0) {
    return <h1>There are no products in favorite</h1>;
  }

  if (error) {
    return <h1>Faild to fetch data</h1>;
  }

  return (
    <>
      <Nav product={"Favorites"} />
      <div className="all-products">
        {favoriteList.map((product, index) => (
          <ProductItem
            key={index}
            id={product.id}
            productName={product.title}
            productImage={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default FavoritesItems;
