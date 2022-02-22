import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Nav from "../components/Nav";

function ProductDetails() {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`,
  );

  const { title, description, image } = data;

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    <h2> Something went wrong finding the product. Please try again!</h2>;
  } else
    return (
      <>
        <Nav product={title} />
        <div>
          <div className="product-details">
            <p>{description}</p>
            <div className="image-div">
              <img src={image} />
            </div>
          </div>
        </div>
      </>
    );
}

export default ProductDetails;
