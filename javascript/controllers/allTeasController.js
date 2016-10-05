angular.module('teaStore').
    controller('AllTeasController', ['$scope', 'teaList', function($scope, teaList){
        $scope.teas = teaList;
        $scope.orderbyfilter = "";
        $scope.addToCart = true;
    }]);