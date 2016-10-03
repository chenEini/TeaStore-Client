angular.module('teaStore').
    controller('TeaController', ['$scope', '$routeParams', 'items', function($scope, $routeParams, items){
        $scope.teas = items;
        
        $scope.teaId = $routeParams.teaId;
    }]);