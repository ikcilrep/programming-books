const axios = require("axios");

const getAverageRating = (response) => {
  const bookData = response.data.items.filter(
    (bookData) => bookData.id == bookId
  )[0];

  return bookData.volumeInfo.averageRating;
};

exports.handler = async (event) => {
  const bookId = event.queryStringParameters.bookId;
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${bookId}`
  );

  const averageRating = getAverageRating(response);

  return {
    statusCode: 200,
    body: JSON.stringify({ rating: averageRating }),
  };
};
