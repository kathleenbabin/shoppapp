app.controller('AuthCtrl',AuthCtrl);

function AuthCtrl($state,api){
	var ctrl = this;
	ctrl.state = $state;
	ctrl.api =api;

	ctrl.password = null;
	ctrl.email = null;

	ctrl.auth_btn = 'Continue';

}

AuthCtrl.prototype.login = function(){
	var ctrl = this;

	var payload = {
		email:ctrl.email,
		password:ctrl.password
	}
	ctrl.auth_btn = "Authorizing";
	//make api call
	ctrl.api.request('/users/login',payload,'POST')
	.then(function(res){
		console.log(res);
		//successfull response
		if(res.status == 200){
			//user exists
			if(res.data.user != null){
				localStorage.authToken = res.data.token;
				ctrl.state.go('admin.dash');
			}
		}
		ctrl.auth_btn = "Error";
	},function(){
		//error
		console.log(res);
		ctrl.auth_btn = "Error";
	})
}