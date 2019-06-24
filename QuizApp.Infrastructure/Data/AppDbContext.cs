﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using QuizApp.Core.Models;

namespace QuizApp.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlite("Data Source=../QuizApp.Infrastructure/quizapp.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ConfigureQuestionTopicRelationships(modelBuilder);
            ConfigureQuizQuestionRelationships(modelBuilder);

            SetupSeedData(modelBuilder);
        }

        private void ConfigureQuizQuestionRelationships(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuizQuestion>()
                .HasKey(qt => new { qt.QuizId, qt.QuestionId });

            modelBuilder.Entity<QuizQuestion>()
                .HasOne(qt => qt.Quiz)
                .WithMany(q => q.QuizQuestions)
                .HasForeignKey(qt => qt.QuizId);

            modelBuilder.Entity<QuizQuestion>()
                .HasOne(qt => qt.Question)
                .WithMany(q => q.QuizQuestions)
                .HasForeignKey(qt => qt.QuestionId);
        }

        private void ConfigureQuestionTopicRelationships(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuestionTopic>()
                .HasKey(qt => new { qt.QuestionId, qt.TopicId });

            modelBuilder.Entity<QuestionTopic>()
                .HasOne(qt => qt.Question)
                .WithMany(q => q.QuestionTopics)
                .HasForeignKey(qt => qt.QuestionId);

            modelBuilder.Entity<QuestionTopic>()
                .HasOne(qt => qt.Topic)
                .WithMany(q => q.QuestionTopics)
                .HasForeignKey(qt => qt.TopicId);
        }


        private void SetupSeedData(ModelBuilder modelBuilder)
        {
            // topics
            modelBuilder.Entity<Topic>().HasData(
                new Topic
                {
                    Id = 1,
                    Name = "Topic1"
                });

            // quizzes
            modelBuilder.Entity<Quiz>().HasData(
                new Quiz
                {
                    Id = 1,
                    Title = "Quiz 1"
                });

            // questions
            modelBuilder.Entity<Question>().HasData(
                new Question
                {
                    Id = 1,
                    Text = "Question1",
                    Answers = new List<Answer>()
                });

            // answers
            modelBuilder.Entity<Answer>().HasData(
                new Answer
                {
                    Id = 1,
                    Text = "Foo",
                    IsCorrect = false,
                    QuestionId = 1
                },
                new Answer
                {
                    Id = 2,
                    Text = "Bar",
                    IsCorrect = true,
                    QuestionId = 1
                });

            modelBuilder.Entity<QuizQuestion>().HasData(
                new QuizQuestion
                {
                    QuizId = 1,
                    QuestionId = 1
                });

            modelBuilder.Entity<QuestionTopic>().HasData(
                new QuestionTopic
                {
                    TopicId = 1,
                    QuestionId = 1
                });
        }
    }
}