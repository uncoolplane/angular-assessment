angular.module('angular')
    .directive('product', function ($location) {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            id: '@',
            title: '@',
            desc: '@',
            price: '@',
            image: '@'
          },
        templateUrl: '../js/directives/product.html',
        link: function ($scope, element, attrs) {

            $scope.redirectTo = function (id) {
              $location.path('/product/' + id);
            }

        } //DOM manipulation
    }
});
