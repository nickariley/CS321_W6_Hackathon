using System;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public interface IQuestionRepository : IRepository<Question, int>
    {
    }
}
