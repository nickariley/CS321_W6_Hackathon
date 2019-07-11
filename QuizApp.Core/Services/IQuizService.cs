using System;
using System.Collections.Generic;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public interface IQuizService
    {
        Quiz Get(int id);
        IEnumerable<Quiz> GetAll();
    }
}
