angular.module('MainCtrl', []).controller('MainController', function($scope,$mdDialog,$rootScope) {


	
	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/kharatrohan4',
		twitter: 'https://twitter.com/kharatrohan',
		skype: 'skype:rohan_khrt',
		github: 'https://github.com/kharatrohan4/'
	};
	$scope.phone = '+91 9579298004';
	$scope.address = {street: '', state: 'Maharashtra'};
	$scope.mail = 'kharatrohan4@gmail.com';
    $rootScope.showContact=true;
	$scope.ComingSoon = function(ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		// Modal dialogs should fully cover application
		// to prevent interaction outside of dialog
		$mdDialog.show(
			$mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title('Under Construction')
				.textContent('Its lot of work..!stay tune..!')
				.ariaLabel('Site is under construction')
				.ok('ookchaa.!!')
				.targetEvent(ev)
		);
	};
});