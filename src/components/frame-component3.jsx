import PropTypes from "prop-types";
import "./frame-component3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`about-container-wrapper ${className}`}>
      <div className="about-container">
        <div className="about-content">
          <b className="about-us1">About Us</b>
          <div className="about-description">
            <h1 className="proactive-pest-control">
              Proactive Pest Control Strategies for Peace of Mind
            </h1>
            <p className="lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a mi
              dui nunc id pellentesque quam. Vitae et sit donec tellus
            </p>
          </div>
        </div>
        <div className="mask-group-container">
          <img
            className="mask-group-icon2"
            loading="lazy"
            alt=""
            src="/mask-group-2@2x.png"
          />
          <div className="rectangle-container">
            <div className="rectangle-div" />
            <div className="experience-details">
              <h1 className="years-protecting-the-container">
                <p className="years-protecting">15 Years Protecting</p>
                <p className="the-community">The Community</p>
              </h1>
              <p className="lorem-ipsum-dolor-container">
                <span className="lorem-ipsum-dolor2">
                  Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a
                  mi dui nunc id pellentesque quam. Vitae et sit donec tellus
                  arcu. Varius sed a elit aenean tempus ipsum varius. Odio
                  fringilla nunc sollicitudin nullam. Cras libero in justo in
                  egestas porttitor. Commodo amet magnis feugiat mauris.
                </span>
                <span className="blank-line">&nbsp;</span>
                <span className="vestibulum-eros-volutpat">
                  Vestibulum eros volutpat dictum ac integer netus. Pellentesque
                  curabitur neque libero dictum natoque quis lectus hendrerit.
                  Ullamcorper aliquam facilisi eget neque suspendisse euismod
                  ipsum. Scelerisque dolor viverra elementum cras. Vitae
                  malesuada turpis eget nulla
                </span>
              </p>
            </div>
            <button className="read-more-experience">
              <b className="read-more">Read more</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
