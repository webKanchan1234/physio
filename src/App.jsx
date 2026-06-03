import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import AddReview from "./components/AddReview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/book-appointment"
        element={<BookAppointment />}
      />
      <Route
        path="/add-review"
        element={<AddReview />}
      />
      
    </Routes>
  );
}

export default App;