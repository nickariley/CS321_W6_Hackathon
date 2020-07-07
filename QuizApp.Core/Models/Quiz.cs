                                 using System;
using System.Collections.Generic;

namespace QuizApp.Core.Models
{

    public class Quiz
    {
        int Id { get; set; }
        string Title { get; set; }
        string Description { get; set; }
        string Instruction { get; set; }
        ICollection<QuizQuestion> QuizQuestions { get; set; }
    }
}
                                                                                                                                                                                                                                                                                                                           