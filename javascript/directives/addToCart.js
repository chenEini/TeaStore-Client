angular.module('teaStore').
    directive('addToCart', ['CartFactory', function(CartFactory){
        return {
            restrict: 'E',
            replace: true,
            scope:{
                addToCart: '=',
                tea: '='
            },
            templateUrl: 'pages/templates/addToCart.html',
            link: function(scope, element, attrs){
                element.bind('click', function(){
                    CartFactory.addCartItem(scope.tea);
                });
            }
        }
    }]);