using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using QuizApp.Core.Models;
using QuizApp.Core.Services;

namespace QuizApp.Infrastructure.Data
{
    public class Repository<T> : IRepository<T> where T : class, IEntity
    {
        private readonly AppDbContext _dbContext;
        private DbSet<T> _dbSet => _dbContext.Set<T>();

        public IQueryable<T> Entities => _dbSet;

        public Repository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Add(T entity)
        {
            _dbSet.Add(entity);
        }

        public T Get(int id)
        {
            return _dbSet.Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return _dbSet.ToList();
        }

        public T Update(T updatedItem)
        {
            var existingItem = _dbSet.Find(updatedItem.Id);
            if (existingItem == null) return null;
            _dbContext.Entry(existingItem)
               .CurrentValues
               .SetValues(updatedItem);
            _dbSet.Update(existingItem);
            return existingItem;
        }

        public void Remove(T entity)
        {
            _dbSet.Remove(entity);
        }
    }
}
