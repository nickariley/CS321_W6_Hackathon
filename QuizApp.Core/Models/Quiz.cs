using System;
using System.Collections.Generic;

namespace QuizApp.Core.Models
{
    public class Quiz : IEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<QuizQuestion> QuizQuestions { get; set; }
    }
}
