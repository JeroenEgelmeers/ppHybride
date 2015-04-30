angular
.module('planningpoker')
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