import { db } from "../database/database.connection.js"

export async function getCartItens(req, res) {
  const { userId } = res.locals.session

  try {
    const cart = await db.collection("cart").findOne({ userId })
    console.log(cart)

    if (!cart) return res.status(404).send("Carrinho está vazio")

    const { products } = cart
    console.log(products)

    res.status(200).send(products)

  } catch (error) {
    res.status(500).send(error.message)
  }
}

export async function updateCartIten(req, res) {
  const { userId } = res.locals.session;

  try {
    const products = await db.collection("cart").find({ userId }).toArray();
    res.send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function removeCartIten(req, res) {
  const { userId } = res.locals.session;

  try {
    const products = await db.collection("cart").find({ userId }).toArray();
    res.send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
