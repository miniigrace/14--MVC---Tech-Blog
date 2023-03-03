# 14 Model-View-Controller (MVC): Tech Blog

## Description and Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

My task is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.  This site is completely built from scratch and will deploy it to Heroku. the app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Simplified Acceptance Criteria

This project is about creating a CMS (Content Management System) from scratch. Basically a blog.

It has the following:

* A signup and login
* Cookies to store user credentials (using express sessions)
* Handlebars must be used for all pages
* A homepage that show existing blog posts
* The ability to view blog posts on another page
* The ability to comment on the blog posts
* A dashboard showing the user's blog posts
* The ability to add a new post on the dashboard
* The ability to delete or update existing posts in the dashboard
* The ability to logout
* A cookie that times out after a while
* Blog posts and comments are visible even when the user is not logged in.
* The project is deployed to Heroku

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

