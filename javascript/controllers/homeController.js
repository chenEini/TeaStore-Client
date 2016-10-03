angular.module('teaStore').
    controller('HomeController', ['$scope', 'items',function($scope, items){
        $scope.teas = items;
    }]);