## IMPORTANT

Read this ENTIRE document before beginning work.

## Project Overview

You will work as a group to create a Quiz app. The user interface already exists. Together, 
you'll implement the backend API for the application.

When you first clone the project, you can run the app. A few of the controller actions have been partially 
implemented and will return some hard-coded test data.

## Collaboration

ONE person from the group will fork this repo from ACA. That person will give everyone else permissions as a "collaborator". From that point on, you will all clone THE ONE repo and your changes will be in the form of __pull requests__. For each change/ticket you will create a new branch and work from there. Remember to always pull the latest from the master branch before you being on a new task.

_Adding a collaborator_
<br />
https://stackoverflow.com/questions/7920320/adding-a-collaborator-to-my-free-github-account

_Creating a new branch_
<br />
`git checkout -b <BRANCH_NAME>`

_Pulling from master_
* Make sure you are on the master branch (`git checkout master`)
* Pull the latest changes (`git pull origin master` or `git pull` for short)


## API Requirements

In order for the UI to work, the following API routes must be implemented and should return the appropriate ApiModel. The 
ApiModels are already implemented for you, but you will have to modify the mappings to and from the domain model.

1. GET /api/quizzes
1. GET /api/quizzes/{id}
1. ??? GET /api/random-quiz

1. GET /api/questions
1. GET /api/questions/{id}
1. POST /api/questions
1. PUT /api/questions/{id}
1. DELETE /api/questions/{id}

## Domain Model Design

The domain model should have the following entities with the properties shown.

TODO: list entities and properties

## Instructions

Let's get started...

_Note: Many of the tasks are intentionally vague, but nearly everything in this project is work you've done before. If
there is anything new, it will be called out in the instructions or in TODOs in the code.

1. Implement the domain model classes in the Core project. The classes already exist, but you must fill in the correct properties according to the design shown above. Tne names and types are important so the model will match up with the existing database.

1. In the Infrastructure project, implement a QuizRespository based on the given IQuizRepository interface.
1. Implement a QuestionRepository based on the given IQuestionRespository interface.
1. Complete the implementation of AppDbContext.  Add DbSet properties for Quizzes and Questions.
1. In AppDbContext.OnModelCreating, add the following line to configure the primary key for the QuizQuestion entity.
   ```csharp
            modelBuilder.Entity<QuizQuestion>()
                .HasKey(qt => new { qt.QuizId, qt.QuestionId });
   ```

1. In the Core project, implement a QuizService based on the given IQuizService interface. It should use IQuizRepository to access the database.
1. In the Core project, implement a QuestionService based on the given IQuestionService interface. It should use IQuestionRepository to access the database.

1. In the ApiModels folder of the main project, complete the implementation of mapping extensions. See the TODOs in each file.
   1. AnswerMappingExtensions
   1. QuestionMappingExtensions
   1. QuizMappingExtensions
1. In the main project, finish the implementation of QuizzesController. Replace the existing, temporary code with calls to the service layer.
   > NOTE: Only two GET actions are needed for this project. Adding/updating/deleting quizzes is not supported.
1. In the main project. finish the implementation of QuestionsController. Replace the existing, temporary code with appropriate calls to the service layer.

1. Remember to configure dependency injection of services, repositories, and DbContext in Startup.ConfigureServices.



## QA

All routes should be returning data from the database visibile through either the browser or Postman. 


## Summary

When complete, there should be a fully functioning API integrated with an external MySQL database. This is most of the work required to create an API. Congratulations!