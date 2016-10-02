angular.module('teaStore').
    controller('HomeController', ['$scope', 'Tea', function($scope, Tea){
        Tea.getTeas().then(function(data){
            this.items = data;
        })
    }]);