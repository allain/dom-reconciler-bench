
API = {
	store: {
		counter: 0,
		todos: []
	},
	nextId: 0,

	// synchronous render
	// should bring the view in sync with models++
	// no matter how or where the models have changed
	forceUpdate: function(force){
		this.render();
		return;
	},

	render: function(){

	},

	todos: function(){
		return this.store.todos;
	},

	addTodo: function(title){
		var todo = {
			id: this.nextId++,
			title: title,
			completed: false
		};
		this.store.todos.push(todo);
	},

	removeTodo: function(todo){
		this.store.todos.splice(this.store.todos.indexOf(todo),1);
		return todo;
	},
	
	toggleAll: function(state){
		this.store.todos.forEach(function(todo){ todo.completed = !!state; });
	},

	clearAllTodos: function() {
		this.store.todos.length = 0;
	},

	clearCompleted: function(){
		var todos = this.store.todos;
		var i = todos.length;

		while(i > 0){
			if(todos[--i].completed){ todos.splice(i,1); }
		}

		return;
	},

	reset: function(todoCount){
		// reset
		this.store.counter = 0;
		this.clearAllTodos();

		var i = 0;

		while(i++ < todoCount){
			this.addTodo("Todo " + i);
		}

		this.forceUpdate();
		this.store.counter = 0;
	},

	// step - do a single iteration
	step: function(){
		var todos = this.store.todos;
		var count = todos.length;

		var stepNr = this.store.counter++;
		var actionNr = stepNr % 5;
		var cycleNr = Math.floor(stepNr / 5);
		// we alternate between 5 different actions

		if (actionNr == 0) {
			// remove the first todo
			this.removeTodo(todos[0]);

		} else if (actionNr == 1) {
			// add a new todo
			this.addTodo("Added " + cycleNr);
		} else if (actionNr == 2) {
			// Rename a todo
			var todo = todos[(cycleNr + actionNr) % count]
			todo.title = "Renamed " + cycleNr;
		} else if (actionNr == 3) {
			// Toggle completion of a todo
			var todo = todos[(cycleNr + actionNr) % count]
			todo.completed = !todo.completed;
		} else if (actionNr == 4) {
			// Do nothing
		}

		// Force the application to render
		this.forceUpdate();
	}
}

// bind the stepper to api
API.step = API.step.bind(API);

// clear the whole localStorage on load
localStorage.clear();

API.ready = function(){
	// called after TodoMVC has been loaded
	// Could be useful for overriding stuff
}