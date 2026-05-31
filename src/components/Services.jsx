import { services } from "../data/services";
import { motion } from "framer-motion";

import sportsImg from "../assets/image1.jpeg";
import backPainImg from "../assets/image2.jpeg";
import neuroImg from "../assets/image3.jpeg";

export const servicesdata = [
  {
    title: "Sports Injury Rehabilitation",
    desc: "Expert recovery programs for sports injuries and mobility improvement.",
    image: sportsImg,
  },

  {
    title: "Back & Neck Pain Treatment",
    desc: "Specialized treatment plans for chronic back and neck pain.",
    image: backPainImg,
  },

  {
    title: "Neurological Rehabilitation",
    desc: "Recovery-focused treatment for neurological conditions.",
    image: neuroImg,
  },
];





const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-emerald-900">
            Our Services
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Comprehensive physiotherapy services tailored to
            your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {servicesdata.map((service, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="
    bg-white
    rounded-3xl
    overflow-hidden
    shadow-lg
    hover:shadow-2xl
    transition
    group
  "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="
        w-full
        h-64
        object-cover
        group-hover:scale-110
        transition
        duration-500
      "
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-emerald-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                <button
                  className="
        mt-6
        text-orange-500
        font-semibold
        hover:translate-x-2
        transition
      "
                >
                  Learn More →
                </button>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;