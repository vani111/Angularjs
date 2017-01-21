(function(){

    //document.addEventListener("DOMContentLoaded",function(event){
  angular.module("testAngularApp",[])
  .controller("appController",controllerFunction);
//});

  function controllerFunction($scope){
    $scope.name="Coursera";
    $scope.TotalValue=0;
    $scope.keyup=function (){
      $scope.TotalValue=calculateNumericvalue($scope.name);
    };
  }
    function calculateNumericvalue(name){
      var totalvalue=0;
      for(var i=0;i<name.length;i++){
        totalvalue+=name.charCodeAt(i);
      }
      return(totalvalue);
    }

  }
)();
