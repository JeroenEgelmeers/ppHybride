angular
.module('planningpoker')
.controller('HomeCtrl', ['$scope', '$state', '$ionicScrollDelegate', 'Card', function($scope, $state, $ionicScrollDelegate, Card) {
	$scope.card 			= Card;
	$scope.cardOptions  	= Card.getOptions();
	$scope.cardValue 		= Card.getValue();

	$scope.saveCard = function (newValue)
	{
		$scope.card.setValue(newValue);
	}

	$scope.pickCard = function ()
	{
		$state.go('app.yourcard');
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

	$scope.colors ={"data":[{"row":[{"color":"#822111"},{"color":"#AC2B16"},{"color":"#CC3A21"},{"color":"#E66550"}]},{"row":[{"color":"#EFA093"},{"color":"#F6C5BE"},
	{"color":"#A46A21"},{"color":"#CF8933"}]},{"row":[{"color":"#EAA041"},{"color":"#FFBC6B"},{"color":"#FFD6A2"},{"color":"#FFE6C7"}]},{"row":[{"color":"#AA8831"},
	{"color":"#D5AE49"},{"color":"#F2C960"},{"color":"#FCDA83"}]},{"row":[{"color":"#FCE8B3"},{"color":"#FEF1D1"},{"color":"#076239"},{"color":"#0B804B"}]},
	{"row":[{"color":"#149E60"},{"color":"#44B984"},{"color":"#89D3B2"},{"color":"#B9E4D0"}]},{"row":[{"color":"#1A764D"},{"color":"#2A9C68"},{"color":"#3DC789"},
	{"color":"#68DFA9"}]},{"row":[{"color":"#A0EAC9"},{"color":"#C6F3DE"},{"color":"#1C4587"},{"color":"#285BAC"}]},{"row":[{"color":"#3C78D8"},{"color":"#6D9EEB"},
	{"color":"#A4C2F4"},{"color":"#C9DAF8"}]},{"row":[{"color":"#41236D"},{"color":"#653E9B"},{"color":"#8E63CE"},{"color":"#B694E8"}]},{"row":[{"color":"#D0BCF1"},
	{"color":"#E4D7F5"},{"color":"#83334C"},{"color":"#B65775"}]},{"row":[{"color":"#E07798"},{"color":"#F7A7C0"},{"color":"#FBC8D9"},{"color":"#FCDEE8"}]},
	{"row":[{"color":"#000000"},{"color":"#434343"},{"color":"#666666"},{"color":"#999999"}]},{"row":[{"color":"#CCCCCC"},{"color":"#EFEFEF"}]}]};

	$scope.chosenColor;
 
	$scope.submitUsername = function ()
	{
		// Save to current Session.
		$state.go('app.card');
	};
 
	$scope.submitColor = function ()
	{
		$scope.chosenColor =
		// Save to current Session.
		$state.go('app.username');
	};

}]);