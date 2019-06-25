using System.Collections.Generic;
using System.Linq;
using QuizApp.Core.Models;

namespace QuizApp.Core.Services
{
    public interface IRepository<T, TKey> where T : class, IEntity<TKey>
    {
        IQueryable<T> Entities { get; }

        void Add(T entity);
        T Get(TKey id);
        IEnumerable<T> GetAll();
        void Remove(T entity);
    }
}