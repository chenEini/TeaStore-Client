(function(){
    
    var app = angular.module('teaStore',[]);
    
    app.controller('TeaStoreController',function(){
        this.products = teas;     
    });
    
    var teas = [
    {
        name : 'greentea',
        price : 3.5,
        description : 'The best tea ever',
        canPurchase :true,
    },
    {
        name : 'blacktea',
        price : 2.5,
        description : 'From Paris',
        canPurchase :true,
    },
    {
        name : 'kamomiltea',
        price : 4.0,
        description : 'From India, yellow seed',
        canPurchase :true,    
    }];
    
    
    
    
    
})();
