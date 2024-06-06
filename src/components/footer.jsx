import PropTypes from "prop-types";
import "./footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <footer className="footer-container">
        <div className="footer-container-child" />
        <div className="container">
          <div className="wrapper">
            <div className="block-wrapper">
              <div className="block">
                <div className="content">
                  <img
                    className="content-child"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                  <h2 className="bugbuster1">Bugbuster</h2>
                </div>
                <div className="lorem-ipsum-dolor9">{`Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque `}</div>
              </div>
            </div>
            <div className="footer-navigation">
              <b className="pages">Pages</b>
              <div className="navigation-links">
                <div className="home1">Home</div>
                <div className="about-us2">About Us</div>
                <div className="products2">Products</div>
                <div className="blog2">Blog</div>
              </div>
            </div>
            <div className="contact">
              <b className="contact-us1">Contact Us</b>
              <div className="contact-details">
                <div className="contact-info">
                  <div className="contact-options">
                    <img
                      className="call-icon"
                      loading="lazy"
                      alt=""
                      src="/call.svg"
                    />
                    <div className="contact-values">+21 5421 9081</div>
                  </div>
                  <div className="contact-options1">
                    <img
                      className="location-icon"
                      loading="lazy"
                      alt=""
                      src="/location.svg"
                    />
                    <div className="black-wellburn-swiss">
                      4322 Black Well,Burn Swiss
                    </div>
                  </div>
                  <div className="contact-options2">
                    <img
                      className="message-icon"
                      loading="lazy"
                      alt=""
                      src="/message.svg"
                    />
                    <div className="bugbusterdomaincom">
                      bugbuster@domain.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="links">
              <b className="helpful-links">Helpful Links</b>
              <div className="legal-links">
                <div className="term-and-condition">Term and Condition</div>
                <div className="privacy-policy">Privacy Policy</div>
              </div>
            </div>
            <div className="map">
              <b className="maps">Maps</b>
              <img
                className="map-area-icon"
                loading="lazy"
                alt=""
                src="/rectangle-44@2x.png"
              />
            </div>
          </div>
          <img
            className="footer-graphic-icon"
            loading="lazy"
            alt=""
            src="/vector-8.svg"
          />
          <div className="copyright">
            <b className="copyright-2024-bugbuster">
              copyright 2024 @bugbuster All Right Reserved
            </b>
            <div className="footer-policy">
              <div className="term-of-use">Term Of Use</div>
              <div className="privacy-policy1">Privacy Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
