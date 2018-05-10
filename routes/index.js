var express = require('express');
var router = express.Router();


const sequelize = require('../models/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'QUIZ' });
});

////////
router.get('/credits', function (req, res, next) {
    res.render('index', { title: 'Belen Balmori' });
});

router.get('/quizzes', function (req, res, next) {
    sequelize.models.quiz.findAll()
        .then(quiz => {
            res.render('quizzes', { array: quiz });
        })
        .catch(error => next(error));
});
////////

module.exports = router;
