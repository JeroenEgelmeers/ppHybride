angular
.module('planningpoker')
.controller('SocketCtrl', ['$scope', 'Socket', function ($scope, Socket)
{
	console.log('sockets');
	console.log(Socket);

	Socket.on('connect', function (data)
	{
		console.log('connection');
	});

	Socket.on('new issue', function (data)
	{
		console.log('got data');
		console.log(data);
	});
}]);