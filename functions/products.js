require("dotenv").config();
const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);
const handler = async function (event, context, cb) {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map(({ id, fields }) => {
      const {
        name,
        description,
        company,
        colors,
        price,
        stock,
        reviews,
        images,
        featured,
      } = fields;
      const { url: image } = images[0];
      return {
        id,
        name,
        description,
        company,
        colors,
        price,
        stock,
        reviews,
        image,
        featured,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: "There was an error.",
    };
  }
};
module.exports = { handler };
