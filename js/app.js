var uiKitApp=angular.module('uiKitApp', [
		'ngRoute'
	]);

uiKitApp.config(['$routeProvider',function ($routeProvider) {
	$routeProvider.
	when('/typography', {
		templateUrl: 'partials/typography.html'
	}).
	when('/notifications', {
		templateUrl: 'partials/notifications.html'
	}).
	when('/tables', {
		templateUrl: 'partials/tables.html',
	}).
	when('/forms', {
		templateUrl: 'partials/forms.html',
	}).
	when('/buttons', {
		templateUrl: 'partials/buttons.html',
	}).
	when('/components', {
		templateUrl: 'partials/components.html',
	}).
	when('/others', {
		templateUrl: 'partials/others.html',
	}).
	when('/about', {
		templateUrl: 'partials/about.html',
	}).
	when('/contact', {
		templateUrl: 'partials/contact.html',
	}).
	when('/colorpalette', {
		templateUrl: 'partials/colorpalette.html',
	}).
	when('/containers', {
		templateUrl: 'partials/containers.html',
	}).
	when('/navs', {
		templateUrl: 'partials/navs.html',
	}).
	otherwise({ redirectTo: '/typography' })
}]);