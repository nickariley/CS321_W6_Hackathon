using System;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public interface IQuizRepository : IRepository<Quiz, int>
    {
    }
}
