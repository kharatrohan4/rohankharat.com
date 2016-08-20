angular.module('ProfileCtrl', ['ngSanitize']).controller('ProfileController', function($scope,$rootScope) {

	$rootScope.showContact=true;
	$scope.name = 'Rohan Kharat';
	$scope.title = 'Associate SQA Engineer';
	$scope.dob = '04-05-1992';
	$scope.phone = '+91 9579298004';
	$scope.address = {street: '', state: 'Maharashtra'};
	$scope.mail = 'kharatrohan4@gmail.com';
	$scope.blog = {url: 'https://rohankharat.com/blogs', title: 'Blogs [Coming soon]'};
	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/kharatrohan4',
		twitter: 'https://twitter.com/kharatrohan',
		skype: 'skype:rohan_khrt',
		github: 'https://github.com/kharatrohan4/',
		insta:'https://www.instagram.com/kharat_rohan/'
	};

	$scope.aboutus = '<p>I am an software engineer.' +
		' I like to learn new technologies and play around. Currently working in Medibox,' +
		' Bangalore as Software Engineer,' +
		' I am involved with designing and developing scalable applications,</p>' +
		'<br>' +
		'<p>I\'ve been associated and involved with computers through out my life.' +
		' Among other stuff, I like to play sports,' +
		' surf blogs and articles.';
	

	$scope.workInfo = [{
		year: 'August 2015 - Present ',
		company: ' Symantec Software India LTD, Pune',
		role: 'Associate SQA Engineer',
		description: '<p> Joined As an intern ' +
		'Worked on Email Secuirity.Cloud</p>' +
		'<p>Technologies used: Selenium , Robot Framework</p>'
	
	}];

	$scope.education = [ {
		title: 'Master of Computer Science, 2015',
		univ: ' Nowrosjee Wadia College, Pune ',
		description: '<p>Completed the Degree, Master of Computer Science: Data Structures, Algorithm analysis and design, Theoretical Computer Science, Operating Systems, Systems software, Information systems, Network & system security, Distributed systems</p><p> Project on Evaluation of Operating System Module</p>'
	}, {
		title: 'B.C.S, 2013',
		univ: ' T.C.College, Baramati, Pune ',
		description: '<p>Completed the Degree, Bachelor of Computer Science</p>'
	}, {
		title: 'H.S.C, 2009',
		univ: ' T.C.College, Baramati, Pune ',
		description: '<p>Completed the 12th STD</p>'
	}, {
		title: 'S.S.C, 2007',
		univ: ' Shree Chhatrapati Highschool , Anthurne, Pune ',
		description: '<p>Completed the 10th STD</p>'
	}];

	$scope.skills = [{
		title: 'Languanges - C/C++/Java',
		value: '80%'
	}, {
		title: 'Android App Development ',
		value: '85%'
	}, {
		title: 'Scripting - Node.JS/Shell',
		value: '80%'
	}, {
		title: 'HTML/CSS',
		value: '70%'
	}, {
		title: 'NoSQL - Mongo DB/ Redis ',
		value: '85%'
	}, {
		title: 'Algorithms & Data structures',
		value: '75%'
	}, {
		title: 'Web App development ',
		value: '70%'
	}, {
		title: 'DB SQl - MySQL, Oracle PL/SQL',
		value: '75%'
	}];
});