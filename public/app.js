(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])