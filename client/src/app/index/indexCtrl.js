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
