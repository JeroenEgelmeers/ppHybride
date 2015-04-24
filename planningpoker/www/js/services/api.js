angular
.module('planningpoker')
.provider('API', function ()
{
	var baseURL 			= "";

	return {
		setBaseURL: function (newBaseURL)
		{
			baseURL 	= newBaseURL;
		},
		$get: function ()
		{
			return {
				baseURL 		: baseURL,
				sessionsURL 	: baseURL + "sessions"
			}
		}
	};
})
.config(function (APIProvider)
{
	APIProvider.setBaseURL("http://p-poker.herokuapp.com:80/api/");
});