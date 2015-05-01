angular
.module('planningpoker')
.factory('Card', function ()
{
	var cardOptions 	= [1, 2, 3, 5, 8, 13, 21, 34, 55]; // "Koffie", "Oneindig" <- staan tuidelijk uit
	var cardValue 		= cardOptions[0];

	return {
		getOptions: function ()
		{
			return cardOptions;
		},
		getValue: function ()
		{
			return cardValue;
		},
		setValue: function (newValue)
		{
			cardValue = newValue;
		}
	};
});