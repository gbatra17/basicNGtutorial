angular.module("todo")
.controller("appCtrl", function($scope){
  this.todos = ["take a shower", "go to HolaCode", "conquer Angular"];
  this.addTodo = function(){
    this.todos.push($scope.newTodo);
    $scope.newTodo = "";
  }
})
.component("app", {
  controller: "appCtrl",
  templateUrl: "app.html"
})
