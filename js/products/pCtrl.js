angular.module('app').controller('pCtrl', function ($scope, $stateParams, pService) {
    if ($stateParams.id === 'shoes') {
        console.log("here");
        $scope.productData = pService.shoeData;
    }
    else if ($stateParams.id === 'socks') {
        $scope.productData = pService.sockData;
    }
});