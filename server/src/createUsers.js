const User = require("./models")
const bcrypt = require("bcrypt")

const passHash = await bcrypt.hash("12345", 12)

async function createUsers() {
  const user1 = await User.create({ email: "Indigo@mail.com", password: passHash, role: "USER" })
  const user2 = await User.create({ email: "Egorchick@mail.com", password: passHash, role: "USER" })
  const user3 = await User.create({ email: "pOPuSK@mail.com", password: passHash, role: "USER" })
  const user4 = await User.create({ email: "PP.kOVALENKO@mail.com", password: passHash, role: "USER" })
}


module.exports = createUsers()