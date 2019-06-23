using System;
namespace QuizApp.Core.Models
{
    public class User : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
