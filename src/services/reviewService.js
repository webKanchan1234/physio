import axios from "axios";

//local
// const API_URL ="http://localhost:8080/api/reviews";


//live
const API_URL ="https://your-render-service.onrender.com/api/reviews";;

export const addReview = async (
  formData
) => {

  return axios.post(
    API_URL,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

};

export const getReviews = async () => {

  return axios.get(API_URL);

};