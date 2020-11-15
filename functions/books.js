const { createApolloFetch } = require("apollo-fetch");

exports.handler = async () => {
  const fetch = createApolloFetch({
    uri: "https://exotic-treefrog-16.hasura.app/v1/graphql",
  });

  const response = await fetch({
    query: `{
    book {
      id
      title
      subtitle
      cover
      authors {
        name
      }
    }
  }`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response.data.book),
  };
};
