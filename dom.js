// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = []; // this is our initial todoList.

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    //style for list
    todoNode.style.backgroundColor ="#FFE4B5";
    todoNode.style.fontSize = "20px";
    todoNode.style.width = "auto";
    todoNode.style.borderRadius = "5px";





    // add span holding description

      var span = document.createElement("span");
      // span.textContent = todo.id + ". " + todo.description;
      span.textContent = todo.description; //to only show the description once its been submited..no need for the id
      //style the description
      span.style.margin = "20px";
      todoNode.appendChild(span);

      // if the description is marked..change the color to red..if not keep it black
      span.style.color = todo.done && "red" || "black";



    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    // Styling the delete button
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.style.backgroundColor = "#D93600";
    deleteButtonNode.style.boxShadow = " 5px 5px 3px #888888";
    deleteButtonNode.style.margin = "10px";
    deleteButtonNode.style.marginLeft = "100px";
    deleteButtonNode.style.padding = "5px";
    deleteButtonNode.style.borderRadius = "5px";
    deleteButtonNode.style.borderColor = "black";

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);


      /*********************** add markTodo button *********************************/
    var markTodo = document.createElement('button');
    markTodo.textContent = todo.done && "Unmark" || "Mark";
      // Styling the mark button
      // markTodo.textContent = "Mark";
      markTodo.style.backgroundColor = "#FFD700";
      markTodo.style.boxShadow = " 5px 5px 3px #888888";
      markTodo.style.padding = "5px";
      markTodo.style.borderRadius = "5px";
      markTodo.style.borderColor = "black";

    markTodo.addEventListener('click', function(event){
      var newMark = todoFunctions.markTodo(state, todo.id);
      console.log(newMark);
      update(newMark);
    });
    todoNode.appendChild(markTodo);

    // add classes for css

    return todoNode;
  };




  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = document.getElementById("add-todo")[0].value; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
