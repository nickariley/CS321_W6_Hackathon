using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuizApp.ApiModels;
using QuizApp.Core.Models;
using QuizApp.Core.Services;

namespace QuizApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class QuestionsController : Controller
    {

        private readonly IQuestionService _questionService;

        public QuestionsController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        [AllowAnonymous]
        [HttpGet()]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_questionService.GetAll().ToApiModels());
            }
            catch(Exception ex)
            {
                ModelState.AddModelError("GetQuestions", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var question = _questionService.Get(id).ToApiModel();
                if (question == null) return NotFound();
                return Ok(question);
            }
            catch(Exception ex)
            {
                ModelState.AddModelError("GetQuestion", ex.Message);
                return BadRequest(ModelState);
            }
        }

        // TODO: only authenticated users can call this action
        [HttpPost]
        public IActionResult Add([FromBody]QuestionModel newQuestion)
        {
            // TODO: replace the following code with a complete implementation
            // that will add a new question
            try
            {
                return Ok(_questionService.Add(newQuestion.ToDomainModel()));
            }
            catch(Exception ex)
            {
                ModelState.AddModelError("AddQuestion", ex.Message);
                return NotFound(ModelState);
            }
        }

        // TODO: only authenticated users can call this action
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] QuestionModel questionModel)
        {
            // TODO: replace the following code with a complete implementation
            // that will update a question
            try
            {
                return Ok(_questionService.Update(questionModel.ToDomainModel()));
            }
            catch(Exception ex)
            {
                ModelState.AddModelError("UpdateQuestion", ex.Message);
                return BadRequest(ModelState);
            }
        }

        // TODO: only authenticated users can call this action
        [HttpDelete]
        public IActionResult Remove(int id)
        {
            // TODO: replace the following code with a complete implementation
            // that will delete a question
            try
            {
                _questionService.Remove(id);
                return Ok();
            }
            catch(Exception ex)
            {
                ModelState.AddModelError("RemoveQuestion", ex.Message);
                return BadRequest(ModelState);
            }
        }
    }
}
