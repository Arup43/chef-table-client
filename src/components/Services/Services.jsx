import "./Services.css";
import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <div className="mb-5 pb-5">
      <h1 className="text-center">Our Services</h1>
      <div className="services mt-4 pt-4">
        <div className="service">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://craftworldevents.com/wp-content/uploads/2022/10/Corporate-Events.jpg"
            />
            <Card.Body className="service-body">
              <Card.Title>Corporate Events</Card.Title>
              <Card.Text>You can book us for your corporate events.</Card.Text>
              <button className="more-info">More Info</button>
            </Card.Body>
          </Card>
        </div>
        <div className="service">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://www.weddingchicks.com/wp-content/uploads/2020/04/met-gala-inspirational-shooting-saint-and-queen-1.jpg"
            />
            <Card.Body className="service-body">
              <Card.Title>Weddings and Galas</Card.Title>
              <Card.Text>Have a wedding program ahead? We are here for you!</Card.Text>
              <button className="more-info">More Info</button>
            </Card.Body>
          </Card>
        </div>
        <div className="service">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/id/951132442/photo/mastering-new-culinary-heights.jpg?s=612x612&w=0&k=20&c=96kg8oMcQ1VlItWhwRI69aAO_CWiZjHvNuvNYPiE59M="
            />
            <Card.Body className="service-body">
              <Card.Title>Special Events</Card.Title>
              <Card.Text>Some special events? Do not worry, we got you!</Card.Text>
              <button className="more-info">More Info</button>
            </Card.Body>
          </Card>
        </div>
        <div className="service">
          <Card style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-photo/professional-chef-preparing-food-kitchen_23-2149727977.jpg?w=2000"
            />
            <Card.Body className="service-body">
              <Card.Title>Customized Service</Card.Title>
              <Card.Text>We also have customized services. Contact Us if you need it.</Card.Text>
              <button className="more-info">More Info</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
