import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MainLayout from "../layouts/MainLayout";

const BookAppointment = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    therapy: "",
    date: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      await emailjs.send(
        "service_mrt1jp4",
        "template_qwf0uua",
        formData,
        "NVKRt_3hHMhPQ4_Dg"
      );

      alert("Appointment Booked Successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        therapy: "",
        date: "",
        symptoms: "",
      });

    } catch (error) {

      console.log(error);

      alert("Failed to send appointment");

    } finally {

      setLoading(false);
    }
  };

  return (
    
    <MainLayout>

    <section className="min-h-screen bg-[#f3fbf8] py-24 px-6">

      <div className="
        max-w-6xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-20
        items-center
      ">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <p className="
            text-orange-400
            font-semibold
            text-lg
          ">
            BOOK YOUR SESSION
          </p>

          <h1 className="
            mt-4
            text-6xl
            font-black
            text-emerald-900
            leading-tight
          ">
            Start Your
            Recovery Journey
          </h1>

          <p className="
            mt-8
            text-xl
            text-gray-600
            leading-relaxed
          ">
            Fill your details and our certified physiotherapy
            expert will contact you shortly.
          </p>

          <div className="mt-10 space-y-6">

            <div className="
              bg-white
              p-6
              rounded-3xl
              shadow-lg
            ">
              <h3 className="text-2xl font-bold">
                Home Visit Available
              </h3>

              <p className="text-gray-500 mt-2">
                Expert therapists at your doorstep
              </p>
            </div>

            <div className="
              bg-white
              p-6
              rounded-3xl
              shadow-lg
            ">
              <h3 className="text-2xl font-bold">
                Instant Confirmation
              </h3>

              <p className="text-gray-500 mt-2">
                Fast appointment scheduling support
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            bg-white
            rounded-[40px]
            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            p-10
          "
        >

          <h2 className="
            text-4xl
            font-black
            text-emerald-900
          ">
            Book Appointment
          </h2>

          <form
            onSubmit={handleSubmit}
            className="
              grid
              md:grid-cols-2
              gap-6
              mt-10
            "
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            />

            <select
              name="therapy"
              required
              value={formData.therapy}
              onChange={handleChange}
              className="
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
              "
            >
              <option value="">
                Select Therapy
              </option>

              <option>
                Sports Injury
              </option>

              <option>
                Back Pain
              </option>

              <option>
                Orthopedic Therapy
              </option>

              <option>
                Neurological Rehab
              </option>
            </select>

            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
                md:col-span-2
              "
            />

            <textarea
              rows="5"
              name="symptoms"
              placeholder="Describe symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              className="
                border
                border-gray-200
                rounded-2xl
                px-5
                py-4
                outline-none
                md:col-span-2
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                bg-orange-400
                hover:bg-orange-500
                text-white
                py-5
                rounded-2xl
                font-semibold
                text-lg
                md:col-span-2
                transition
            cursor-pointer
              "
            >
              {
                loading
                ? "Booking..."
                : "Confirm Appointment"
              }
            </button>

          </form>

        </motion.div>

      </div>
    </section>

  </MainLayout>
  );
};

export default BookAppointment;