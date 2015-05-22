angular
.module('planningpoker')
.controller('UserCtrl', ['$scope', '$state', '$ionicLoading', '$ionicModal', 'Session', 'Participant', 'SessionModel', 'User','Color', 'ParticipantsModel', function ($scope, $state, $ionicLoading, $ionicModal, Session, Participant, SessionModel, User, Color, ParticipantsModel)
{
	$scope.usernameRadio    	= "new";
	$scope.existingUsers 		= ParticipantsModel.getParticipants();
	$scope.existingUserSelected	= null;
	$scope.existingUserColor 	= "#000000";
	$scope.modalColors 			= null;
	$scope.newUserColor 		= "#000000";
	$scope.newUserName			= '';

	$scope.selectExistingUser 		= function (existingUser)
	{
		$scope.existingUserSelected = existingUser;
		$scope.existingUserColor 	= existingUser.color;
	};

	$scope.showModal = function ()
	{
		$scope.modal.show();
	};

	$scope.closeModal = function ()
	{
		$scope.modal.hide();
	};

	$scope.showColorModal = function ()
	{
		$scope.colorModal.show();
	};

	$scope.closeColorModal = function ()
	{
		$scope.colorModal.hide();
	};

	function listToMatrix(list, elementsPerSubArray)
	{
	    var matrix = [], i, k;

	    for (i = 0, k = -1; i < list.length; i++)
	    {
	        if (i % elementsPerSubArray === 0)
	        {
	            k++;
	            matrix[k] = [];
	        }

	        matrix[k].push(list[i]);
	    }

	    return matrix;
	}

	$scope.showSelectColorModal 	= function ()
	{
		if ($scope.modalColors) 	{ $scope.showColorModal(); }
		else
		{
			$ionicLoading.show({template:'Loading...'});

			Color.find().$promise.then(function (colors)
			{
				$ionicLoading.hide();
				$scope.modalColors = listToMatrix(colors, 3);
				$scope.showColorModal();
			});
		}
	};

	$scope.modalClose 				= $scope.closeModal;

	$ionicModal.fromTemplateUrl('templates/modal.html',
	{
		scope 		: $scope,
		animation 	: 'slide-in-up'
	}).then(function (modal)
	{
		$scope.modal 				= modal;
	});

	$scope.colorModalClose 			= $scope.closeColorModal;

	$ionicModal.fromTemplateUrl('templates/colormodal.html',
	{
		scope 		: $scope,
		animation 	: 'slide-in-up'
	}).then(function (modal)
	{
		$scope.colorModal 			= modal;
	});

	$scope.submitColor 				= function (hexColor)
	{
		//User.setHexColor(hexColor);
		$scope.newUserColor 		= hexColor;
		$scope.closeColorModal();
	};

	$scope.submitUser 				= function (usernameRadio, newUserName)
	{
		$ionicLoading.show({template:'Loading...'});

		$scope.usernameRadio 		= usernameRadio;
		$scope.newUserName 			= newUserName;

		if ($scope.usernameRadio == 'new')
		{
			if (!$scope.newUserName)
			{
				$scope.modalTitle 		= 'Onbrekende gebruikersnaam';
				$scope.modalContent	 	= 'Er is geen gebruikersnaam ingevuld.';
				$ionicLoading.hide();
				$scope.showModal();
			}
			else
			{
				User.setUsername($scope.newUserName);
				User.setHexColor($scope.newUserColor);

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
							$scope.showModal();
							return;
						}
						else if (participants[index].name == User.getUsername())
						{
							$scope.modalTitle 	= 'Ongeldige gebruikersnaam';
							$scope.modalContent = 'De gekozen gebruikersnaam is al bezet.';
							$ionicLoading.hide();
							$scope.showModal();
							return;
						}
					}

					var participant = Participant.create({name:User.getUsername(), color: User.getHexColor(), sessionId:sessionId});

					participant.$promise.then(function (participant)
					{
						User.setUserId(participant.id);
						$ionicLoading.hide();
						$state.go('app.wait');
					});
				});
			}
		}
		else
		{
			User.setUsername($scope.existingUserSelected.name);
			User.setHexColor($scope.existingUserSelected.color);
			User.setUserId($scope.existingUserSelected.id);
			$ionicLoading.hide();
			$state.go('app.wait');
		}
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
			$scope.showModal();
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
						$scope.showModal();
						return;
					}
					else if (participants[index].name == username)
					{
						$scope.modalTitle 	= 'Ongeldige gebruikersnaam';
						$scope.modalContent = 'De gekozen gebruikersnaam is al bezet.';
						$ionicLoading.hide();
						$scope.showModal();
						return;
					}
				}

				var participant = Participant.create({name:User.getUsername(), color: User.getHexColor(), sessionId:sessionId});

				participant.$promise.then(function (participant)
				{
					User.setUserId(participant.id);
					$ionicLoading.hide();
					$state.go('app.wait');
				});
			});
		}
	};
}]);