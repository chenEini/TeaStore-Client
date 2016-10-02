angular.module('teaStore').
    controller('TeaController', ['$scope', '$routeParams', 'Tea', function($scope, $routeParams, Tea){
        Tea.getTeas().then(function(data){
            this.products = data;
        }, function(error){
            console.log(error);
        });
        
        $scope.teaId = $routeParams.teaId;
        
 
    }]);