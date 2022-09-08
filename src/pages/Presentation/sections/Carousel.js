// eslint-disable-next-line import/no-extraneous-dependencies
import "owl.carousel/dist/assets/owl.carousel.min.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import bgImage from "assets/images/img6-auto_width_700.jpg";
import ReactOwlCarousel from "react-owl-carousel";

function Carousel() {
  return (
    <ReactOwlCarousel className="owl-theme" items="3" autoplay nav smartSpeed="10000">
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
      <div className="item">
        <img src={bgImage} alt="qq" />
      </div>
    </ReactOwlCarousel>
  );
}

export default Carousel;
