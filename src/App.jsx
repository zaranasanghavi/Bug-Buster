import FrameComponent4 from "../src/components/frame-component4";
import FrameComponent3 from "../src/components/frame-component3";
import FrameComponent2 from "../src/components/frame-component2";
import ProductCards from "../src/components/product-cards";
import FrameComponent from "../src/components/frame-component";
import Footer from "../src/components/footer";
import "./App.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className="product-container-wrapper">
        <div className="product-container">
          <div className="product-header">
            <b className="products">Products</b>
          </div>
          <h1 className="safeguarding-homes-with">
            Safeguarding Homes with Top Tier Pest Control Techniques
          </h1>
        </div>
      </section>
      <ProductCards />
      <section className="testimonial-container-wrapper">
        <div className="testimonial-container">
          <div className="testimonial-content">
            <img className="icon" loading="lazy" alt="" src="/.svg" />
          </div>
          <h1 className="before-using-bugbusters">
            Before using Bugbuster’s services, our home was overrun by pests,
            causing stress and discomfort for our family. Their expert team not
            only effectively eradicated the infestation but also provided
            valuable advice on preventive measures to keep pests at bay in the
            future.
          </h1>
          <div className="author-details">
            <b className="george-harry">George Harry</b>
          </div>
        </div>
      </section>
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Homepage;
