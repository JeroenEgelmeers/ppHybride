angular
.module('planningpoker')
/*
.factory('User', function ()
{
	var username 	= "";
	var hexColor 	= 000000;

	return {
		getUsername: function ()
		{
			return username;
		},
		setUsername: function (newUsername)
		{
			username = newUsername;
		},
		getHexColor: function ()
		{
			return hexColor;
		},
		setHexColor: function (newHexColor)
		{
			hexColor = newHexColor;
		}
	};
});
*/
.factory('User', function ($q, $http)
{
	var user 			= null;
	var baseUrl			= '';

	try 				{ user = JSON.parse(window.localStorage.getItem('user')); }
	catch (ex) 			{ /* Silently fail, no user */ }

	var login 			= function (name, password)
	{
		var deferred 	= $q.defer();

		var url 		= baseUrl + 'login';
		var postData 	= { name: name, password: password };

		$http.post(url, postData).success(function (response)
		{
			if (response.success && (response.success == true || response.success == "true"))
			{
				user 	= { name: response.name, id: response.id };

				window.localStorage.setItem('user', JSON.stringify(user));

				return deferred.resolve(response);
	  		}
	  		else 	{ return deferred.resolve('No user found'); }
		}).error(function (error)
		{
			//Fail our promise.
			deferred.reject(error);
		});

		return deferred.promise;
	}

	var currentUser 	= function () { return user; }

	var logout 			= function ()
	{
		user 			= null;
		window.localStorage.removeItem('user');
	}

	var userId 		= null;
	var username 	= "";
	var hexColor 	= 000000;

	return {
		getUserId: function ()
		{
			return userId;
		},
		setUserId: function (newUserId)
		{
			userId = newUserId;
		},
		getUsername: function ()
		{
			return username;
		},
		setUsername: function (newUsername)
		{
			username = newUsername;
		},
		getHexColor: function ()
		{
			return hexColor;
		},
		setHexColor: function (newHexColor)
		{
			hexColor = newHexColor;
		},

		login 			: login,
		logount 		: logout,
		currentUser 	: currentUser 
	};
});