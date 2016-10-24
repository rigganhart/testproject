let app = angular.module('test',[]);



app.controller('itemController',['$scope','itemService', function($scope, itemService){
$scope.allItems = itemService.getAllItems();

$scope.showInfo = function(id,name,sender,status,message){
  $scope.moreName = name;
  $scope.moreId = id;
  $scope.moreSender = sender;
  $scope.moreStatus = status;
  $scope.moreMessage = message;
}
}]);

app.factory('itemService',['$http',function($http){
let allItemsList =[];

  return{
  getAllItems : function(){

    $http({
      method:'Get',
      url:'https://z1yhjmvqc2.execute-api.us-east-1.amazonaws.com/latest/documents?sender=kris@beamreachsoftware.com&start=2016-08-10&end=2016-08-13'
    }).then(function(response){
      console.log("all Items", response);
      angular.copy(response.data.Items, allItemsList)
    })
    return allItemsList
  },
}
}]);
