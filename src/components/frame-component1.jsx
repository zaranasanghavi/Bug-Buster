import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({
  className = "",
  understandingAndManagingC,
  propWidth,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className={`post-items-parent ${className}`} style={frameDivStyle}>
      <div className="post-items">
        <h1 className="understanding-and-managing">
          {understandingAndManagingC}
        </h1>
        <p className="lorem-ipsum-dolor8">
          Lorem ipsum dolor sit amet consectetur. Amet sagittis velit a mi dui
          nunc id pellentesque quam. Vitae et sit donec tellus arcu. Varius sed
          a elit
        </p>
      </div>
      <button className="read-more-buttons">
        <b className="read-more1">Read more</b>
      </button>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  understandingAndManagingC: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
