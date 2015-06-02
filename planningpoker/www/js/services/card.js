angular
.module('planningpoker')
.factory('Card', function ()
{
	var cardOptions 	= [1, 2, 3, 5, 8, 13, 21, 34, 55]; // "Koffie", "Oneindig" <- staan tuidelijk uit
	var cardValue 		= cardOptions[0];
	var currentIssue	= null;
	var modus = 0;
	var results = "";

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
		},
		getCurrentIssue: function ()
		{
			return currentIssue;
		},
		setCurrentIssue: function (newCurrentIssue)
		{
			currentIssue = newCurrentIssue;
		},
		getModus: function ()
		{
			return modus;
		},
		setModus: function (newModus)
		{
			modus = newModus;
		},
		getResults: function ()
		{
			return results;
		},
		setResults: function (newResults)
		{
			results = newResults;
		},
	};
});