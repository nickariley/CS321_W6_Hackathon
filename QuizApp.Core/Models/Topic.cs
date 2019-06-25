using System;
using System.Collections.Generic;

namespace QuizApp.Core.Models
{
    public class Topic : IEntity<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<QuestionTopic> QuestionTopics { get; set; }
    }
}
