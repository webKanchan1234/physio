import { useEffect, useState } from "react";
import { getReviews } from "../services/reviewService";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import {
  Quote,
  Star,
  CheckCircle,
} from "lucide-react";

const Testimonials = () => {

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadReviews();

  }, []);

  const loadReviews = async () => {

    try {

      const response =
        await getReviews();

      setReviews(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <section className="py-32">

        <div className="text-center">

          <h2 className="
            text-2xl
            font-semibold
            text-emerald-900
          ">
            Loading Reviews...
          </h2>

        </div>

      </section>

    );

  }

  return (

    <section
      id="reviews"
      className="
        relative
        py-32
        overflow-hidden
        bg-gradient-to-br
        from-[#eefaf6]
        via-white
        to-orange-50
      "
    >

      {/* Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-teal-300/20
        blur-[120px]
        rounded-full
      " />

      <div className="
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10
      ">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >

          <span
            className="
              px-5
              py-2
              rounded-full
              bg-orange-100
              text-orange-500
              font-semibold
            "
          >
            Patient Reviews
          </span>

          <h2
            className="
              mt-8
              text-5xl
              md:text-6xl
              font-black
              text-emerald-900
            "
          >
            What Our Patients Say
          </h2>
<div className="text-center mt-8">
  <Link
    to="/add-review"
    className="
      bg-orange-500
      hover:bg-orange-600
      text-white
      px-8
      py-4
      rounded-full
      font-semibold
      shadow-lg
      transition
    "
  >
    Share Your Experience
  </Link>
</div>
          <p
            className="
              mt-6
              text-xl
              text-gray-600
            "
          >
            Real recovery stories from our patients
          </p>

        </motion.div>

        {/* Stats */}
        <div
          className="
            flex
            justify-center
            gap-12
            flex-wrap
            mt-16
          "
        >

          <div className="text-center">

            <h3
              className="
                text-4xl
                font-black
                text-emerald-900
              "
            >
              500+
            </h3>

            <p className="text-gray-500">
              Happy Patients
            </p>

          </div>

          <div className="text-center">

            <h3
              className="
                text-4xl
                font-black
                text-emerald-900
              "
            >
              4.9★
            </h3>

            <p className="text-gray-500">
              Average Rating
            </p>

          </div>

          <div className="text-center">

            <h3
              className="
                text-4xl
                font-black
                text-emerald-900
              "
            >
              98%
            </h3>

            <p className="text-gray-500">
              Recovery Success
            </p>

          </div>

        </div>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={1200}
          spaceBetween={35}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="mt-24 pb-16"
        >

          {reviews.map((item) => (

            <SwiperSlide key={item.id}>

              {({ isActive }) => (

                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  className={`
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-60"
                    }
                  `}
                >

                  <div
                    className="
                      relative
                      bg-white/80
                      backdrop-blur-xl
                      rounded-[36px]
                      p-8
                      border
                      border-white/30
                      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                      overflow-hidden
                      h-full
                    "
                  >

                    {/* Quote */}
                    <div
                      className="
                        absolute
                        top-4
                        right-4
                        text-orange-200
                      "
                    >
                      <Quote size={50} />
                    </div>

                    {/* User */}
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >

                      <div className="relative">

                        <img
                          src={
                            item.imageUrl
                              ? item.imageUrl
                              : "https://i.pravatar.cc/150?img=5"
                          }
                          alt={item.patientName}
                          className="
                            w-20
                            h-20
                            rounded-full
                            object-cover
                            border-4
                            border-white
                            shadow-lg
                          "
                        />

                        <div
                          className="
                            absolute
                            -bottom-1
                            -right-1
                            bg-green-500
                            rounded-full
                            p-1
                          "
                        >
                          <CheckCircle
                            size={18}
                            className="text-white"
                          />
                        </div>

                      </div>

                      <div>

                        <h3
                          className="
                            text-xl
                            font-bold
                            text-emerald-900
                          "
                        >
                          {item.patientName}
                        </h3>

                        <p className="text-gray-500">
                          {item.city}
                        </p>

                      </div>

                    </div>

                    {/* Rating */}
                    <div
                      className="
                        flex
                        gap-1
                        mt-6
                      "
                    >

                      {[...Array(item.rating)].map(
                        (_, i) => (

                          <Star
                            key={i}
                            size={18}
                            fill="#f97316"
                            color="#f97316"
                          />

                        )
                      )}

                    </div>

                    {/* Review */}
                    <p
                      className="
    mt-5
    text-gray-600
    leading-relaxed
    text-base
  "
                    >
                      "{item.reviewText}"
                    </p>

                    {/* Footer */}
                    <div
                      className="
    flex
    items-center
    justify-between
    mt-5
  "
                    >

                      <span
                        className="
                          bg-green-100
                          text-green-700
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        "
                      >
                        Verified Patient
                      </span>

                      <span
                        className="
                          text-orange-500
                          font-bold
                        "
                      >
                        {item.rating}.0 Rating
                      </span>

                    </div>

                    {/* Glow */}
                    <div
                      className="
                        absolute
                        -bottom-10
                        -right-10
                        w-40
                        h-40
                        rounded-full
                        bg-orange-300/20
                        blur-3xl
                      "
                    />

                  </div>

                </motion.div>

              )}

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

};

export default Testimonials;