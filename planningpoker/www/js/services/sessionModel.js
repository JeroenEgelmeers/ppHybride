angular
.module('planningpoker')
.factory('SessionModel', function ()
{
	var model;

	return {
		getModel: function ()
		{
			return model;
		},
		setModel: function (newModel)
		{
			model = newModel;
		}
	};
});