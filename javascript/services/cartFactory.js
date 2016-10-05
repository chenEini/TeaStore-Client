angular.module('teaStore').
    factory('CartFactory', function cartFactory(){
        return {            
            getCartItems: function(){
				var items = [];
				
				for (var i=0; i< sessionStorage.length; i++){
					items.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
				}				
                return items;                
            },
            addCartItem: function(item){
				var itemInCart = sessionStorage.getItem(item.id);
				
				if (itemInCart === null){
					sessionStorage.setItem(item.id, JSON.stringify({item: item, qty: 1}));				
				}
				else{
					sessionStorage.setItem(item.id, JSON.stringify({item: item, qty: JSON.parse(itemInCart).qty + 1}));
				}	
            },
			removeItem: function(id){
				sessionStorage.removeItem(id);
			},
			getCartAmount: function(){
				return sessionStorage.length;
			}
        }
});
