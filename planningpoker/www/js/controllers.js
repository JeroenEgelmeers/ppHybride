angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope, $state) {
$scope.enterRoom = function ()
{
  // Save to current Session.
  $state.go('app.username');
};

$scope.pickCard = function ()
{
  $state.go('app.yourcard');
}

})

.controller('HomeCtrl', function($scope, $state) {
 $scope.enterRoom = function ()
  {
    // Save to current Session.
    $state.go('app.username');
  };
})

.controller('SelectedCardCntrl', function($scope, $ionicScrollDelegate)
{
  var imageIsFullscreen = false;

  $scope.onImageTap = function ()
  {
  if (imageIsFullscreen)
  {
    $("#imageWrapper").removeAttr("style");
    $("#your-card-image").removeAttr("style")
  }
  else
  {
    $ionicScrollDelegate.scrollTop()
    $("#imageWrapper").parent().css({ "height":"calc(100% - 1px)" });
    $("#imageWrapper").css({ "position":"absolute","left":"0","top":"0","max-width":"100%", "width":"100%", "height":"100%" });
    $("#your-card-image").css({ "width": "100%", "height" : "100%" });
  }

  imageIsFullscreen = !imageIsFullscreen;
  };
})