import { ObjectId } from "mongodb"
import { db } from "../database/database.connection.js"

export async function getItens(req, res) {
  try {
    const itens = await db.collection("itens").find().toArray()
    return res.send(itens)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function getItemById(req, res) {
  const { id } = req.params

  try {
    const item = await db.collection("itens").findOne({ _id: new ObjectId(id) })
    res.send(item)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function buy(req, res) {
  const { id } = req.params
  const { userId } = req.body

  try {
    const item = await db.collection("itens").findOne({ _id: new ObjectId(id) })

    const buyItem = {
      userId: new ObjectId(userId),
      productId: item._id,
      name: item.name,
      image: item.image,
      price: Number(item.price),
      description: item.description,
      quantity: 1,
    }
    await db.collection("cart").insertOne(buyItem)
    return res.send(buyItem)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
