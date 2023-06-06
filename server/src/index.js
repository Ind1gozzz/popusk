const express = require("express")
const cors = require("cors")
const pg = require("pg")
const db = require("./db")
const learndb = require("./learndb")
const config = require("./config/default")
const models = require("./models")
const router = require("./routes/index")
const cresteUsers = require("./createUsers")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", router)

async function start() {
  try {
    await db.authenticate()
    await db.sync()
    // await learndb.authenticate()
    // await learndb.sync()
    app.listen(config.PORT, function () {
      console.log(`Server has been started at ${config.PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
  // cresteUsers()
}

start()