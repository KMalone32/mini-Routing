angular.module("app", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            templateUrl: 'js/home/hTemplate.html',
            controller: 'hCtrl',
            url: '/'
        })
        .state('settings', {
            templateUrl: 'js/settings/sTemplate.html',
            controller: 'sCtrl',
            url: '/settings'
        })
        .state('products', {
            templateUrl: 'js/products/pTemplate.html',
            controller: 'pCtrl',
            url: '/products:id'
        })
});