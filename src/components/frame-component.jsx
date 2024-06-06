import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`blog-container-wrapper ${className}`}>
      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-header">
            <div className="blog-title">
              <b className="blog1">Blog</b>
            </div>
            <h1 className="restoring-serenity-through">
              Restoring Serenity Through Effective Pest Control Measures
            </h1>
          </div>
        </div>
        <div className="blog-image">
          <img
            className="mask-group-icon12"
            loading="lazy"
            alt=""
            src="/mask-group-12@2x.png"
          />
          <img
            className="mask-group-icon13"
            loading="lazy"
            alt=""
            src="/mask-group-13@2x.png"
          />
        </div>
        <div className="blog-posts">
          <FrameComponent1 understandingAndManagingC="Understanding and Managing Common Household Pests" />
          <FrameComponent1
            understandingAndManagingC="Effective Weapon  Strategies for Pest Management"
            propWidth="683px"
            propMinWidth="683px"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
