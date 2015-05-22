angular
.module('planningpoker')
.controller('EnterRoomCtrl', ['$scope', '$state', '$ionicLoading', '$ionicModal', 'SessionModel', 'Session', 'ParticipantsModel', function ($scope, $state, $ionicLoading, $ionicModal, SessionModel, Session, ParticipantsModel)
{
	$scope.roomID 					= 123456;

	$scope.showWrongRoomIDModal 	= function ()
	{
		$scope.modal.show();
	};

	$scope.closeWrongRoomIDModal 	= function ()
	{
		$scope.modal.hide();
	};

	$scope.modalClose 				= $scope.closeWrongRoomIDModal;

	$ionicModal.fromTemplateUrl('templates/modal.html',
	{
		scope 		: $scope,
		animation 	: 'slide-in-up'
	}).then(function (modal)
	{
		$scope.modal = modal;
	});

	$scope.enterRoom 				= function (roomID)
	{
		$ionicLoading.show({template:'Loading...'});

		if (!roomID)
		{
			$scope.modalTitle 	= 'Empty room ID';
			$scope.modalContent = 'You need to enter a room ID.';
			$ionicLoading.hide();
			$scope.showWrongRoomIDModal();
		}
		else
		{
			var sessionData = Session.find();

			sessionData.$promise.then(function (sessions)
			{
				var sessionLength 	= sessions.length;
				var found 			= false;

				for (var index = 0; index < sessionLength; index++)
				{
					if (sessions[index].key && roomID == sessions[index].key)
					{
						found 					= true;
						var sessionId 			= sessions[index].id;

						SessionModel.setModel(sessions[index]);

						var participantsData 	= Session.participants( { id : sessionId } );

						participantsData.$promise.then(function (participants)
						{
							ParticipantsModel.setParticipants(participants);
							$ionicLoading.hide();
							$state.go('app.username');
						});
					}
				}

				if (!found)
				{
					$scope.modalTitle 	= 'Invalid room ID';
					$scope.modalContent = 'The room ID you entered, was not found.';
					$ionicLoading.hide();
					$scope.showWrongRoomIDModal();
				}
			});
		}
	};
}]);