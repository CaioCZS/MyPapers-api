import { ObjectId } from "mongodb"
import { db } from "../database/database.connection.js"

export async function getCartItens(req, res) {
  const { userId } = res.locals.session

  try {
    const cart = await db.collection("cart").find({ userId }).toArray()
    console.log(cart)

    if (!cart) return res.status(404).send("Carrinho está vazio")

    res.status(200).send(cart)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function updateCartItem(req, res) {
  const { userId } = res.locals.session
  const { quantity } = req.body
  const { id } = req.params

  if (!id) return res.sendStatus(404)

  try {
    const result = await db
      .collection("cart")
      .updateOne(
        { productId: new ObjectId(id), userId },
        { $set: { quantity: Number(quantity) } }
      );

    if (result.matchedCount === 0) return res.sendStatus(404)
    res.sendStatus(200)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function removeCartItem(req, res) {
  const { userId } = res.locals.session
  const { id } = req.params

  if (!id) return res.sendStatus(404)

  try {
    const result = await db
      .collection("cart")
      .deleteOne({ productId: new ObjectId(id), userId })

    if (result.deletedCount === 0) return res.sendStatus(404)

    res.status(202).send("Produto removido com sucesso")
  } catch (error) {
    res.status(500).send(error.message)
  }
}
