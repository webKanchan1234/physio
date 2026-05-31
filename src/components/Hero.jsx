import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import heroImage from "../assets/doctor.jpeg";

const Hero = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // Navigate To Sections
  const handleNavigation = (sectionId) => {

    if (location.pathname === "/") {

      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }

    } else {

      navigate("/");

      setTimeout(() => {

        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }

      }, 100);
    }
  };

  return (

    <section className="relative overflow-hidden min-h-screen bg-[#f3fbf8]">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-teal-300/20
        blur-[120px]
        rounded-full
      " />

      <div className="
        max-w-7xl
        mx-auto
        px-6
        pt-32
        pb-20
        grid
        lg:grid-cols-2
        gap-20
        items-center
      ">

        {/* LEFT SIDE */}
        <div className="relative z-10">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex
              items-center
              gap-3
              bg-white
              shadow-lg
              px-5
              py-3
              rounded-full
              border
              border-teal-100
            "
          >

            <span className="
              w-3
              h-3
              bg-green-500
              rounded-full
              animate-pulse
            " />

            <p className="font-medium text-gray-700">
              Trusted by 100+ Patients
            </p>

          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              mt-10
              text-5xl
              md:text-7xl
              font-black
              leading-tight
              text-emerald-900
            "
          >

            Expert Physio

            <span className="block text-orange-400">
              At Your Doorstep
            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              mt-8
              text-lg
              md:text-xl
              leading-relaxed
              text-gray-600
              max-w-2xl
            "
          >

            Personalized physiotherapy treatment from certified
            experts in the comfort of your home with faster
            recovery and premium care.

          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/book-appointment")}
              className="
                bg-orange-400
                hover:bg-orange-500
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-lg
                shadow-xl
                transition
                cursor-pointer
              "
            >
              Book Appointment
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigation("services")}
              className="
                bg-white
                border
                border-gray-200
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-lg
                shadow-md
                transition
                cursor-pointer
              "
            >
              Explore Services
            </motion.button>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>

              <h3 className="
                text-4xl
                font-black
                text-emerald-900
              ">
                100+
              </h3>

              <p className="mt-2 text-gray-500">
                Happy Patients
              </p>

            </div>

            <div>

              <h3 className="
                text-4xl
                font-black
                text-emerald-900
              ">
                50+
              </h3>

              <p className="mt-2 text-gray-500">
                Expert Therapists
              </p>

            </div>

            <div>

              <h3 className="
                text-4xl
                font-black
                text-emerald-900
              ">
                98%
              </h3>

              <p className="mt-2 text-gray-500">
                Recovery Rate
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="
          relative
          hidden
          lg:flex
          items-center
          justify-center
        ">

          {/* BACKGROUND GLOW */}
          <div className="
            absolute
            w-[500px]
            h-[500px]
            bg-teal-300/20
            blur-[120px]
            rounded-full
          " />

          {/* MAIN IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >

            <img
  src={heroImage}
  alt="Home Physiotherapy"
  className="
    w-full
    h-[650px]
    object-cover
    rounded-[40px]
  "
/>

            {/* IMAGE OVERLAY */}
            <div className="
              absolute
              inset-0
              rounded-[40px]
              bg-gradient-to-t
              from-black/20
              to-transparent
            " />

          </motion.div>

          {/* EXPERIENCE CARD */}
          {/* <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              top-10
              -left-10
              bg-white/80
              backdrop-blur-xl
              border
              border-white/30
              p-6
              rounded-3xl
              shadow-2xl
              z-20
              w-[220px]
            "
          >

            <div className="flex items-center gap-4">

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-orange-100
                flex
                items-center
                justify-center
                text-2xl
              ">
                🏆
              </div>

              <div>

                <h3 className="
                  text-3xl
                  font-black
                  text-emerald-900
                ">
                  2+
                </h3>

                <p className="text-gray-500">
                  Years Experience
                </p>

              </div>

            </div>

          </motion.div> */}

          {/* DOCTOR CARD */}
          {/* <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              absolute
              bottom-10
              -left-12
              bg-white
              p-6
              rounded-3xl
              shadow-2xl
              z-20
              w-[260px]
            "
          >

            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Doctor"
                className="
                  w-16
                  h-16
                  rounded-2xl
                  object-cover
                "
              />

              <div>

                <h3 className="
                  text-xl
                  font-bold
                  text-emerald-900
                ">
                  Dr. Sarah Khan
                </h3>

                <p className="text-gray-500">
                  Orthopedic Specialist
                </p>

              </div>

            </div>

            <div className="
              mt-5
              flex
              items-center
              justify-between
            ">

              <div>

                <h4 className="
                  text-2xl
                  font-black
                  text-orange-400
                ">
                  4.9★
                </h4>

                <p className="text-gray-500 text-sm">
                  Patient Rating
                </p>

              </div>

              <button className="
                bg-emerald-900
                text-white
                px-5
                py-3
                rounded-2xl
                text-sm
              ">
                Available
              </button>

            </div>

          </motion.div> */}

          {/* RECOVERY CARD */}
          {/* <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
              absolute
              top-1/2
              -right-12
              bg-orange-400
              text-white
              p-8
              rounded-[32px]
              shadow-2xl
              z-20
              w-[240px]
            "
          >

            <h3 className="
              text-5xl
              font-black
            ">
              98%
            </h3>

            <p className="mt-3 text-lg">
              Recovery Success Rate
            </p>

            <div className="
              mt-5
              w-full
              bg-white/20
              rounded-full
              h-3
            ">

              <div className="
                w-[98%]
                bg-white
                h-3
                rounded-full
              " />

            </div>

          </motion.div> */}

          {/* APPOINTMENT CARD */}
          {/* <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              absolute
              top-24
              right-0
              bg-white
              rounded-3xl
              shadow-2xl
              p-5
              z-20
              w-[220px]
            "
          >

            <p className="text-sm text-gray-500">
              NEXT APPOINTMENT
            </p>

            <h3 className="
              mt-2
              text-xl
              font-bold
              text-emerald-900
            ">
              10:30 AM
            </h3>

            <p className="text-gray-500 mt-1">
              Home Physiotherapy
            </p>

            <div className="
              mt-4
              flex
              items-center
              gap-3
            ">

              <div className="
                w-3
                h-3
                bg-green-500
                rounded-full
                animate-pulse
              " />

              <p className="text-green-600 font-medium">
                Therapist Assigned
              </p>

            </div>

          </motion.div> */}

        </div>

      </div>

    </section>
  );
};

export default Hero;