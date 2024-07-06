import Joi from "joi"


const JoiProductSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    variants: Joi.array().items(Joi.object({type:Joi.string(), value: Joi.string()})),
    inventory: {
        quantity: Joi.number().required(),
        inStock: Joi.boolean().required()
    }
})



export default JoiProductSchema;
