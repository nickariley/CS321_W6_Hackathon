using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuizApp.ApiModels;
using QuizApp.Core.Services;

namespace QuizApp.Controllers
{
    [Route("api/[controller]")]
    public class QuestionsController : Controller
    {

        private readonly IQuestionService _questionService;

        // TODO: create a constructor and inject the question service

        // TODO: anonymous users can still call this action
        [HttpGet()]
        public IActionResult GetAll()
        {
            // TODO: replace the following code with a complete implementation
            // that will return all questions
            ModelState.AddModelError("GetQuestions", "Not Implemented!");
            return BadRequest(ModelState);
        }

        // TODO: anonymous users can still call this action
        [HttpGet("{id}")]
        public IActionResult Get()
        {
            // TODO: replace the following code with a complete implementation
            // that will return a single question based on id
            ModelState.AddModelError("GetQuestion", "Not Implemented!");
            return BadRequest(ModelState);
        }

        // TODO: only authenticated users can call this action
        [HttpPost]
        public IActionResult Add()
        {
            // TODO: replace the following code with a complete implementation
            // that will add a new question 
            ModelState.AddModelError("AddQuestion", "Not Implemented!");
            return NotFound(ModelState);
        }

        // TODO: only authenticated users can call this action
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] QuestionModel questionModel)
        {
            // TODO: replace the following code with a complete implementation
            // that will update a question
            ModelState.AddModelError("UpdateQuestion", "Not Implemented!");
            return BadRequest(ModelState);
        }

        // TODO: only authenticated users can call this action
        [HttpDelete]
        public IActionResult Remove()
        {
            // TODO: replace the following code with a complete implementation
            // that will delete a question
            ModelState.AddModelError("RemoveQuestion", "Not Implemented!");
            return BadRequest(ModelState);
        }
    }
}
