angular
.module('planningpoker')
.controller('SocketCtrl', ['$scope', '$state', '$ionicScrollDelegate', 'Card', 'UserColors', 'User', 'Rating', 'Socket', function ($scope, $state, $ionicScrollDelegate, Card, UserColors, User, Rating, Socket)
{
	$scope.card 			= Card;
	$scope.cardOptions  	= Card.getOptions();
	$scope.cardValue 		= Card.getValue();
	
	Socket.on('new issue', function (data)
	{
		if ($scope.card.getCurrentIssue() == null)
		{
			$scope.card.setCurrentIssue(data);
			$state.go('app.card');
		}
	});

	Socket.on('results', function (data)
	{
		//jammer dat web niet doorwerkte afgelpen weken...
		//anders was hier een geweldige websocket...
	});

	$scope.saveCard = function (newValue)
	{
		$scope.card.setValue(newValue);
	}

	$scope.pickCard = function ()
	{
		var rating = Rating.create({ rating:$scope.card.getValue(), participantId: User.getUserId(), issueId: $scope.card.getCurrentIssue().id });

		rating.$promise.then(function (data)
		{
			$state.go('app.yourcard');
		});
	}

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

	}
}]);