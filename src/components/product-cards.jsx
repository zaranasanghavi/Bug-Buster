import PropTypes from "prop-types";
import "./product-cards.css";

const ProductCards = ({ className = "" }) => {
  return (
    <section className={`product-cards ${className}`}>
      <div className="product-items">
        <img
          className="mask-group-icon7"
          loading="lazy"
          alt=""
          src="/mask-group-7@2x.png"
        />
      </div>
      <div className="product-items1">
        <img
          className="mask-group-icon8"
          loading="lazy"
          alt=""
          src="/mask-group-8@2x.png"
        />
      </div>
      <div className="mask-group-parent3">
        <img
          className="mask-group-icon9"
          loading="lazy"
          alt=""
          src="/mask-group-9@2x.png"
        />
        <div className="mask-group">
          <div className="mask-group-child" />
          <b className="pesticides"> Pesticides</b>
          <p className="lorem-ipsum-dolor7">
            Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a mi dui
            nunc id pellentesque quam. Vitae et sit donec tellus arcu. Varius
            sed a elit aenean tempus ipsum varius.
          </p>
        </div>
      </div>
      <div className="product-items2">
        <img
          className="mask-group-icon10"
          loading="lazy"
          alt=""
          src="/mask-group-10@2x.png"
        />
      </div>
      <div className="product-items3">
        <img
          className="mask-group-icon11"
          loading="lazy"
          alt=""
          src="/mask-group-11@2x.png"
        />
      </div>
    </section>
  );
};

ProductCards.propTypes = {
  className: PropTypes.string,
};

export default ProductCards;
