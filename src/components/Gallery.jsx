import { galleryImages } from "../data/gallery";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="py-28 bg-[#f7fcfa]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="
            px-4
            py-2
            bg-orange-100
            text-orange-500
            rounded-full
            text-sm
            font-semibold
          ">
            Treatment Gallery
          </span>

          <h2 className="
            mt-6
            text-5xl
            md:text-6xl
            font-black
            text-emerald-900
          ">
            Recovery In Action
          </h2>

          <p className="
            mt-6
            text-xl
            text-gray-600
            max-w-3xl
            mx-auto
          ">
            Explore real physiotherapy sessions,
            rehabilitation programs, and patient care.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-20
        ">

          {galleryImages.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                shadow-lg
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[350px]
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />

              {/* Overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
              " />

              {/* Text */}
              <div className="
                absolute
                bottom-6
                left-6
                text-white
              ">

                <h3 className="
                  text-2xl
                  font-bold
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-2
                  text-sm
                  text-gray-200
                ">
                  Professional Physiotherapy Care
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Gallery;