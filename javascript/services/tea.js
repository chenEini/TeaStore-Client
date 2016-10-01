angular.module('teaStore').
    factory('Tea', function teaFactory($http, $q){    
        var items;
    
        return {            
            getTeas: function(){
                var d = $q.defer();
                if (items) {
                    d.resolve(items);
                }
                else {
                    $http.get('http://localhost:3000/teas.json').then(
                    function success(response){
                        console.log(response);
                        items = response.data.data;
                        d.resolve(items);
                    },
                    function failure(reason){
                        d.reject(reason);
                    });                    
                } 
                return d.promise;
            }
        }
});