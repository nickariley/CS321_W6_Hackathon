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

        // TODO: create a constructor and inject quiz service
        public QuizzesController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpGet()]
        public IActionResult GetQuizzes()
        {
            // TODO: replace the following code with a complete implementation
            // that will return quizzes from the database
            var getQuiz = _quizService.GetAll().ToApiModels();
            return Ok(getQuiz);
        }

        [HttpGet("{id}")]
        public IActionResult GetQuiz(int id)
        {
            // TODO: replace the following code with a complete implementation
            // that will return a single quiz
            var getQuiz = _quizService.Get(id).ToApiModel();
            if (getQuiz == null) return NotFound();
            return Ok(getQuiz);
        }

        // OPTIONAL - PUSH YOURSELF FURTHER
        // Implement a controller action that will return
        // a quiz containing five randomly selected questions.
    }
}
