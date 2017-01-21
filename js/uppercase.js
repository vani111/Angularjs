(function (){
  angular.module('AngularApp',[])
  .controller('DIController',DIControleer);
  //DIControleer.$inject=['$scope','$filter'];
  function DIControleer($scope,$filter){
    $scope.name="Coursera";
    $scope.upper=function(){
      var converToUpper=$filter('uppercase');
      $scope.name=converToUpper($scope.name);
    };
  }
})();

//minifier version doesnot work
// !function(){function n(n,r){n.name="Coursera",n.upper=function(){var e=r("uppercase");
// n.name=e(n.name)}}angular.module("AngularApp",[]).controller("DIController",n)}();
// method 1:inline array of elements
// (function (){
//   angular.module('AngularApp',[])
//   .controller('DIController',[$scope,$filter,DIControleer]);
//   function DIControleer($scope,$filter){
//     $scope.name="Coursera";
//     $scope.upper=function(){
//       var converToUpper=$filter('uppercase');
//       $scope.name=converToUpper($scope.name);
//     };
//   }
// })();
//method 1:minified version
// !function(){function n(n,e){n.name="Coursera",n.upper=function(){var r=e("uppercase");
// n.name=r(n.name)}}angular.module("AngularApp",[]).controller("DIController",['$scope','$filter',n])}();
//method 2 :injecting $scope,$filter into controller function object
// (function (){
//   angular.module('AngularApp',[])
//   .controller('DIController',DIControleer);
//   DIControleer.$inject=['$scope','$filter'];
//   function DIControleer($scope,$filter){
//     $scope.name="Coursera";
//     $scope.upper=function(){
//       var converToUpper=$filter('uppercase');
//       $scope.name=converToUpper($scope.name);
//     };
//   }
// })();
!function(){function n(n,e){n.name="Coursera",n.upper1`\\
;'
'=function(){var r=e("uppercase");
n.name=r(n.name)}}angular.module("AngularApp",[]).controller("DIController",n),n.$inject=["$scope","$filter"]}();
