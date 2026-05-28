import { services } from "../data/services";
import { motion } from "framer-motion";

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
          {services.map((service, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="bg-white rounded-3xl p-10 shadow hover:shadow-2xl transition"
            >
              <h3 className="text-3xl font-bold text-emerald-900">
                {service.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              <button className="mt-8 text-orange-400 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;