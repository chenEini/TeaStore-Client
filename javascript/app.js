(function(){
    
    angular.module('teaStore',['ngRoute']).
        config(['$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
              when('/', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl',
                resolve: {
                    teaList: function(TeaFactory){
                        return TeaFactory.getTeas();
                    }
                }
              }).
              when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'AboutController',
                controllerAs: 'aboutCtrl'
              }).
              when('/allTeas', {
                templateUrl: 'pages/allTeas.html',
                controller: 'AllTeasController',
                controllerAs: 'allTeasCtrl',
                resolve: {
                    teaList: function(TeaFactory){
                        return TeaFactory.getTeas();
                    }
                }
              }).
              when('/tea/:teaId', {
                templateUrl: 'pages/tea.html',
                controller: 'TeaController',
                controllerAs: 'teaCtrl',
                resolve: {
                    teaList: function(TeaFactory){
                        return TeaFactory.getTeas();
                    }
                }
              }).
              when('/cart', {
                  templateUrl: 'pages/cart.html',
                  controller: 'CartController',
                  controllerAs: 'cartCtrl',
                  resolve: {
                      teaList: function(CartFactory){
                          return CartFactory.getCartItems();
                      }
                  }         
              })
              .otherwise('/');
        }
      ]);
    
})();
