import { testimonials } from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#eefaf6] to-white"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-6xl font-black text-emerald-900">
            What Our Patients Say
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Real stories from people who recovered with us
          </p>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
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
          className="mt-24"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="
                  relative
                  bg-white/80
                  backdrop-blur-xl
                  border border-white/20
                  rounded-[32px]
                  p-8
                  shadow-[0_10px_50px_rgba(0,0,0,0.08)]
                  overflow-hidden
                  group
                "
              >
                {/* Floating Quote */}
                <div className="absolute top-6 right-6 text-orange-300 group-hover:rotate-12 transition">
                  <Quote size={60} />
                </div>

                {/* User */}
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
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

                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      {item.city}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-6 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  "{item.review}"
                </p>

                {/* Floating Badge */}
                <div className="
                  absolute
                  -bottom-8
                  -right-8
                  w-32
                  h-32
                  rounded-full
                  bg-teal-400/10
                  blur-2xl
                " />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;