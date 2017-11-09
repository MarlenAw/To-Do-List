var test = require('tape');
var todoFunctions = require('./logic');

var newTask = [{
                'id': 1,
                'description': 'hello',
                'done': false
                },
                {'id': 2,
                'description': 'bye',
                'done': false
                },
                {
                  'id': 3,
                  'description': 'later',
                  'done': true
                  },
                ];

// var addTodo = logic.addTodo;

test('Add test', function(t) {
  var actual = [{'id':1, 'description': 'hello', 'done': false}];
  var expected = todoFunctions.addTodo([], 'hello');
  //t.pass();
  t.deepEqual(actual, expected, 'this test should pass');
  t.end();
});





//DELETE

test('Delete test', function(t) {
  var actual = [{
                  'id': 1,
                  'description': 'hello',
                  'done': false
                  },
                  {'id': 2,
                  'description': 'bye',
                  'done': false
                  }];
  var expected = todoFunctions.deleteTodo(newTask, newTask[2].id);
  //t.pass();
  t.deepEqual(actual, expected, 'this test should pass');
  t.end();
});


// MARK
test('Mark test', function(t) {
  var actual = [{
                  'id': 1,
                  'description': 'hello',
                  'done': true
                  },
                  {'id': 2,
                  'description': 'bye',
                  'done': false
                  },
                  {
                    'id': 3,
                    'description': 'later',
                    'done': true
                    },
                  ];
  var expected = todoFunctions.markTodo(newTask, 1);
  //t.pass();
  t.deepEqual(actual, expected, 'this test should pass');
  t.end();
});
