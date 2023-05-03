import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="text-center my-5 py-5">
      <h1 className="mb-4">What Customers Are Saying About Us</h1>
      <p>We pride ourselves on what our happy clients say.</p>
      <div className="reviews d-flex justify-content-between align-items-center my-5 py-4">
        <div className="review">
          <div className="img-container">
            <img className="img-fluid" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User" />
          </div>
          <p>
            “Many thanks for the beautiful food and wonderful service. Your food
            really made the event special. I appreciate your time and effort!”
          </p>
          <h3>Nowrin Nira</h3>
        </div>
        <div className="review">
          <div className="img-container">
            <img className="img-fluid" src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="User" />
          </div>
          <p>
          “Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party”
          </p>
          <h3>Bappa Raj</h3>
        </div>
        <div className="review">
          <div className="img-container">
            <img className="img-fluid" src="https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png" alt="User" />
          </div>
          <p>
          “Thank you for making my parents’ anniversary so special. The food was amazing, as was the service. A perfect evening!”
          </p>
          <h3>Joshim Uddin</h3>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
