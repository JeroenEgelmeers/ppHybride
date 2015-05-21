// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('planningpoker', ['ionic', 'lbServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
	// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	// for form inputs)
	if (window.cordova && window.cordova.plugins.Keyboard) {
	  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	}
	if (window.StatusBar) {
	  // org.apache.cordova.statusbar required
	  StatusBar.styleDefault();
	}
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

  .state('app', {
	url: "/app",
	abstract: true,
	templateUrl: "templates/menu.html"
  })

  .state('app.room', {
	url: "/room",
	views: {
	  'menuContent': {
		templateUrl: "templates/room.html",
		  controller: 'EnterRoomCtrl'
	  }
	}
  })

  .state('app.color', {
	url: "/color",
	views: {
	  'menuContent': {
		templateUrl: "templates/color.html",
		  controller: 'UserCtrl'
	  }
	}
  })

  .state('app.username', {
	url: "/username",
	views: {
	  'menuContent': {
		templateUrl: "templates/username.html",
		  controller: 'UserCtrl'
	  }
	}
  })

  .state('app.wait', {
	url: "/wait",
	views: {
	  'menuContent': {
		templateUrl: "templates/wait.html",
		  controller: 'SocketCtrl'
	  }
	}
  })

  .state('app.card', {
	url: "/card",
	views: {
	  'menuContent': {
		templateUrl: "templates/card.html",
		  controller: 'SocketCtrl'
	  }
	}
  })

  .state('app.yourcard', {
	url: "/yourcard",
	views: {
	  'menuContent': {
		templateUrl: "templates/yourcard.html",
		  controller: 'SocketCtrl'
	  }
	}
  })

  .state('app.results', {
	url: "/results",
	views: {
	  'menuContent': {
		templateUrl: "templates/results.html",
		  controller: 'SocketCtrl'
	  }
	}
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/room');

  $ionicConfigProvider.navBar.alignTitle('left');
  
}).config(function (LoopBackResourceProvider)
{
	LoopBackResourceProvider.setUrlBase("http://p-poker.herokuapp.com" + "/api");
});
