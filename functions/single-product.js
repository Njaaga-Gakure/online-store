const handler = async function (event, context, cb) {
  return {
    statusCode: 200,
    body: "single product route",
  };
};
module.exports = { handler };
