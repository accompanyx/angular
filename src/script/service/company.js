angular.module('app').service('companyService',['$http',function($http){
    this.all = function(){
        return $http({
            url:'../data/company.json',
            method:'get',
            cache:true
        }).then(function(res){
            return res.data;
        })
    }
    this.findById = function(id){
        return this.all().then(function(data){
            console.log(data);
            for(var i=0;i<data.length;i++){
                if(data[i].id===id){
                    return data[i];
                }
            }
        })
    }
}])
