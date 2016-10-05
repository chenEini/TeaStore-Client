angular.module('teaStore').
    directive('teaItem', function(){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                tea: '=',
                addToCart: '='
            },
            templateUrl: 'pages/templates/teaItem.html',
            link: function(scope, element, attrs){
            }
        }
    });