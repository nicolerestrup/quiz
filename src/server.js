// import { AllHtmlEntities as entities } from 'html-entities';
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios').default;
const Entities = require('html-entities').XmlEntities;
const apiUrl = 'https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=boolean';


app.use(express.static(path.join(__dirname, 'build')));

app.get('/questions', async function (req, res) {
  const result = await axios.get(apiUrl);
  const questions = result.data.results.map((question, index) => {
    return {
      id: index,
      correct_answer: question.correct_answer,
      incorrect_answer: question.incorrect_answers,
      question: Entities.decode(question.question)
    }
  });
 return res.send(questions);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
