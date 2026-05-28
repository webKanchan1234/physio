const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-emerald-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        <div>
          <h3 className="text-3xl font-bold">
            Book Your Physio
          </h3>

          <p className="mt-5 text-gray-300">
            Professional home physiotherapy services.
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-bold">Quick Links</h4>

          <ul className="space-y-4 mt-6">
            <li>Home</li>
            <li>Services</li>
            <li>Team</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold">Services</h4>

          <ul className="space-y-4 mt-6">
            <li>Sports Injury</li>
            <li>Back Pain</li>
            <li>Recovery</li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold">
            Contact Info
          </h4>

          <ul className="space-y-4 mt-6">
            <li>+91 9999999999</li>
            <li>contact@physio.com</li>
            <li>Delhi NCR</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-20 text-gray-400">
        © 2026 Book Your Physio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;