"use strict";

const dynamoose = require("dynamoose");

const peopleModel = require("./people.schema");

exports.handler = async (event) => {
  try {
    const data = await peopleModel.scan().exec();
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
