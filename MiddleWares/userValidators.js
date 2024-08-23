const Joi = require("joi");

class UserValidator {
  registerValidate(body) {
    const schema = Joi.object({
      name: Joi.string().required().max(30),
      email: Joi.string().required().email().min(3).max(30),
      password: Joi.string().required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        ,
    });
    return schema.validate(body);
  }
  loginValidate(body) {
    const schema = Joi.object({
      email: Joi.string().required().email().min(3).max(30),
      password: Joi.string().required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        ,
    });
    return schema.validate(body);
  }
  updateUserValidate(body) {
    const schema = Joi.object({
      token: Joi.string().required().min(3).max(220),
      name: Joi.string().min(3).max(30),
      email: Joi.string().email().min(3).max(30),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      appearance: Joi.number(),
      auto_delete: Joi.number(),
    });
    return schema.validate(body);
  }
  confirmUserValidate(body){
    const schema=Joi.object({
        confirm_key:Joi.number().required().min(1000).max(9999)
    })
    return schema.validate(body)
  }
  deleteUserValidate(body){
    const schema=Joi.object({
        UserId:Joi.string().required().min(3).max(30),
        password:Joi.string().required().max(20)
    })
    return schema.validate(body)
  }
}

module.exports=new UserValidator();