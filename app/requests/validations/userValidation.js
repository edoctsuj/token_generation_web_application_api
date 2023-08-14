const Joi = require("joi");

module.exports = {
  UserRegisterValidation: Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    company: Joi.string().required(),
    designation: Joi.string().required(),
  }).options({ abortEarly: false }),
};
