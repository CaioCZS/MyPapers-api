import { db } from "../database/database.connection.js"

export async function checkout(req, res) {
  const { userId } = res.locals.session

  try {
    const cart = await db.collection("cart").find({ userId }).toArray()
    if (!cart || cart.length === 0)
      return res
        .status(404)
        .send("Você ainda não adicionou nenhum item no carrinho")

    const cartDetails = cart.map((p) => {
      const { productId, price, name, quantity } = p
      const newObj = { productId, price, productName: name, quantity }
      return newObj
    })
    const body = { ...req.body, userId, purchasedItems: cartDetails }

    await db.collection("sales").insertOne(body)
    await db.collection("cart").deleteMany({ userId })
    res.send("Compra finalizada com sucesso")
  } catch (err) {
    res.status(500).send(err.message)
  }
}
