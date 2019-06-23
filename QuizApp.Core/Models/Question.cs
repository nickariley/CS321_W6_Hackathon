using System;
using System.Collections.Generic;

namespace QuizApp.Core.Models
{
    public class Question : IEntity
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public ICollection<Answer> Answers { get; set; }
        public ICollection<QuestionTopic> QuestionTopics { get; set; }
        public ICollection<QuizQuestion> QuizQuestions { get; set; }
    }
}
