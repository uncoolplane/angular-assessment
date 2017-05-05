angular.module('angular')
    .directive('logo', function () {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment
        templateUrl: '../js/directives/logo.html',
    }
});
