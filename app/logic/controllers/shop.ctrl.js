app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl($scope,products,api,productSrv){
	var ctrl = this;
	//dependencies
	ctrl.api = api;

	ctrl.products = products;

	setTimeout(ctrl.initUI);

	$scope.$watch(function(){
    	return productSrv.products;
	}, function (newValue) {
	    ctrl.products = productSrv.products;
	    //ctrl.initUI();
	});
	//ctrl.initUI();
}
ShopCtrl.prototype.initUI = function(){
	;!function(e){"use strict";function n(e,n){var t=!0;return function(i){t&&(t=!1,setTimeout(function(){t=!0},n),e(i))}}function t(){imagesLoaded(y,function(){i(),o(),r(),classie.remove(y,"grid--loading")})}function i(){m.forEach(function(e){var n=new Flickity(e,{prevNextButtons:!1,wrapAround:!0,cellAlign:"left",contain:!0,resize:!1});v.push(n)})}function o(){l=new Isotope(y,{isResizeBound:!1,itemSelector:".grid__item",percentPosition:!0,masonry:{columnWidth:".grid__sizer"},transitionDuration:"0.6s"})}function r(){_.forEach(function(e){e.addEventListener("click",function(){classie.remove(e.parentNode.querySelector(".filter__item--selected"),"filter__item--selected"),classie.add(e,"filter__item--selected"),l.arrange({filter:e.getAttribute("data-filter")}),a(),l.layout()})}),e.addEventListener("resize",n(function(e){a(),l.layout()},50)),[].slice.call(y.querySelectorAll(".grid__item")).forEach(function(e){e.querySelector(".action--buy").addEventListener("click",c)})}function c(){classie.add(g,"cart--animate"),setTimeout(function(){A.innerHTML=Number(A.innerHTML)+1},200),f(A,function(){classie.remove(g,"cart--animate")})}function a(){for(var e=0,n=v.length;n>e;++e)v[e].resize()}var l,u={animations:Modernizr.cssanimations},s={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},d=s[Modernizr.prefixed("animation")],f=function(e,n){var t=function(e){if(u.animations){if(e.target!=this)return;this.removeEventListener(d,t)}n&&"function"==typeof n&&n.call()};u.animations?e.addEventListener(d,t):t()},m=[].slice.call(document.querySelectorAll(".slider")),v=[],y=document.querySelector(".grid"),_=[].slice.call(document.querySelectorAll(".filter > button")),g=document.querySelector(".cart"),A=g.querySelector(".cart__count");t()}(window);
}