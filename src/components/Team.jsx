import heroImage from "../assets/doctor.jpeg";
// import prachiImage from "../assets/prachi.jpg";
import prachiImage from "../assets/prachi.png";

const doctors = [
  {
    name: "Dr. Yashwant Kumar",
    role: "Physiotherapist",
    image: heroImage,
  },
  {
    name: "Dr. Prachi Singh",
    role: "Cardio Pulmonary Specialist",
    image: prachiImage,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-emerald-900">
            Meet Our Experts
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {doctors.map((doctor, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={doctor.image}
                className="h-[450px] w-full object-cover"
              />

              <div className="p-8 bg-[#eef5f1]">
                <h3 className="text-3xl font-bold">
                  {doctor.name}
                </h3>

                <p className="text-orange-400 mt-2">
                  {doctor.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;