angular.module('teaStore').
    directive('teaItem', function(){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                item: '='
            },
            templateUrl: 'pages/templates/teaItem.html',
            link: function(scope, element, attrs){
                
            }
        }
    });