import { v4 as uuid } from "uuid"
import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"

export async function signIn(req, res) {
  const { email, password } = req.body

  try {
    const user = await db.collection("users").findOne({ email })
    if (!user) return res.status(404).send("Esse e-mail não foi cadastrado")

    const passwordCorrect = bcrypt.compareSync(password, user.password)
    if (!passwordCorrect) return res.status(401).send("Senha incorreta")

    const token = uuid()
    await db.collection("sessions").insertOne({ token, userId: user._id })
    res.send({ token, userName: user.name, userId: user._id })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function signUp(req, res) {
  const { email, password, name } = req.body

  try {
    const user = await db.collection("users").findOne({ email })
    if (user) return res.status(409).send("E-mail ja cadastrado")

    const hash = bcrypt.hashSync(password, 10)

    await db.collection("users").insertOne({ name, email, password: hash })

    res.status(201).send("Conta criada com sucesso")
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function logOut(req, res) {
  try {
    const token = res.locals.token;
    await db.collection("sessions").deleteOne({ token });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
