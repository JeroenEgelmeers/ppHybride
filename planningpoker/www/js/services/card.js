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

	function setOptions (newOptions)
	{
		var newCardOptions = [];

		for (var i = 0; i < newOptions.length; i++)
		{
			newCardOptions.push({ value: newOptions[i], display: getDisplayValue(newOptions[i]) });	
		}

		cardOptions 	= newCardOptions;
		cardValue 		= cardOptions[0];
	}

	function getDisplayValue (value)
	{
		switch (value)
		{
			case "Infinite":
				return "&infin;";
			case "Unsure":
				return "<i class='fa fa-question'></i>";
			case "Coffee":
				return "<i class='fa fa-coffee'></i>";
				break;
			default:
				return value;
		}
	}

	function setResults (newResults)
	{
		results = [];

		for (var i = 0; i < newResults.length; i++)
		{
			results.push({color: newResults[i].color, name: newResults[i].name, vaue: newResults[i].value, display: getDisplayValue(newResults[i].value)});
		}
	}

	function setModus (newModus)
	{
		var tempModus 			= newModus;

        var modusValues 		= tempModus.values;
        var valuesString 		= "";

        for (var i = 0; i < modusValues.length; i++)
        {
            valuesString += getDisplayValue(modusValues[i].value);
            
            if (i < modusValues.length -1 )
            {
                valuesString 	+= ", ";
            }
        }

        tempModus.mode 			= valuesString;

        modus = tempModus;
	}

	return {
		getOptions: function ()
		{
			return cardOptions;
		},
		setOptions: function (newCardOptions)
		{
			setOptions(newCardOptions);
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
			setModus(newModus);
		},
		getResults: function ()
		{
			return results;
		},
		setResults: function (newResults)
		{
			setResults(newResults);
		},
		getVotedCoffee: function ()
		{
			return votedCoffee;
		},
		setVotedCoffee: function (newVotedCoffee)
		{
			votedCoffee 		= newVotedCoffee;
		},
		getDisplayValue: function (value)
		{
			return getDisplayValue(value);
		}
	};
});