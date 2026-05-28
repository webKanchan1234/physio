import { Menu, X } from "lucide-react";
import { useState } from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const handleNavigation = (sectionId) => {

    // If already on homepage
    if (location.pathname === "/") {

      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }

    } else {

      // Go homepage first
      navigate("/");

      // Wait page render
      setTimeout(() => {

        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }

      }, 100);
    }

    setOpen(false);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-white/70
        border-b
        border-white/20
      "
    >

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="
            text-3xl
            font-black
            text-emerald-900
            cursor-pointer
          "
        >
          PhysioCare
        </h1>

        {/* DESKTOP MENU */}
        <nav className="
          hidden
          md:flex
          items-center
          gap-8
          font-medium
        ">

          <button
            onClick={() => navigate("/")}
            className="hover:text-orange-400 transition cursor-pointer"
          >
            Home
          </button>

          <button
            onClick={() => handleNavigation("services")}
            className="hover:text-orange-400 transition cursor-pointer"
          >
            Services
          </button>

          <button
            onClick={() => handleNavigation("team")}
            className="hover:text-orange-400 transition"
          >
            Team
          </button>

          <button
            onClick={() => handleNavigation("reviews")}
            className="hover:text-orange-400 transition cursor-pointer"
          >
            Reviews
          </button>

          <button
            onClick={() => handleNavigation("contact")}
            className="hover:text-orange-400 transition cursor-pointer"
          >
            Contact
          </button>

        </nav>

        {/* CTA */}
        <button
          onClick={() => navigate("/book-appointment")}
          className="
            hidden
            md:block
            bg-orange-400
            hover:bg-orange-500
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition
            cursor-pointer
          "
        >
          Book Appointment
        </button>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {
            open
            ? <X />
            : <Menu />
          }
        </button>

      </div>

      {/* MOBILE MENU */}
      {
        open && (
          <div className="
            md:hidden
            bg-white
            px-6
            pb-6
            flex
            flex-col
            gap-5
          ">

            <button onClick={() => navigate("/")}>
              Home
            </button>

            <button onClick={() => handleNavigation("services")}>
              Services
            </button>

            <button onClick={() => handleNavigation("team")}>
              Team
            </button>

            <button onClick={() => handleNavigation("reviews")}>
              Reviews
            </button>

            <button onClick={() => handleNavigation("contact")}>
              Contact
            </button>

            <button
              onClick={() => navigate("/book-appointment")}
              className="
                bg-orange-400
                text-white
                py-3
                rounded-2xl
              "
            >
              Book Appointment
            </button>

          </div>
        )
      }

    </header>
  );
};

export default Navbar;