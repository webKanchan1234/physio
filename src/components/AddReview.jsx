import { useState } from "react";
import { addReview } from "../services/reviewService";

const AddReview = () => {

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    patientName: "",
    city: "",
    rating: 5,
    reviewText: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const reviewData = new FormData();

      reviewData.append(
        "patientName",
        formData.patientName
      );

      reviewData.append(
        "city",
        formData.city
      );

      reviewData.append(
        "rating",
        formData.rating
      );

      reviewData.append(
        "reviewText",
        formData.reviewText
      );

      if (image) {

        reviewData.append(
          "image",
          image
        );

      }

      await addReview(reviewData);

      alert("Review submitted successfully");

      setFormData({
        patientName: "",
        city: "",
        rating: 5,
        reviewText: "",
      });

      setImage(null);

    } catch (error) {

      console.error(error);

      alert("Failed to submit review");

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      className="
        py-24
        bg-gradient-to-b
        from-gray-50
        to-white
      "
    >

      <div className="
        max-w-3xl
        mx-auto
        px-6
      ">

        <h2
          className="
            text-5xl
            font-black
            text-center
            text-emerald-900
          "
        >
          Share Your Experience
        </h2>

        <p
          className="
            text-center
            text-gray-500
            mt-4
          "
        >
          Help others by sharing your recovery journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
            mt-10
            bg-white
            p-8
            rounded-[32px]
            shadow-xl
            border
          "
        >

          <input
            type="text"
            name="patientName"
            placeholder="Your Name"
            value={formData.patientName}
            onChange={handleChange}
            className="
              w-full
              border
              p-4
              rounded-xl
              mb-4
            "
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="
              w-full
              border
              p-4
              rounded-xl
              mb-4
            "
            required
          />

          {/* IMAGE */}
          <div className="mb-4">

            <label
              className="
                block
                text-sm
                font-medium
                mb-2
              "
            >
              Upload Your Photo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(
                  e.target.files[0]
                )
              }
              className="
                w-full
                border
                p-3
                rounded-xl
              "
            />

          </div>

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="
              w-full
              border
              p-4
              rounded-xl
              mb-4
            "
          >
            <option value="5">
              ★★★★★ Excellent
            </option>

            <option value="4">
              ★★★★ Very Good
            </option>

            <option value="3">
              ★★★ Good
            </option>

            <option value="2">
              ★★ Fair
            </option>

            <option value="1">
              ★ Poor
            </option>
          </select>

          <textarea
            rows="5"
            name="reviewText"
            placeholder="Write your experience..."
            value={formData.reviewText}
            onChange={handleChange}
            className="
              w-full
              border
              p-4
              rounded-xl
              mb-4
            "
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-orange-400
              hover:bg-orange-500
              text-white
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            {
              loading
                ? "Submitting..."
                : "Submit Review"
            }
          </button>

        </form>

      </div>

    </section>
  );
};

export default AddReview;