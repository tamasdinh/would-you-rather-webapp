# Would You Rather App

## Table of Contents

* [Project Goals](#Project-goals)
* [Getting Started](#Getting-started)
* [Built with](#Built-with)
* [Authors](#Authors)
* [Acknowledgments](#Acknowledgments)

## Project goals

The goal of the project was to build an interactive React app in which users can post questions and track answers to those questions.

The key views / functionalities are:
* ```Login```
  - the user can choose from three predefined users
  - all other functionalities can only be used if user is logged in
* ```Home```
  - dynamically generated list of question cards (in reverse order of creation), grouped into questions answered and unanswered by the logged in user
  - user can navigate to question poll or poll results by clicking on the question card
* ```Question poll```
  - shows the possible answers to the question
  - once answered, automatically forwards to poll results page
* ```Poll results```
  - shows distribution of votes to the different response options
  - highlights option selected by logged in user
* ```Add new question```
  - provides a form in which new questions can be added
  - once new question is generated, user is automatically forwarded to Home and the new question is shown there with the user's name and avatar
* ```Leaderboard```
  - shows all users with their score in answering and creating questions

## Getting Started

Given that the project was bootstrapped with ```create-react-app```, it can be easily set up on your local machine. You can easily clone the contents of the repo by running

```git clone https://github.com/tamasdinh/would-you-rather-webapp.git```

in your command line. This will download the entire repository to your computer, into a subfolder named ```would-you-rather-webapp``` in the folder from which you initiated cloning. Alternatively, you can download the repo as a ```zip``` file from the repo page.

Once you have the repo, you can just run ```npm install``` and subsequently, ```npm start``` and the app will automatically open up the local server output in your browser. From there you can check out app functionality.

## Built With

* [React](https://reactjs.org) - An excellent, state-based UI framework for Javascript, developed and open-sourced by the Facebook UI Team
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - Browser routing for React apps
* [Redux](https://redux.js.org) - A Predictable State Container for JS Apps
* [Google Chrome](https://www.google.com/chrome) - Probably you already heard of it... Has incredibly useful developer tools built-in, including React Component Profiler.

## Authors

* **Tamas Dinh** - [LinkedIn profile](https://www.linkedin.com/in/tamasdinh/)


## Acknowledgments

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
