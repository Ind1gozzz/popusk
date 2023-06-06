const { User } = require("./models")
const bcrypt = require("bcrypt")

async function createUsers() {
  const user1 = await User.create({ email: "Indigo@mail.com", password: await bcrypt.hash("12345", 12), role: "USER" })
  const user2 = await User.create({ email: "Egorchick@mail.com", password: await bcrypt.hash("12345", 12), role: "USER" })
  const user3 = await User.create({ email: "pOPuSK@mail.com", password: await bcrypt.hash("12345", 12), role: "USER" })
  const user4 = await User.create({ email: "PP.kOVALENKO@mail.com", password: await bcrypt.hash("12345", 12), role: "USER" })
  const user5 = await User.create({ email: "ZjmyshenKO@mail.com", password: await bcrypt.hash("12345", 12), role: "USER" })

}


module.exports = createUsers