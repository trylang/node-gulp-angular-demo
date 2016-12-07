// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('tmsApp', ['ngRoute']).config([
    '$routeProvider',
    function($routeProvider) {
      return $routeProvider.when('/login', {
        templateUrl: '/app/login/index.html',
        controller: 'LoginCtrl'
      }).when('/register', {
        templateUrl: '/app/register/index.html',
        controller: 'RegisterCtrl'
      }).when('/', {
        templateUrl: '/app/index/index.html',
        controller: 'IndexCtrl'
      });
    }
  ]).run([
    '$location',
    function($location) {
      return $location.path('/login').replace();
    }
  ]);

}).call(this);

//# sourceMappingURL=index.js.map
;
// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('tmsApp').controller('IndexCtrl', [
    '$scope', '$location', '$rootScope',
    function($scope, $location, $rootScope) {
      $scope.task = {
        description: ''
      };
      $scope.taskList = [];
      return $scope.addTask = function() {
        var task;
        task = angular.copy($scope.task);
        task.checked = false;
        task.status = 'InProgress';
        $scope.taskList.push(task);
        return $scope.task.description = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=indexCtrl.js.map
;
// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('tmsApp').controller('LoginCtrl', [
    '$scope', '$location',
    function($scope, $location) {
      $scope.userEntity = {
        username: '',
        password: ''
      };
      $scope.rememberMe = false;
      return $scope.doLogin = function() {
        console.log($scope.userEntity);
        return $location.path('/').replace();
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=loginCtrl.js.map
;
// Generated by CoffeeScript 1.10.0
(function() {
  angular.module('tmsApp').controller('RegisterCtrl', [
    '$scope',
    function($scope) {
      $scope.userEntity = {
        username: '',
        password: '',
        password2: ''
      };
      return $scope.doRegister = function() {
        return console.log($scope.userEntity);
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=registerCtrl.js.map
