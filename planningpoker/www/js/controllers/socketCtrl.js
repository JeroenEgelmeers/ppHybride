angular
.module('planningpoker')
.controller('SocketCtrl', ['$scope', '$state', '$ionicScrollDelegate', 'Card', 'User', 'Rating', 'Socket', function ($scope, $state, $ionicScrollDelegate, Card, User, Rating, Socket)
{
	$scope.card 			= Card;
	$scope.cardOptions  	= Card.getOptions();
	$scope.cardValue 		= Card.getValue();
	
	Socket.on('connect', function ()
	{
		var args 	= arguments;

		Socket.on('new issue', function (data)
		{
			$scope.card.setCurrentIssue(data);
			$state.go('app.card');
		});

		Socket.on('voted', function (data)
		{
			//nog niet geimplementeerd door de server
			console.log('voted', data);
		});

		Socket.on('issue result', function (data)
		{
			$state.go('app.results');
		});

		Socket.on('whois', function (data)
		{
			Socket.emit('iam', { 'participant_id' : User.getUserId(), 'room_id' : User.getRoomId() });
		});
	});

	$scope.saveCard = function (newValue)
	{
		$scope.card.setValue(newValue);
	}

	$scope.pickCard = function ()
	{
		var vote = $scope.card.getValue();

		var rating = Rating.create({ rating: vote, participantId: User.getUserId(), issueId: $scope.card.getCurrentIssue().id });

		rating.$promise.then(function (data)
		{
			Socket.emit('vote', { 'vote' : vote });
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