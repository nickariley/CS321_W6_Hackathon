using System;
namespace QuizApp.Core.Models
{
    public class QuestionTopic
    {
        public int QuestionId { get; set; }
        public Question Question { get; set; }
        public int TopicId { get; set; }
        public Topic Topic { get; set; }
    }
}
