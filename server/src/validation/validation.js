import Joi from "joi"


export const schema = Joi.object({
    name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .alphanum()
    .messages({
        "string.min": "name elementlari 3 tadan kam",
        "string.max": "name elementlari 30 tadan ko'p",
        "any.required": "name talab qilinadi"
    }),

    email: Joi.string()
    .min(5)
    .max(50)
    .required()
    .messages({
        "string.min": "email elementlari 5 tadan kam",
        "string.max": "email elementlari 50 tadan ko'p",
        "any.required": "email talab qilinadi"
    }),


    age: Joi.number()
    .min(15)
    .max(150)
    .required()
    .messages({
        "string.min": "age 15 dan kichkina bo'lmasligi kerak",
        "string.max": "age 150 dan katta bo'lmasligi kerak",
        "any.required": "age talab qilinadi"
    }),
})