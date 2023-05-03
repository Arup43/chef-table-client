/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const handleAddToFavorites = () => {
    setFavorite(true);
    toast.success('Added to your favorites!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={recipe?.image} />
      <Card.Body>
        <Card.Title>{recipe?.name}</Card.Title>
        <Card.Text>
          <span className="bold">Ingredients:</span>{" "}
          {recipe?.ingredients.join(", ")}
        </Card.Text>
        <Card.Text>
          <span className="bold">Cooking Method:</span> {recipe?.cooking_method}
          <p className="mt-3">
            <span className="bold">Rating: </span>
            {recipe?.rating}
          </p>
        </Card.Text>
        <Button
          disabled={favorite}
          onClick={handleAddToFavorites}
          variant="danger"
        >
          Add to favorite!
        </Button>
      </Card.Body>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Card>
  );
};

export default Recipe;
