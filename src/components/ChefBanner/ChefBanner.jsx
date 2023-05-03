/* eslint-disable react/prop-types */
import "./ChefBanner.css";
import LazyLoad from "react-lazy-load";

const ChefBanner = ({ chef }) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="pic">
          <LazyLoad width={700}>
            <img className="img-fluid" src={chef?.image} alt="" />
          </LazyLoad>
        </div>
        <div className="des ms-5">
          <h1 className="mb-4">{chef?.name}</h1>
          <p>
            <span className="bold">short bio/description:</span> {chef?.bio}
          </p>
          <p>
            <span className="bold">Likes:</span> {chef?.likes}
          </p>
          <p>
            <span className="bold">Number of recipes:</span>{" "}
            {chef?.numbers_of_recipes}
          </p>
          <p>
            <span className="bold">Years of experience:</span>{" "}
            {chef?.years_of_experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
