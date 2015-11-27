app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl($scope,$state,$stateParams,products,productSrv){
	var ctrl = this;
	ctrl.state = $state;
	ctrl.productSrv = productSrv;

	console.log(localStorage.authToken);
	//check for token first
	if(localStorage.authToken == null || localStorage.authToken == undefined){
		$state.go('auth');
	}

	ctrl.products = products
	if(ctrl.products.length > 0 ){
		ctrl.is_products = true;
	}

	//watch for updates to products object
	$scope.$watch(function(){
    	return productSrv.products;
	}, function (newValue) {
	    ctrl.products = productSrv.products;
	});

}


AdminCtrl.prototype.editProduct = function(product){
	var ctrl = this;

	ctrl.state.go('admin.edit_product',{productId:product.id});
}

/*
	WRITE A LOGOUT FUNCTION THAT SENDS THE USER BACK TO
	THE AUTH PAGE AND DELTES THE TOKEN FROM LOCAL STORAGE
*/
AdminCtrl.prototype.logout = function(){

	localStorage.removeItem('authToken');
  	ctrl.state.go('auth');


	// if(localStorage.authToken == null || localStorage.authToken == undefined){
	// 	$state.go('auth');
	// }
}
