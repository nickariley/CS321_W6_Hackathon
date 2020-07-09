using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using QuizApp.Core.Models;
using QuizApp.Core.Services;

namespace QuizApp.Infrastructure.Data
{
    public class QuestionRepository : IQuestionRepository
    {
        // TODO: inherit and implement the IQuestionRepository interface
        private readonly AppDbContext _dbContext;

        public QuestionRepository(AppDbContext dBContext) 
        {
            // TODO: inject and store AppDbContext
            _dbContext = dBContext;
        }

        public Question Add(Question entity)
        {
            _dbContext.Questions.Add(entity);
            _dbContext.SaveChanges();
            return entity;
        }

        public Question Get(int id)
        {
            Question question = _dbContext.Questions.Include(q => q.Answers).FirstOrDefault(q => q.Id == id);
            if (question != null)
            {
                return question;
            }
            return null;
        }

        public IEnumerable<Question> GetAll()
        {
            var list = _dbContext.Questions.Include(x => x.Answers).ToList();
            return list;
        }

        

        public void Remove(Question entity)
        {
            Question question = _dbContext.Questions.Find(entity);
            if (question != null)
            {
                _dbContext.Remove(question);
                _dbContext.SaveChanges();
            }
        }

        // TODO: The Update() method needs some special logic that you have not seen before.
        // It will update the Question AND also update all of the related Answers. Here is
        // the implementation for Update:
        public Question Update(Question updatedItem)
        {
            // retrieve the existing question
            var existingItem = this.Get(updatedItem.Id);
            if (existingItem == null) return null;

            // copy updated property values into the existing question
            _dbContext.Entry(existingItem)
               .CurrentValues
               .SetValues(updatedItem);

            // loop thru all of the answers in the updated question
            foreach (var updatedAnswer in updatedItem.Answers)
            {
                // find the existing answer that corresponds to the updated answer
                var existingAnswer = existingItem.Answers
                .Where(a => a.Id == updatedAnswer.Id)
                .SingleOrDefault();
                // update existing answer from updated answer
                _dbContext.Entry(existingAnswer)
                    .CurrentValues
                    .SetValues(updatedAnswer);
            }

            // save all the changes
            _dbContext.Questions.Update(existingItem);
            _dbContext.SaveChanges();
            return existingItem;
        }
    }
}
