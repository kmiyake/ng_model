angular.module('myApp', []).component('todo', {
  controllerAs: 'vm',
  controller: function() {
    var vm = this;

    vm.todos = [];
    vm.todoTitle = '';

    vm.todoCreate = function () {
      var item = {
        title: vm.todoTitle,
        done: false
      };
      vm.todos.push(item);
      vm.todoTitle = '';
    };

    vm.todoDelete = function () {
      var newTodos = [];
      angular.forEach(vm.todos, function (item) {
        if (!item.done) {
          newTodos.push(item);
        }
      });
      vm.todos = newTodos;
    };
  },
  templateUrl: 'todo.html'
});
