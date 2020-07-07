using System;
namespace QuizApp.ApiModels
{
    public class AnswerModel
    {
        // TODO: create answer model props
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public bool IsCorrect { get; set; }
    }
}
