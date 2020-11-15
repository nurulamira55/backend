var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todos')

/* GET users listing. */
router.get('/:id', todoController.getTodo);
router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;