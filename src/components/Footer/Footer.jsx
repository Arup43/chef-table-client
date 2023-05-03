import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light footer py-5">
      <div className="container py-5 d-flex justify-content-between">
        <div>
          <h1>Newsletter</h1>
          <p>Subscribe to our mailing list</p>
          <div className="d-flex align-items-center mt-4">
            <input
              className="subscribe"
              type="email"
              placeholder="Your email address"
            ></input>
            <button className="btn btn-danger sub-btn">Subscribe</button>
          </div>
        </div>

        <div>
          <h1 className="mb-4 me-5 pe-5">Contact Us</h1>
          <p>1122 Banani, Dhaka-1200 </p>
          <p>Cheftable224@gmail.com</p>
          <p>Phone: +880-1870405760</p>
        </div>

        <div>
          <h1 className="mb-4">Socials</h1>
          <div className="socials">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
