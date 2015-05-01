angular
.module('planningpoker')
.controller('UserCtrl', ['$scope', '$state', '$ionicLoading', '$ionicModal', 'Session', 'Participant', 'SessionModel', 'User', 'UserColors', function ($scope, $state, $ionicLoading, $ionicModal, Session, Participant, SessionModel, User, UserColors)
{
	$scope.showWrongUsernameModal = function ()
	{
		$scope.modal.show();
	};

	$scope.closeWrongUsernameModal = function ()
	{
		$scope.modal.hide();
	};

	$scope.modalClose 	= $scope.closeWrongUsernameModal;

	$ionicModal.fromTemplateUrl('templates/modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal)
	{
		$scope.modal = modal;
	});

	$scope.colors = UserColors;

	$scope.submitColor = function (hexColor)
	{
		User.setHexColor(hexColor);
		$state.go('app.username');
	};

	$scope.submitUsername = function (username)
	{
		User.setUsername(username);

		$ionicLoading.show({template:'Loading...'});

		if (!username)
		{
			$scope.modalTitle 		= 'Onbrekende gebruikersnaam';
			$scope.modalContent	 	= 'Er is geen gebruikersnaam ingevuld.';
			$ionicLoading.hide();
			$scope.showWrongUsernameModal();
		}
		else
		{
			var sessionId 			= SessionModel.getModel().id;

			var participantsData 	= Session.participants( { id : sessionId } );

			participantsData.$promise.then(function (participants)
			{
				var participantsLength 	= participants.length;

				for (var index = 0; index < participantsLength; index++)
				{
					if (participants[index].color == User.getHexColor())
					{
						$scope.modalTitle 	= 'Ongeldige kleur';
						$scope.modalContent = 'De gekozen kleur is al bezet.';
						$ionicLoading.hide();
						$scope.showWrongUsernameModal();
						return;
					}
					else if (participants[index].name == username)
					{
						$scope.modalTitle 	= 'Ongeldige gebruikersnaam';
						$scope.modalContent = 'De gekozen gebruikersnaam is al bezet.';
						$ionicLoading.hide();
						$scope.showWrongUsernameModal();
						return;
					}
				}

				Participant.create({name:User.getUsername(), color: User.getHexColor(), sessionId:sessionId});
				$ionicLoading.hide();
				$state.go('app.wait');
				//$state.go('app.card');
			});
		}
	};
}]);