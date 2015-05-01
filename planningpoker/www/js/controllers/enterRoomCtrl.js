angular
.module('planningpoker')
.controller('EnterRoomCtrl', ['$scope', '$state', '$ionicLoading', '$ionicModal', 'SessionModel', 'Session', function ($scope, $state, $ionicLoading, $ionicModal, SessionModel, Session)
{
	$scope.showWrongRoomIDModal = function ()
	{
		$scope.modal.show();
	};

	$scope.closeWrongRoomIDModal = function ()
	{
		$scope.modal.hide();
	};

	$scope.modalClose 	= $scope.closeWrongRoomIDModal;

	$ionicModal.fromTemplateUrl('templates/modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal)
	{
		$scope.modal = modal;
	});

	$scope.enterRoom = function (roomID)
	{
		$ionicLoading.show({template:'Loading...'});

		if (!roomID)
		{
			$scope.modalTitle 	= 'Onbrekend kamernummer';
			$scope.modalContent = 'Er is geen kamernummer ingevuld.';
			$ionicLoading.hide();
			$scope.showWrongRoomIDModal();
		}
		else
		{
			var sessionData = Session.find();

			sessionData.$promise.then(function (sessions)
			{
				var sessionLength = sessions.length;

				for (var index = 0; index < sessionLength; index++)
				{
					if (sessions[index].key && roomID == sessions[index].key)
					{
						SessionModel.setModel(sessions[index]);
						$ionicLoading.hide();
						$state.go('app.color');
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