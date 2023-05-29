const { Lesson, Question } = require("../models")

class LessonController {
  async fetchLessonByChapter(req, res) {
    const { chapterId } = req.body
    const lessons = await Lesson.findAll({ where: { chapterId: chapterId } })
    return res.json(lessons)
  }

  async fetchLessonById(req, res) {
    const { lessonId } = req.body
    const lesson = await Lesson.findOne({ where: { id: lessonId } })
    return res.json(lesson)
  }
}

module.exports = new LessonController()