"use strict";

const dynamoose = require("dynamoose");
const peopleModel = require("./people.schema");

exports.handler = async (event) => {
  try {
    const id = event.id;

    const data = await peopleModel.get({ id });

    if (!data) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: "true",
          message: "Item not found",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "true",
        message: error.message,
      }),
    };
  }
};
