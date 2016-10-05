angular.module('teaStore').
    factory('CartFactory', function cartFactory(){    
        var cartItems=[];
    
        return {            
            getCartItems: function(){
                return cartItems;          
                //return $window.sessionStorage.getItem();
                
            },
            addCartItem: function(item){
                cartItems.push(item); 
                //$window.sessionStorage.setItem(item.name,item);
            }
        }
});
