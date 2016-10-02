angular.module('teaStore').
    controller('AllTeasController', ['$scope', 'Tea', function($scope, Tea){
        Tea.getTeas().then(function(data){
            $scope.allTeas.products = data;
        }, function(error){
            console.log(error);
        });
    }]);