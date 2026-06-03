import {
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Users size={40} />,
    title: "Expert Therapists",
    desc: "Certified professionals",
  },
  {
    icon: <MapPin size={40} />,
    title: "Home Service",
    desc: "At your doorstep",
  },
  {
    icon: <Clock3 size={40} />,
    title: "Flexible Timing",
    desc: "Monday to Saturday",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Personalized Care",
    desc: "Customized plans",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="text-center p-8 rounded-3xl hover:shadow-xl transition"
          >
            <div className="w-24 h-24 rounded-full bg-[#eef5f1] flex items-center justify-center mx-auto text-emerald-800">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mt-6">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;