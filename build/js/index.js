
angular.module('app',['ui.router']);


angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'//命名规则，页面名+ctrl
    })
    $urlRouterProvider.otherwise('main');
}])


angular.module('app').controller('mainCtrl',['$scope',function($scope){

}])


angular.module('app').directive('appHeader',[function(){
    return {
        restrict:'E',
        replace:true,
        templateUrl:'view/template/header.html'
    }
}])
