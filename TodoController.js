angular.module('todoApp', ["ngMaterial", "firebase"])
  .controller('TodoController',function($scope, $firebaseObject ) {
        var ref = new Firebase("https://mytodoappfirebase.firebaseio.com/");
            $scope.todos = [
      {text:'WakeUp for Fajar', done:true},
      {text:'Going to office', done:false}];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  })
  .config(function($mdThemingProvider, $mdIconProvider){

      $mdIconProvider
          .defaultIconSet("./svg/avatars.svg", 128)
          .icon("menu"       , "./svg/menu.svg"        , 24)
          .icon("add"       , "./svg/add.svg"        , 48)
          .icon("share"      , "./svg/share.svg"       , 24)
          .icon("google_plus", "./svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./svg/twitter.svg"     , 512)
          .icon("phone"      , "./svg/phone.svg"       , 512);

          $mdThemingProvider.theme('default')
              .primaryPalette('blue')
              .accentPalette('red');

    });