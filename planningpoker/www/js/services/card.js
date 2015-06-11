angular
.module('planningpoker')
.factory('Card', function ()
{
	var cardOptions 		= null; //[1, 2, 3, 5, 8, 13, 21, 34, 55, "Infinite", "Unknown", "Coffee"];
	var cardValue 			= null;
	var currentIssue		= null;
	var modus 				= 0;
	var results 			= "";
	var votedCoffee 		= false;

	return {
		getOptions: function ()
		{
			return cardOptions;
		},
		setOptions: function (newCardOptions)
		{
			cardOptions 	= newCardOptions;
			cardValue 		= cardOptions[0];
		},
		getValue: function ()
		{
			return cardValue;
		},
		setValue: function (newValue)
		{
			cardValue 		= newValue;
		},
		getCurrentIssue: function ()
		{
			return currentIssue;
		},
		setCurrentIssue: function (newCurrentIssue)
		{
			currentIssue 	= newCurrentIssue;
		},
		getModus: function ()
		{
			return modus;
		},
		setModus: function (newModus)
		{
			modus 			= newModus;
		},
		getResults: function ()
		{
			return results;
		},
		setResults: function (newResults)
		{
			results 		= newResults;
		},
		getVotedCoffee: function ()
		{
			return votedCoffee;
		},
		setVotedCoffee: function (newVotedCoffee)
		{
			votedCoffee 		= newVotedCoffee;
		}
	};
});