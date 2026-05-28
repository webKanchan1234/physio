const doctors = [
  {
    name: "Dr. Abdus Samad",
    role: "Physiotherapist",
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
  },
  {
    name: "Dr. Mehar Mahfooz",
    role: "Cardio Pulmonary Specialist",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=640:*",
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