using System;
using System.Collections.Generic;

namespace QuizApp.ApiModels
{
    public class QuestionModel
    {
        public int Id { get; set; }
        public string Prompt { get; set; }
        public ICollection<AnswerModel> Answers { get; set; }
    }
}
