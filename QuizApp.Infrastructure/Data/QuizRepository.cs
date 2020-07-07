using System;
using System.Collections.Generic;
using QuizApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using QuizApp.Core.Services;

namespace QuizApp.Infrastructure.Data
{
    public class QuizRepository : IQuizRepository
    { // TODO: inherit and implement the IQuizRepository interface

		private readonly AppDbContext _appDbContext;
        public QuizRepository(AppDbContext appDbContext)
        {
			_appDbContext = appDbContext;
        }

		public Quiz Add(Quiz entity)
		{
			_appDbContext.Quizzes.Add(entity);
			_appDbContext.SaveChanges();
			return entity;
		}

		public Quiz Get(int id)
		{
			Quiz quiz = _appDbContext.Quizzes.Include(q => q.QuizQuestions).FirstOrDefault(q => q.Id == id);
			if (quiz != null)
			{
				return quiz;
			}
			return null;
		}

		public IEnumerable<Quiz> GetAll()
		{
			return _appDbContext.Quizzes.Include(q => q.QuizQuestions).ToList();
		}

		public void Remove(Quiz entity)
		{
			_appDbContext.Quizzes.Remove(entity);
			_appDbContext.SaveChanges();
		}

		public Quiz Update(Quiz updateQuiz)
		{
			//gets current existing quiz
			var currentQuiz = this.Get(updateQuiz.Id);
			if (currentQuiz == null) return null;

			//updates the current quiz
			_appDbContext.Entry(currentQuiz).CurrentValues.SetValues(updateQuiz);
			_appDbContext.Quizzes.Update(updateQuiz);
			_appDbContext.SaveChanges();
			return updateQuiz;
		}
	}
}
