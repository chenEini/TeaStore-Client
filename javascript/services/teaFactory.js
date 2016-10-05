angular.module('teaStore').
    factory('TeaFactory', function teaFactory($http, $q){    
        var teaList;
	
        return {            
            getTeas: function(){
                var d = $q.defer();
                if (teaList) {
                    d.resolve(teaList);
                }
                else {
                    $http.get('http://localhost:3000/teas.json').then(
                    function success(response){
                        teaList = response.data;
                        d.resolve(teaList);
                    },
                    function failure(reason){
                        d.reject(reason);
                    });                    
				}
                return d.promise;
			},
            getTeaById: function(teaId){
                var selectedTea;
                
                angular.forEach(teaList, function(value, key){
                    if (value.id === teaId){
                        selectedTea = value;
                        return;
                    }
                });
          
                return selectedTea;
            }
		}
});