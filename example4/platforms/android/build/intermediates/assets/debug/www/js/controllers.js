angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.vibrate = function () {

        navigator.vibrate(200);

  };

  $scope.toast = function () {

        window.plugins.toast.show("Hello", 'short', 'center');
        
  };

  $scope.simpledial = function () {

        
        navigator.notification.alert(
             'This is a notification!',  // message
              0,                         // callback
              'Notification',           // title
              'Dismiss'
       );
        
  };

  $scope.compoundial = function () {

    function onConfirm(buttonIndex) {
          alert('You selected button ' + buttonIndex);
    }

    navigator.notification.confirm(
          'Do you want to proceed?', // message
          onConfirm,            // callback to invoke with index of button pressed
          'Game Over',           // title
          ['Yes','No','Cancel']     // buttonLabels
    );
        
  };


  $scope.promptdial = function () {

    function onPrompt(results) {
          alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

    navigator.notification.prompt(
          'Please enter your name',  // message
          onPrompt,                  // callback to invoke
          'Registration',            // title
          ['Ok','Exit'],             // buttonLabels
          ''                 // defaultText
    );
        
  };


  $scope.torch = function () {

      window.plugins.flashlight.toggle(
           function() {}, // optional success callback
           function() { alert("I do not have a flashlight"); }, // optional error callback
           {intensity: 0.3} // optional as well
      );

        
  };


  $scope.soundalert = function () {

        navigator.notification.beep(3);

  };

}])
   
