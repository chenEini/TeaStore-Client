angular.module('teaStore').
    directive('teaItem', function(){
        return {
            restrict: 'E',
            scope:{
                product: '='
            },
            templateUrl: 'pages/templates/teaItem.html',
            link: function(scope, element, attrs){
                
            }
        }
    });