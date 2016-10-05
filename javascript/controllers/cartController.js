angular.module('teaStore').
    controller('CartController', ['$scope', 'teaList', function($scope, teaList){
        $scope.teas = teaList;
        $scope.addToCart = false;
    }]);