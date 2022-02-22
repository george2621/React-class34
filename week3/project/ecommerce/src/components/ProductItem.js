import React from "react";
import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import FavoriteContext from "../context/FavoritesContext";
import { useContext } from "react";

const ProductItem = ({ productName, productImage, id }) => {
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext);
  let isFav = isFavorite(id);

  return (
    <div className="product">
      <Link className="product-link" to={`/product/${id}`}>
        <div
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
        >
          <img
            className="favorite-icon"
            src={isFav ? heartSolid : heartRegular}
            alt="favorite item"
          />
        </div>
        <img className="product-image" src={productImage} alt={productName} />
        {productName}
      </Link>
    </div>
  );
};
export default ProductItem;
