using System;
using System.Collections.Generic;
using System.Linq;
using QuizApp.ApiModels;
using QuizApp.Core.Models;

namespace QuizApp.ApiModels
{
	public static class QuestionMappingExtensions
	{

		public static QuestionModel ToApiModel(this Question Question)
		{
			return new QuestionModel
			{
				Id = Question.Id,
                QuestionType = Question.QuestionType,
                Prompt = Question.Prompt,
                Answers = Question.Answers?.ToApiModels().ToList()
			};
		}

		public static Question ToDomainModel(this QuestionModel QuestionModel)
		{
			return new Question
			{
				Id = QuestionModel.Id,
			};
		}

		public static IEnumerable<QuestionModel> ToApiModels(this IEnumerable<Question> items)
		{
			return items.Select(a => a.ToApiModel());
		}

		public static IEnumerable<Question> ToDomainModels(this IEnumerable<QuestionModel> items)
		{
			return items.Select(a => a.ToDomainModel());
		}
	}
}
