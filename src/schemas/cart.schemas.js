import joi from "joi"

export const quantitySchema = joi.object({
  quantity: joi.number().min(1).required(),
})
