using System;
using System.Collections.Generic;
using QuizApp.Core.Models;

namespace QuizApp.ApiModels
{
    public class QuestionModel
    {
        // TODO: create question model props
        public int Id { get; set; }
        public string QuestionType { get; set; }
        public string Prompt { get; set; }
        public IEnumerable<AnswerModel> Answers { get; set; }
    }
}
