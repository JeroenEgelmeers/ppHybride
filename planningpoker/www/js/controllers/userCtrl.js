angular
.module('planningpoker')
.controller('UserCtrl', ['$scope', '$state', '$ionicLoading', '$ionicModal', 'User', 'UserColors', function ($scope, $state, $ionicLoading, $ionicModal, User, UserColors)
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
		$ionicLoading.show({template:'Loading...'});

		if (!username)
		{
			$scope.modalTitle 	= 'Onbrekende gebruikersnaam';
			$scope.modalContent = 'Er is geen gebruikersnaam ingevuld.';
			$ionicLoading.hide();
			$scope.showWrongUsernameModal();
		}
		else
		{
			$ionicLoading.hide();
			$state.go('app.card');
			return;

			//TODO: controleren of gebruikersnaam en kleur al zijn gekozen. Kleur controle moet dan al in de submitColor functie wordne uitgevoerd.

			var sessionData = Session.find();

			sessionData.$promise.then(function (sessions)
			{
				var sessionLength = sessions.length;

				for (var index = 0; index < sessionLength; index++)
				{
					if (sessions[index].key && roomID == sessions[index].key)
					{
						$ionicLoading.hide();
						$state.go('app.card');
						return;
					}
				}

				$scope.modalTitle 	= 'Ongeldig kamernummer';
				$scope.modalContent = 'Het ingevulde kamernummer, bestaad niet.';
				$ionicLoading.hide();
				$scope.showWrongRoomIDModal();
			});
		}
	};
}]);