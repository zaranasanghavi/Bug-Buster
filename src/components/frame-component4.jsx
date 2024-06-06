import PropTypes from "prop-types";
import "./frame-component4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`homepage-inner ${className}`}>
      <div className="mask-group-parent">
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="rectangle-parent">
          <div className="frame-child" />
          <header className="hero-container">
            <div className="frame-parent">
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <a className="bugbuster">Bugbuster</a>
            </div>
            <nav className="hero-nav-links">
              <div className="home">Home</div>
              <div className="about-us">About Us</div>
              <div className="products1">Products</div>
              <div className="blog">Blog</div>
              <div className="contact-us">Contact Us</div>
            </nav>
            <div className="hero-auth-links">
              <b className="login">Login</b>
              <button className="register-link">
                <b className="register">Register</b>
              </button>
            </div>
          </header>
          <div className="hero-content">
            <div className="hero-banner">
              <div className="banner-slogans-parent">
                <div className="banner-slogans">
                  <h1 className="expert-pest-control">
                    Expert Pest Control Services Tailored to Your Environment
                  </h1>
                  <div className="guardians-of-home">
                    Guardians of Home Sanctuaries Comprehensive Pest Control
                    Solutions for Every Nook and Cranny
                  </div>
                </div>
                <button className="banner-button">
                  <b className="get-started">Get Started</b>
                </button>
              </div>
            </div>
            <div className="mask-group-group">
              <img
                className="mask-group-icon1"
                loading="lazy"
                alt=""
                src="/mask-group-1@2x.png"
              />
              <div className="rectangle-group">
                <div className="frame-inner" />
                <div className="testimonial-content1">
                  <div className="testimonial">
                    <div className="testimonial-details">
                      <b className="k">{`455K+ `}</b>
                      <b className="happy-clients">Happy Clients</b>
                    </div>
                    <img
                      className="arrow-left-circle"
                      loading="lazy"
                      alt=""
                      src="/arrow--left-circle.svg"
                    />
                  </div>
                  <p className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a mi dui nunc id pellentesque quam. Vitae et sit donec tellus arcu. Varius sed a elit aenean tempus ipsum varius. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
