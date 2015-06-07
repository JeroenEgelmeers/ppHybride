angular.module('planningpoker', ['ionic', 'lbServices'])

.run(function ($ionicPlatform)
{
	$ionicPlatform.ready(function ()
	{
		if (window.cordova && window.cordova.plugins.Keyboard)
		{
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
	
		if (window.StatusBar)
		{
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider)
{
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
  	cache: false,
	url: "/yourcard",
	views: {
	  'menuContent': {
		templateUrl: "templates/yourcard.html",
		  controller: 'SocketCtrl'
	  }
	}
  })

  .state('app.results', {
  	cache: false,
	url: "/results",
	views: {
	  'menuContent': {
		templateUrl: "templates/results.html",
		  controller: 'SocketCtrl'
	  }
	}
  })

  .state('app.resultsyourcard', {
  	cache: false,
	url: "/resultsyourcard",
	views: {
	  'menuContent': {
		templateUrl: "templates/resultsyourcard.html",
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
