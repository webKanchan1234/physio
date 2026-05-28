import {
  useNavigate,
  useLocation,
} from "react-router-dom";


const CTA = () => {
    const navigate = useNavigate();
  return (
    <section className="py-28 bg-emerald-900 text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-6xl font-bold">
          Ready To Start Your Recovery Journey?
        </h2>

        <p className="mt-8 text-2xl text-gray-200">
          Book your physiotherapy session today.
        </p>

        <button onClick={() => navigate("/book-appointment")} className="mt-10 bg-orange-400 hover:bg-orange-500 transition px-10 py-5 rounded-full text-xl">
          Book Appointment
        </button>
      </div>
    </section>
  );
};

export default CTA;