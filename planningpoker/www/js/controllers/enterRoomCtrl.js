angular
.module('planningpoker')
.controller('EnterRoomCtrl', ['$scope', '$state', '$http', 'API', 'Session', function ($scope, $state, $http, API, Session)
{
	$scope.enterRoom = function (roomID)
	{

		var currentRooms;
		console.log(roomID);
		var sessions = Session.find({filter:{where: { key : parseInt(roomID) } } },
			function (list)
		{
			console.log('got list');
			console.log(list);
		},
		function (errorResponse)
		{
			console.log('got error');
			console.log(errorResponse);;
		});

		console.log(sessions);
		/*Session.find({where: {key:roomID}, limit: 3}, function(err, data)
		{
			console.log(err);
			console.log(data);
		});
		*///console.log(Session.find());
		//console.log(API);
		//console.log('getting data from:' + API.sessionsURL);

		/*$http.get(API.sessionsURL).then(function (response)
		{
			//console.log('got data');
			//console.log(response.data);
		});
*/
		//console.log(roomID);
		//$state.go('app.color');
	};
}]);