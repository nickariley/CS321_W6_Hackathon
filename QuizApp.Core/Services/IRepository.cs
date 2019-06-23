using System.Collections.Generic;
using System.Linq;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public interface IRepository<T> where T : class, IEntity
    {
        IQueryable<T> Entities { get; }

        void Add(T entity);
        T Get(int id);
        IEnumerable<T> GetAll();
        void Remove(T entity);
    }
}