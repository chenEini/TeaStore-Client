angular.module('teaStore').
    controller('CartController', ['$scope', 'teaList', 'CartFactory', '$rootScope', function($scope, teaList, CartFactory, $rootScope){
        $scope.teas = teaList;
        $scope.addToCart = false;
		$scope.removeItem = function(tea){		
			var index = $scope.teas.indexOf(tea);
			$scope.teas.splice(index, 1);
			CartFactory.removeItem(tea.item.id);
			$rootScope.cartAmount = CartFactory.getCartAmount();
		}
    }]);