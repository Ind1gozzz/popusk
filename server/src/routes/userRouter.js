const Router = require("express")
const { User } = require("../models")
const bcrypt = require("bcrypt")

const router = Router()

router.post("/registration", async function (req, res) {
  const { email, password } = req.body
  const hashPass = bcrypt.hash(password, 12)
  const user = await User.create({ email, hashPass })
  return res.json(user)
})

router.post("/authorization", async function (req, req) {
  const { email, password } = req.body
  const userCandidate = await User.findOne({ where: { email } })
  if (!userCandidate) {
    return "User not found"
  }
  let comparePassword = bcrypt.compareSync(password, userCandidate.password)
  if (comparePassword) {
    const token = generateJwt(user.id, user.email)
    return res.json(token)
  }
  else {
    return "Passwords not compare"
  }
})

module.exports = router