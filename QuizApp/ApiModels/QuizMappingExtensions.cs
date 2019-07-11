using System;
using System.Collections.Generic;
using System.Linq;
using QuizApp.Core.Models;

namespace QuizApp.ApiModels
{
	public static class QuizMappingExtensions
	{

		public static QuizModel ToApiModel(this Quiz quiz)
		{
            return new QuizModel
            {
                Id = quiz.Id,
                Title = quiz.Title,
                Description = quiz.Description,
                Instructions = quiz.Instructions,
                Questions = quiz.QuizQuestions?.Select(qq => qq.Question).ToApiModels().ToList()

              // .ToApiModels()
			};
		}

		public static Quiz ToDomainModel(this QuizModel quizModel)
		{
			return new Quiz
			{
				Id = quizModel.Id,
				Title = quizModel.Title,
                Description = quizModel.Description,
                Instructions = quizModel.Instructions,
                // QuizQuestions = TODO
			};
		}

		public static IEnumerable<QuizModel> ToApiModels(this IEnumerable<Quiz> quizzes)
		{
			return quizzes.Select(a => a.ToApiModel());
		}

		public static IEnumerable<Quiz> ToDomainModels(this IEnumerable<QuizModel> quizModels)
		{
			return quizModels.Select(a => a.ToDomainModel());
		}
	}
}
