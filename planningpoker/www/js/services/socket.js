angular
.module('planningpoker')
.factory('Socket', function ($rootScope)
{
	var baseUrl		= "http://p-poker.herokuapp.com:3000";
	var socket 		= io.connect(baseUrl);

	return {
		on 		: function (eventName, callback)
		{
			socket.on(eventName, function ()
			{  
				console.log('got a on message');
				var args 	= arguments;

				$rootScope.$apply(function () {
					callback.apply(socket, args);
				});
			});
		},
		emit 	: function (eventName, data, callback)
		{
			socket.emit(eventName, data, function ()
			{
				var args = arguments;

				$rootScope.$apply(function ()
				{
					if (callback) { callback.apply(socket, args); }
				});
			});
		}
	};
});