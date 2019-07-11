using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuizApp.ApiModels;
using QuizApp.Core.Services;

namespace QuizApp.Controllers
{
    [Route("api/[controller]")]
    public class QuizzesController : Controller
    {

        private readonly static IEnumerable<QuizModel> _quizzes = new List<QuizModel> {
            new QuizModel
            {
                Id = 1,
                Title = "A Super Tough Quiz",
                Description = "Some markdown content that describes the quiz.",
                Instructions = "Some more markdown content that can provide instructions, tips, etc.",
                Questions = new List<QuestionModel>
                {
                    new QuestionModel
                    {
                        Id = 1,
                        QuestionType = "chooseOne",
                        Prompt = "Which of the items below is a correct example of an Interface in C#?",
                        Answers = new List<AnswerModel>
                        {
                            new AnswerModel
                            {
                                Id = 1,
                                Content = @"
```csharp
public interface Foo
{
    void bar();
}
```
",
                                IsCorrect = true
                            },
                            new AnswerModel
                            {
                                Id = 2,
                                Content = @"
```csharp
public int Foo
{
    void bar();
}
```
",
                                IsCorrect = false
                            },
                            new AnswerModel
                            {
                                Id = 3,
                                Content = @"
```csharp
public interface Foo
[
    void bar();
]
```
",
                                IsCorrect = false
                            }
                        }
                    },
                    new QuestionModel
                    {
                        Id = 2,
                        QuestionType = "chooseOne",
                        Prompt = "Where do you configure services for dependency injection in an ASP.NET Core project?",
                        Answers = new List<AnswerModel>
                        {
                            new AnswerModel
                            {
                                Id = 1,
                                Content = "Startup.Configure()",
                                IsCorrect = true
                            },
                            new AnswerModel
                            {
                                Id = 2,
                                Content = "DependencyInjection.Configure()",
                                IsCorrect = false
                            },
                            new AnswerModel
                            {
                                Id = 3,
                                Content = "Startup.ConfigureServices()",
                                IsCorrect = false
                            }
                        }
                    }
                }
            },
            new QuizModel
            {
                Id = 2,
                Title = "An Empty Quiz"
            }
        };
        private readonly IQuizService _quizService;

        public QuizzesController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpGet()]
        public IEnumerable<QuizModel> Quizzes()
        {
            //var rng = new Random();
            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)]
            //});

            //return _quizzes;
            var quizzes = _quizService.GetAll().ToList();
            return quizzes.ToApiModels();
        }

        [HttpGet("{id}")]
        public QuizModel Quizzes(int id)
        {
            //var rng = new Random();
            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    DateFormatted = DateTime.Now.AddDays(index + startDateIndex).ToString("d"),
            //    TemperatureC = rng.Next(-20, 55),
            //    Summary = Summaries[rng.Next(Summaries.Length)]
            //});
            //return _quizzes.FirstOrDefault(q => q.Id == id);
            var quiz = _quizService.Get(id);
            return quiz.ToApiModel();
        }

    }
}
