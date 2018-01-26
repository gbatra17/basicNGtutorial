angular.module("todo")
.controller("todoListCtrl", function(){

})
.component("todoList", {
  bindings: {
    todos: '<'
  },
  controller: "todoListCtrl",
  templateUrl: "todoList.html"
})
