(function(){
    
    angular.module('teaStore',['ngRoute']).
        config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');

          $routeProvider.
            when('/', {
              templateUrl: 'pages/home.html',
              controller: 'HomeController',
              controllerAs: 'homeCtrl'
            }).
            when('/about', {
              templateUrl: 'pages/about.html',
              controller: 'AboutController'
          }).
            when('/allTeas', {
              templateUrl: 'pages/allTeas.html',
              controller: 'AllTeasController',
              controllerAs: 'allTeas'
            }).
          when('/tea/:teaId', {
              templateUrl: 'pages/tea.html',
              controller: 'TeaController',
              controllerAs: 'teaCtrl'
          })
          .otherwise('/');
        }
      ]);
})();
