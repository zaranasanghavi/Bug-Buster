import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`services-container-wrapper ${className}`}>
      <div className="services-container">
        <div className="services-header">
          <b className="services">Services</b>
          <h1 className="safeguarding-homes-with1">
            Safeguarding Homes with Top Tier Pest Control Techniques
          </h1>
        </div>
        <div className="service-cards">
          <div className="card-items-parent">
            <div className="card-items">
              <img
                className="mask-group-icon3"
                loading="lazy"
                alt=""
                src="/mask-group-3@2x.png"
              />
              <div className="card-details">
                <b className="preventive-measures">Preventive Measures</b>
                <p className="lorem-ipsum-dolor3">
                  Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a
                  mi dui nunc id pellentesque quam. Vitae et sit donec tellus
                  arcu. Varius sed a elit aenean tempus ipsum varius. Odio
                  fringilla nunc sollici.
                </p>
              </div>
            </div>
            <img
              className="arrow-left-circle1"
              loading="lazy"
              alt=""
              src="/arrow--left-circle.svg"
            />
          </div>
          <img
            className="service-cards-child"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="frame-group">
            <div className="frame-div">
              <img
                className="mask-group-icon4"
                loading="lazy"
                alt=""
                src="/mask-group-4@2x.png"
              />
              <div className="residential-pest-control-parent">
                <h1 className="residential-pest-control">
                  Residential Pest Control
                </h1>
                <p className="lorem-ipsum-dolor4">
                  Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a
                  mi dui nunc id pellentesque quam. Vitae et sit donec tellus
                  arcu. Varius sed a elit aenean tempus ipsum varius. Odio
                  fringilla nunc sollici.
                </p>
              </div>
            </div>
            <img
              className="arrow-left-circle2"
              loading="lazy"
              alt=""
              src="/arrow--left-circle.svg"
            />
          </div>
          <img
            className="service-cards-item"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="frame-container">
            <div className="mask-group-parent1">
              <img
                className="mask-group-icon5"
                loading="lazy"
                alt=""
                src="/mask-group-5@2x.png"
              />
              <div className="wildlife-control-parent">
                <b className="wildlife-control">Wildlife Control</b>
                <p className="lorem-ipsum-dolor5">
                  Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a
                  mi dui nunc id pellentesque quam. Vitae et sit donec tellus
                  arcu. Varius sed a elit aenean tempus ipsum varius. Odio
                  fringilla nunc sollici.
                </p>
              </div>
            </div>
            <img
              className="arrow-left-circle3"
              loading="lazy"
              alt=""
              src="/arrow--left-circle.svg"
            />
          </div>
          <img
            className="service-cards-inner"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className="frame-parent1">
            <div className="mask-group-parent2">
              <img
                className="mask-group-icon6"
                loading="lazy"
                alt=""
                src="/mask-group-6@2x.png"
              />
              <div className="integrated-pest-management-parent">
                <h1 className="integrated-pest-management">
                  Integrated Pest Management
                </h1>
                <p className="lorem-ipsum-dolor6">
                  Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a
                  mi dui nunc id pellentesque quam. Vitae et sit donec tellus
                  arcu. Varius sed a elit aenean tempus ipsum varius. Odio
                  fringilla nunc sollici.
                </p>
              </div>
            </div>
            <img
              className="arrow-left-circle4"
              loading="lazy"
              alt=""
              src="/arrow--left-circle.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
