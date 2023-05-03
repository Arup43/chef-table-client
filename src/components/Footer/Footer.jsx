import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light footer py-5">
      <div className="container py-5 d-flex justify-content-between footer-container">
        <div>
          <h1>Newsletter</h1>
          <p>Subscribe to our mailing list</p>
          <div className="d-flex align-items-center mt-4 news-letter">
            <input
              className="subscribe"
              type="email"
              placeholder="Your email address"
            ></input>
            <button className="btn btn-danger sub-btn">Subscribe</button>
          </div>
        </div>

        <div className="contact-us">
          <h1 className="mb-4">Contact Us</h1>
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
