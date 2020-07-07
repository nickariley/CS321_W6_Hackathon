using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QuizApp.Core.Models;

namespace QuizApp.Infrastructure.Data
{
    public class AppDbContext : IdentityDbContext<User>
    {
        // NOTE: User DbSet is inherited from IdentityDbContext
        // TODO: add DbSets for Quizzes and Questions
        public DbSet<Quiz> Quizzes { get; set; }

        public DbSet<Question> Questions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlite("Data Source=../QuizApp.Infrastructure/quizapp.db");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

    }
}
