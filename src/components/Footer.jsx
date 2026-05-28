import logo from "../assets/pt.png";

const Footer = () => {

  return (

    <footer
      id="contact"
      className="
        bg-emerald-950
        text-white
        py-20
      "
    >

      <div className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-4
        gap-12
        px-6
      ">

        {/* LOGO */}
        <div>

          <div className="
            flex
            items-center
            gap-4
          ">

            <img
              src={logo}
              alt="Healing With Physio"
              className="
                w-16
                h-16
                object-contain
              "
            />

            <div>

              <h2 className="
                text-2xl
                font-black
              ">
                Healing
              </h2>

              <p className="
                text-orange-400
                text-sm
              ">
                With Physio
              </p>

            </div>

          </div>

          <p className="
            mt-6
            text-gray-300
            leading-relaxed
          ">
            Professional home physiotherapy services with
            certified experts for faster recovery and
            personalized care.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="
            text-xl
            font-bold
          ">
            Quick Links
          </h3>

          <ul className="
            mt-6
            space-y-4
            text-gray-300
          ">

            <li>Home</li>
            <li>Services</li>
            <li>Team</li>
            <li>Reviews</li>

          </ul>

        </div>

        {/* SERVICES */}
        <div>

          <h3 className="
            text-xl
            font-bold
          ">
            Services
          </h3>

          <ul className="
            mt-6
            space-y-4
            text-gray-300
          ">

            <li>Sports Injury</li>
            <li>Back Pain</li>
            <li>Orthopedic Therapy</li>
            <li>Neurological Rehab</li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="
            text-xl
            font-bold
          ">
            Contact
          </h3>

          <ul className="
            mt-6
            space-y-4
            text-gray-300
          ">

            <li>+91 6203136986</li>

            <li>
              dr.yashwantkr@gmail.com
            </li>

            <li>
              Delhi, Noida, Gurgaon
            </li>

          </ul>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="
        border-t
        border-white/10
        mt-16
        pt-8
        text-center
        text-gray-400
      ">

        © 2026 Healing With Physio.
        All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;