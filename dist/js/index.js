angular.module("app",["ui.router"]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(e,r){e.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}),r.otherwise("main")}]),angular.module("app").controller("mainCtrl",["$scope",function(e){}]),angular.module("app").directive("appHeader",[function(){return{restrict:"E",replace:!0,templateUrl:"view/template/header.html"}}]);