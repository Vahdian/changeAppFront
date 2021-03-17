import React from "react";
import Change from "../../../src/assets/img/changeIcon.png";
import { Link } from "react-router-dom";
import "./Login.scss";
// import Swiper core and required modules

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

export default function Login() {
  return (
    <div>
      <div className="loginPage">
        <div className="loginPage__top">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="slides">
                <img
                  className="slides__image"
                  src="https://centralaz.edu/wp-content/uploads/2019/09/Diverse-Females-Illustration.jpg"
                ></img>

                <h1 className="slides__text">
                  Be the change the world needs. Create. Empower. Share.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slides">
              <div className="slides">
                <img
                  className="slides__image"
                  src="https://thumbs.dreamstime.com/b/concept-human-brain-vector-illustration-zentangle-sketchy-doodle-poster-colorful-paint-splashes-creative-91323417.jpg"
                ></img>

                <h1 className="slides__text">
                  Be a leader, stand for what is right. Support others on their
                  journeys.
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slides">
              <div className="slides">
                <img
                  className="slides__image"
                  src="https://i.pinimg.com/originals/65/b5/c2/65b5c2af1cfdb0aceb0ead4de29e6587.jpg"
                ></img>

                <h1 className="slides__text slides__text--black">
                  Create a community around you to fight injustice and appeal
                  solidarity.
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* */}
        </div>
        <div className="loginPage__bottom">
          <div>
            <button className="loginPage__bottom__button">
              <img
                className="buttonLogFacebook"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png"
              ></img>
              Sign in with Facebook
            </button>
            <button className="loginPage__bottom__button loginPage__bottom__button--black">
              Sign in with your email
            </button>
            <p className="signUpText">Not a member? Sign up now</p>
            <p className="forgotPasswordText">Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
