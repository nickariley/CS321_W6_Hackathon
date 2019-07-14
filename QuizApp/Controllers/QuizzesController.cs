using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using QuizApp.ApiModels;
using QuizApp.Core.Services;

namespace QuizApp.Controllers
{
    [Route("api/[controller]")]
    public class QuizzesController : Controller
    {

        private readonly IQuizService _quizService;

        public QuizzesController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpGet()]
        public IEnumerable<QuizModel> Quizzes()
        {
            throw new System.NotImplementedException();
            //var quizzes = _quizService.GetAll().ToList();
            //return quizzes.ToApiModels();
        }

        [HttpGet("{id}")]
        public QuizModel Quizzes(int id)
        {
            throw new System.NotImplementedException();
            //var quiz = _quizService.Get(id);
            //return quiz.ToApiModel();
        }

    }
}
