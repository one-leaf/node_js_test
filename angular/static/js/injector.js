/**
 * Created by oneleaf on 15/10/10.
 */
var myMod=angular.module("myMod",[]);
myMod.value("modMsg","Hello from my Module");
myMod.controller("controllerB",["$scope","modMsg",function($scope,msg){
    $scope.message=msg;
}])

var myApp=angular.module('myApp',['myMod']);
myApp.value('appMsg','Hello from myApp');
myApp.controller('controllerA',['$scope','appMsg',function($scope,msg){
    $scope.message=msg;
}])