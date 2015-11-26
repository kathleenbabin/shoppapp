'use strict';

var app = angular.module('shopApp',[
		'ui.router',
		'angularFileUpload',
	]);


app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('shop',{
		url:'/',
		templateUrl:'logic/partials/shop-main.html',
		controller:'ShopCtrl as ctrl',
		resolve:{
			products:function(productSrv){
				return productSrv.getProducts();
			}
		}
	})
	//WRITE A STATE CALLED ADMIN
	//IT SHOULD LOOK SIMILIAR TO SHOP
	//BUT IT SHOULD LOAD THE admin.html PARTIAL
	/*
		.state('admin',{

		});
	*/

	.state('admin.dash',{
		url:'/dashboard',
		templateUrl:'logic/partials/admin-dash.html'
	})

	.state('admin.add_product',{
		url:'/add_product',
		controller:'ProductCtrl as ctrl',
		templateUrl:'logic/partials/admin-add-product.html'
	})

	.state('admin.edit_product',{
		url:'/edit_product/:productId',
		controller:'ProductCtrl as ctrl',
		templateUrl:'logic/partials/admin-edit-product.html',
	})

	.state('auth',{
		url:'/auth',
		templateUrl:'logic/partials/auth-main.html',
		controller:'AuthCtrl as ctrl',
	});
});
