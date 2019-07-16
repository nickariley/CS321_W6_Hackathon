using System;
using System.Collections.Generic;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public class QuizService : IQuizService
    {
        private readonly IQuizRepository _quizRepo;

        public QuizService(IQuizRepository quizRepo)
        {
            _quizRepo = quizRepo;
        }

        public Quiz Get(int id)
        {
            var quiz = _quizRepo.Get(id);
            return quiz;
        }

        public IEnumerable<Quiz> GetAll()
        {
            var quizzes = _quizRepo.GetAll();
            return quizzes;
        }
    }
}
