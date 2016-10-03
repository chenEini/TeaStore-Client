angular.module('teaStore').
    controller('AllTeasController', ['$scope', 'items', function($scope, items){
        $scope.teas = items;
        /*TeaFactory.getTeas().then(function(data){
            $scope.teas = data;            
        });*/
        $scope.orderbyfilter = ""; 
    }]);