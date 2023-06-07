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

router.post("updateUserResult", async function(req, res) {
  const { userAnswer, userId, lessonId } = req.body
  const correctAnswer = await Question.findOne({where: { lessonId: lessonId } })
  const result = userAnswer == correctAnswer.answer ? 1 : 0
  const updateResult = await UserProgress.insertOrUpdate({ progress: result, userId: userId, where: { questionId: correctAnswer.questionId } })
  return res.json(updateResult)
})

module.exports = router