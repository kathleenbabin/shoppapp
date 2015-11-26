app.controller('ProductCtrl',ProductCtrl);

function ProductCtrl($scope,$stateParams,productSrv,FileUploader){
	var ctrl = this
	ctrl.productSrv = productSrv;
	ctrl.uploader = new FileUploader();
	ctrl.categories = [
		{label:'Jackets',value:'jackets'},
		{label:'Shirts',value:'shirts'},
		{label:'Pants',value:'pants'},
		{label:'Shoes',value:'shoes'},
		{label:'Accessories',value:'accessories'},
	];
	
	ctrl.product = {};
	ctrl.product_update_btn = 'Update Product';
	ctrl.product_delete_btn = 'Remove Product';
	


	if($stateParams.productId != undefined){
		productSrv.getProduct($stateParams.productId)
		.then(function(res){
			console.log(res);
			//ctrl.processProduct(res.data.product[0]);
			ctrl.product = res.data.product;
		})
	}

}

ProductCtrl.prototype.addProduct = function(){
	var ctrl = this;

	var product = {
		name:ctrl.name,
		image:ctrl.image,
		description:ctrl.description,
		category:ctrl.category,
		price:ctrl.price,
		quantity:ctrl.quantity,
	}
	
	//CALL API TO ADD PRODUCT
}

ProductCtrl.prototype.updateProduct = function(){
	var ctrl = this;

	//CREATE PRODUCT AND SEND TO UPDATE

	ctrl.productSrv.updateProduct(product,ctrl.product.id);
}

ProductCtrl.prototype.deleteProduct = function(){
	var ctrl = this;

	ctrl.product_delete_btn = 'Removing';
	//DELETE PRODUCT CODE
}



