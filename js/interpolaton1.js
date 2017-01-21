(function(){
  //use strict
  angular.module("InterpolationApp",[])
  .controller("ControllerInter",controllerInter);
  controllerInter.$inject=['$scope','$filter'];
  function controllerInter($scope,$filter){
    $scope.name="coursera";
    $scope.sayMessage=function(){
      return("coursera likes web technolies");
    };
    $scope.feed=function(){
      $scope.stateOfBeing='fed'
    }
   $scope.stateOfBeing="hungry"

  }

})();
