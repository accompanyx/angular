
angular.module('app').controller('loginCtrl',['$scope',function($scope){
    $scope.submit = function(){
        console.log($scope.user);
    }
}])
