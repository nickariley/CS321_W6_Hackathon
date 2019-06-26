using System;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public interface IUnitOfWork
    {
        IRepository<Quiz, int> Quizzes { get; }
        IRepository<Question, int> Questions { get; }
        IRepository<User, string> Users { get; }

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
