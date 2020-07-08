using System;
using System.Collections.Generic;
using System.Linq;
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
            int count = 0;
            foreach (var answer in newQuestion.Answers)
            {
                if (answer.IsCorrect == true)
                {
                    count++;
                }
            }
            if (count == 1)
            {
                return _questionRepo.Add(newQuestion);
            }
            else
            {
                throw new Exception("invalid question");
            }
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
            var question = _questionRepo.Get(id);
            _questionRepo.Remove(question);
        }

        public Question Update(Question updatedQuestion)
        {
            int count = 0;
            foreach(var answer in updatedQuestion.Answers)
            {
                if(answer.IsCorrect == true)
                {
                    count++;
                }
            }
            if(count == 1)
            {
            return _questionRepo.Update(updatedQuestion);
            }
            else
            {
                throw new Exception("invalid question");
            }
        }
    }
}
