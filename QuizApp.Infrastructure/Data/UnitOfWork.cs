using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using QuizApp.Core.Models;
using QuizApp.Core.Services;

namespace QuizApp.Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _dbContext;

        #region Repositories
        public IRepository<Quiz, int> Quizzes =>
           new QuizRepository(_dbContext); // TODO: inject?

        public IRepository<Question, int> Questions =>
           new Repository<Question, int>(_dbContext);

        public IRepository<User, string> Users =>
            new Repository<User, string>(_dbContext);
        #endregion

        public UnitOfWork(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }

        public void RejectChanges()
        {
            var entries = _dbContext.ChangeTracker.Entries()
                  .Where(e => e.State != EntityState.Unchanged);
            foreach (var entry in entries)
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.State = EntityState.Detached;
                        break;
                    case EntityState.Modified:
                    case EntityState.Deleted:
                        entry.Reload();
                        break;
                }
            }
        }
    }
}
