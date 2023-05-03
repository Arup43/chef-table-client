/* eslint-disable react/prop-types */
import "./Chef.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={chef.image} />
      <Card.Body>
        <Card.Title className="chef-name mb-4">{chef.name}</Card.Title>
        <Card.Text>
          <p>Years of experience: {chef.years_of_experience}</p>
          <p>Number of recipes: {chef.numbers_of_recipes}</p>
          <p>Likes: {chef.likes}</p>
        </Card.Text>
        <Link to={`chef-recipes/${chef.id}`}><Button variant="danger">View Recipes</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Chef;
