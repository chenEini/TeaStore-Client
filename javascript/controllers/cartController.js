angular.module('teaStore').
    controller('CartController', ['$scope', 'cartItems', 'CartFactory', '$rootScope', function($scope, cartItems, CartFactory, $rootScope){
        $scope.cartItems = cartItems;
        $scope.addToCart = false;
		$scope.removeItem = function(tea){		
			var index = $scope.cartItems.indexOf(tea);
			$scope.cartItems.splice(index, 1);
			CartFactory.removeItem(tea.item.id);
			$rootScope.cartAmount = CartFactory.getCartAmount();
		}
		
		$scope.updateQty = function(tea){
			CartFactory.updateItemQty(tea);
		}
    }]);