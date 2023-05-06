const db = require("./db")
const { DataTypes, STRING } = require("sequelize")

const User = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Lesson = db.define("lesson", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
})

const Question = db.define("question", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.INTEGER, allowNull: false },
  type: { type: DataTypes.ENUM("R", "T"), allowNull: false },
  answer: { type: DataTypes.STRING, allowNull: false },
  lessonId: { type: DataTypes.INTEGER, allowNull: false }
})

const UserProgress = db.define("userprogress", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  questionId: { type: DataTypes.INTEGER, allowNull: false },
  progress: { type: DataTypes.INTEGER, defaultValue: 0 }
})