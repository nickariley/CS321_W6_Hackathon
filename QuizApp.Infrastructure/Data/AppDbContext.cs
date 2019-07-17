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
