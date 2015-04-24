angular
.module('planningpoker')
.controller('EnterRoomCtrl', ['$scope', '$state', '$http', 'API', function ($scope, $state, $http, API)
{
	$scope.enterRoom = function (roomID)
	{
		var currentRooms;

		console.log(API);
		console.log('getting data from:' + API.sessionsURL);

		$http.get(API.sessionsURL).then(function (response)
		{
			console.log('got data');
			console.log(response.data);
		});

		console.log(roomID);
		$state.go('app.color');
	};
}]);