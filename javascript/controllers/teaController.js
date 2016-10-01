angular.module('teaStore').
    controller('TeaController', ['$scope', '$routeParams', function($scope, $routeParams){
        $scope.teaId = $routeParams.teaId;
        
 
    }]);