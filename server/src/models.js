const db = require("./db")
const { DataTypes } = require("sequelize")

const User = db.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Chapter = db.define("chapter", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
})

const Lesson = db.define("lesson", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  chapterId: { type: DataTypes.INTEGER, allowNull: false }
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
  progress: { type: DataTypes.INTEGER, defaultValue: 0 },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  questionId: { type: DataTypes.INTEGER, allowNull: false }
})

Chapter.hasMany(Lesson)
Lesson.belongsTo(Chapter)

Lesson.hasMany(Question)
Question.belongsTo(Lesson)

UserProgress.hasMany(UserProgress)
UserProgress.belongsTo(User)

Question.hasMany(UserProgress)
UserProgress.belongsTo(Question)

module.exports = {
  User,
  Chapter,
  Lesson,
  Question,
  UserProgress
}