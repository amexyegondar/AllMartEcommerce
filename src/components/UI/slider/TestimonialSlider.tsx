import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "All Mart Ecommerce has transformed my online shopping experience. The vast selection, unbeatable prices, and the cherry on top – no shipping fees! I feel secure knowing that their checkout system prioritizes my privacy. All Mart is a game-changer, and I'm a customer for life!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Mahder Goytom</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "I can't express how thrilled I am with All Mart Ecommerce. The variety of products is astounding, and the fact that there are no shipping fees is a massive win for my wallet. The secured checkout system provides an extra layer of trust, making every purchase a worry-free delight. Highly recommend!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Ashebir Zergaw</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "All Mart Ecommerce is a dream come true for any shopper. The convenience of a vast online marketplace, coupled with their commitment to free shipping and a secure checkout system, makes it my go-to for all my needs. The peace of mind they provide is priceless – truly a customer-centric platform!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Yisak Solomon</h6>
        </div>
      </div>
    </Slider>
  );
};

interface SliderSettings {
  dots: boolean;
  autoplay: boolean;
  infinite: boolean;
  speed: number;
  autoplaySpeed: number;
  swipeToSlide: boolean;
  slidesToShow: number;
  slidesToScroll: number;
}

export default TestimonialSlider;
