angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  
  $scope.mdl = {};   // We initialize the $scope mdl manager

  $scope.reset = function () {

       $scope.mdl.toggle1 = false;
       $scope.mdl.range1 = 50;
       $scope.mdl.radio1 = 0;
       $scope.mdl.chkbx1 = false;
       $scope.mdl.chkbx2 = false;

  };
 

}])
 