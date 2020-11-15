const axios = require("axios");

const getAverageRating = (response, bookId) => {
  const bookData = response.data.items.filter(
    (bookData) => bookData.id == bookId
  )[0];

  if (bookData === undefined) {
      return response.data.items[0].volumeInfo.averageRating;
  }

  return bookData.volumeInfo.averageRating;
};

exports.handler = async (event) => {
  const bookId = event.queryStringParameters.bookId;
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${bookId}`
  );

  const averageRating = getAverageRating(response, bookId);

  return {
    statusCode: 200,
    body: JSON.stringify({ rating: averageRating }),
  };
};
