import joi from "joi"

export const checkoutSchema = joi.object({
  buyerName: joi.string().required(),
  creditNumber: joi.string().creditCard().required(),
  adress: joi.string().required(),
  finalPrice: joi.number().required(),
})
