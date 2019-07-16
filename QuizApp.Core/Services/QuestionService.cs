using System;
using System.Collections.Generic;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public class QuestionService : IQuestionService
    {
        private readonly IQuestionRepository _questionRepo;

        public QuestionService(IQuestionRepository questionRepo)
        {
            _questionRepo = questionRepo;
        }

        public Question Add(Question newQuestion)
        {
            return _questionRepo.Add(newQuestion);
        }

        public Question Get(int id)
        {
            return _questionRepo.Get(id);
        }

        public IEnumerable<Question> GetAll()
        {
            return _questionRepo.GetAll();
        }

        public void Remove(int id)
        {
            var q = _questionRepo.Get(id);
            _questionRepo.Remove(q);
        }

        public Question Update(Question updatedQuestion)
        {
            return _questionRepo.Update(updatedQuestion);
        }
    }
}
