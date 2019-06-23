using System;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public interface IUnitOfWork
    {
        IRepository<Quiz> Quizzes { get; }
        IRepository<Question> Questions { get; }

        /// <summary>
        /// Commits all changes
        /// </summary>
        void SaveChanges();

        /// <summary>
        /// Discards all changes that has not been commited
        /// </summary>
        void RejectChanges();

        void Dispose();
    }
}
