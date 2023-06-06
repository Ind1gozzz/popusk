const { Router } = require("express")
const { Question, UserProgress } = require("../models")

const router = Router()

router.get("/fetchQuestions", async function (req, res) {
  const { lessonId } = req.query
  const questions = await Question.findAll({ where: { lessonId: lessonId } })
  return res.json(questions)
})

router.post("/updateResult", async function (req, res) {
  const { userId, questionId, userProgress } = req.body
  const userprogress = await UserProgress.insertOrUpdate({ progress: userProgress, userId: userId, where: { questionId } })
  return res.json(userprogress)
})

module.exports = router