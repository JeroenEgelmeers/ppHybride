angular
.module('planningpoker')
.controller('SocketCtrl', ['$scope', '$state', '$ionicScrollDelegate', '$ionicModal', 'Card', 'User', 'Rating', 'Fibinacci_Value', 'Socket', function ($scope, $state, $ionicScrollDelegate, $ionicModal, Card, User, Rating, Fibinacci_Value, Socket)
{
	$scope.card 			= Card;
	$scope.cardOptions  	= Card.getOptions();
	$scope.cardValue 		= Card.getValue();
	$scope.modus 			= Card.getModus();
	$scope.results 			= Card.getResults();

	if (Card.getOptions()) 	{ $scope.cardOptions  	= Card.getOptions(); }
	else
	{
		Fibinacci_Value.find().$promise.then(function (values)
		{
			var cardValues = [];

			for (var i = 0; i < values.length; i++)
			{
				cardValues.push(values[i].value);
			}

			Card.setOptions(cardValues);
			$scope.cardOptions = Card.getOptions();
		});
	}

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
			$("#participants_voted").html(data.voted);
			$("#participants_total").html(data.total);
		});

		Socket.on('issue result', function (data)
		{
			var results = [];

			for (var i = 0; i < data.votes.length; i++)
			{
				results.push({'color': data.votes[i].participant_color, 'name': data.votes[i].participant_name, 'value': data.votes[i].vote});
			}

			Card.setModus(data.modus[0]);
			Card.setResults(results);
			$state.go('app.results');
		});

		Socket.on('whois', function (data)
		{
			Socket.emit('iam', { 'participant_id' : User.getUserId(), 'room_id' : User.getRoomId(), 'participant_name': User.getUsername(), 'participant_color': User.getHexColor() });
		});

		Socket.on('break', function ()
		{
			if (!Card.getVotedCoffee())
			{
				$scope.showCoffeeModal();
			}
		});

		Socket.on('continue', function ()
		{
			Card.setVotedCoffee(false);

			$scope.closeCoffeeModal();
		});

		Socket.on('finished', function ()
		{
			$scope.showFinishedModal();
		});
	});

	$scope.showFinishedModal = function ()
	{
		$scope.finishedModal.show();
	};

	$scope.modalFinishedClose 			= $scope.closeFinishedModal;

	$ionicModal.fromTemplateUrl('templates/finished_modal.html',
	{
		scope 		: $scope,
		animation 	: 'slide-in-up',
		backdropClickToClose: false,
		hardwareBackButtonClose: false
	}).then(function (modal)
	{
		$scope.finishedModal 			= modal;
	});

	$scope.showIssueModal = function ()
	{
		$scope.modalTitle 	= 'Issue info';
		$scope.modalContent = $scope.card.getCurrentIssue().description;
		$scope.issueModal.show();
	};

	$scope.closeIssueModal = function ()
	{
		$scope.issueModal.hide();
	};

	$scope.modalClose 			= $scope.closeIssueModal;

	$ionicModal.fromTemplateUrl('templates/modal.html',
	{
		scope 		: $scope,
		animation 	: 'slide-in-up'
	}).then(function (modal)
	{
		$scope.issueModal 			= modal;
	});

	$scope.showCoffeeModal 	= function ()
	{
		$scope.coffeeModal.show();
	};

	$scope.closeCoffeeModal = function ()
	{
		$scope.coffeeModal.hide();
	};

	$scope.continue 			= function ()
	{
		Socket.emit('continue');
		$scope.closeCoffeeModal();
	};

	$ionicModal.fromTemplateUrl('templates/coffeeModal.html',
	{
		scope 		: $scope,
		animation 	: 'slide-in-up',
		backdropClickToClose: false,
		hardwareBackButtonClose: false
	}).then(function (modal)
	{
		$scope.coffeeModal 			= modal;
	});

	$scope.saveCard = function (newValue)
	{
		$scope.card.setValue(newValue);
	}

	$scope.pickCard = function ()
	{
		var vote = $scope.card.getValue().value;

		if (vote == "Coffee")
		{
			Socket.emit('vote', {'vote': vote.toString(), 'participant_name': User.getUsername(), 'participant_color': User.getHexColor() });
			Card.setVotedCoffee(true);
			$scope.showCoffeeModal();
		}
		else
		{
			var rating = Rating.create({ rating: vote, participantId: User.getUserId(), issueId: $scope.card.getCurrentIssue().id });

			rating.$promise.then(function (data)
			{
				Socket.emit('vote', {'vote': vote.toString(), 'participant_name': User.getUsername(), 'participant_color': User.getHexColor() });

				$state.go('app.yourcard');
			});
		}
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
			$ionicScrollDelegate.scrollTop();
			$("#imageWrapper").parent().css({ "height":"calc(100% - 1px)" });
			$("#imageWrapper").css({ "position":"absolute","left":"0","top":"0","max-width":"100%", "width":"100%", "height":"100%" });
			$("#your-card-image").css({ "width": "100%", "height" : "100%" });
		}

		imageIsFullscreen = !imageIsFullscreen;
	}

	var imageIsFullscreen2 = false;

	$scope.onImageTap2 = function ()
	{
		if (imageIsFullscreen2)
		{
			$("#imageWrapper2").removeAttr("style");
			$("#your-card-image2").removeAttr("style")
		}
		else
		{
			$ionicScrollDelegate.scrollTop();
			$("#imageWrapper2").parent().css({ "height":"calc(100% - 1px)" });
			$("#imageWrapper2").css({ "position":"absolute","left":"0","top":"0","max-width":"100%", "width":"100%", "height":"100%" });
			$("#your-card-image2").css({ "width": "100%", "height" : "100%" });
		}

		imageIsFullscreen2 = !imageIsFullscreen2;
	}

	$scope.showMyCard = function ()
	{
		$state.go('app.resultsyourcard');
	};

	$scope.showResults = function ()
	{
		$state.go('app.results');
	};
}]);