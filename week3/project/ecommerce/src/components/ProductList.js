import ProductItem from "./ProductItem";
import useFetch from "../hooks/useFetch";

const ProductList = ({ selectedCategory }) => {
  let url = "https://fakestoreapi.com/products";

  if (selectedCategory) {
    url += `/category/${selectedCategory}`;
  }

  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <h2>loading...</h2>;
  } else if (error) {
    return <h2>{error}</h2>;
  } else
    return (
      <div className="all-products">
        {data.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            productName={product.title}
            productImage={product.image}
          />
        ))}
      </div>
    );
};

export default ProductList;
