(function(){
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',test1Controller);
  test1Controller.$inject=['$scope'];
  function test1Controller($scope){
    $scope.checkIfTooMuch=function(){
      var lunch=$scope.lunch;
      //  $scope.output=null;
   console.log(""+lunch)
    var lunchArr=(lunch)?lunch.split(','):null;
    $scope.output="";
    var flag=0;
    if(!lunch){
        $scope.output='You have not entered any choice for lunch .Please enter'
      }
      else{
      for(var i in lunchArr){
        if(!lunchArr[i] || lunchArr==""){
          flag++;
         console.log("empty item"+i);

         $scope.output+=(flag>1)?"and another at "+i:"There is one empty item at"+i;
       }
      }
//  console.log(lunchArr.length);

       if (lunchArr.length>3) {
        $scope.output+='The enterd items are too many'

      }
      else{
        $scope.output+='Have a nice lunch'
      }
 }
    }

  }
})();
