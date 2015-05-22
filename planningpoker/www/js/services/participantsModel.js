angular
.module('planningpoker')
.factory('ParticipantsModel', function ()
{
	var participants;

	return {
		getParticipants: function ()
		{
			return participants;
		},
		setParticipants: function (newParticipants)
		{
			participants = newParticipants;
		},
		áddParticipant: function (participant)
		{
			participants.push(participant);
		},
		getParticipant: function (participantIndex)
		{
			return participants[participantIndex];
		}
	};
});