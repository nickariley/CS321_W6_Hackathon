using System;
using System.Collections.Generic;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public class QuizService : IQuizService
    {
        private readonly IUnitOfWork _unitOfWork;

        public QuizService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public Quiz Get(int id)
        {
            var quiz = _unitOfWork.Quizzes.Get(id);
            return quiz;
        }

        public IEnumerable<Quiz> GetAll()
        {
            var quizzes = _unitOfWork.Quizzes.GetAll();
            return quizzes;
        }
    }
}
