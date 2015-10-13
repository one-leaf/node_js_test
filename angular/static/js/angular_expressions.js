/**
 * Created by oneleaf on 15/10/12.
 */
angular.module('myApp',[]).
    controller('myController',function($scope){
        $scope.first='Thorin';
        $scope.last='Oakenshield';
        $scope.newFirst='Gandalf';
        $scope.newLast='Greyhme';
        $scope.combine=function(fName,lName){
            return fName+' '+lName;
        };
        $scope.setName=function(fName,lName){
            $scope.first=fName;
            $scope.last=lName;
        };
    })


