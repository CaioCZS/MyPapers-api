import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function getItens(req, res) {
  try {
    const itens = await db.collection("itens").find().toArray();
    return res.send(itens);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getItemById(req, res) {
  const { id } = req.params;

  try {
    const item = await db
      .collection("itens")
      .findOne({ _id: new ObjectId(id) });
    res.send(item);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
