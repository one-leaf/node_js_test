/**
 * Created by oneleaf on 15/10/13.
 */
angular.module('myApp',[]).controller('myController',function($scope){
    $scope.colors=['red','green','blue'];
    $scope.myStyle={'background-color':'blue'};
    $scope.days=['星期一','星期二','星期三','星期四','星期五'];
    $scope.msg="Message from model";
})