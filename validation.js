//Validation

const Joi = require("@hapi/joi");

//Register
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

//Register
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
