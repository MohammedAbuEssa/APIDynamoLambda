"use strict";

const dynamoose = require("dynamoose");
const peopleModel = require("./people.schema");

exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;

    const existingData = await peopleModel.get({ id });

    if (!existingData) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: "true",
          message: "Item not found",
        }),
      };
    }

    await peopleModel.delete({ id });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Item deleted successfully",
      }),
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
