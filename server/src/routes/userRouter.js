const { Router } = require("express")
const { User } = require("../models")
const bcrypt = require("bcrypt")

const router = Router()
router.post("/registration", async function (req, res) {
  const { email, password } = req.body
  const hashPass = bcrypt.hash(password, 12)
  const user = await User.create({ email, hashPass })
  return res.json(user)
})

module.exports = router