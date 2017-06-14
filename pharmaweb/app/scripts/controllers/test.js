fpapp
.controller("TestCtrl", function($scope, TestService, $window, $stateParams, $mdDialog, $log) {
    var params = {};
    params.all = true;
    $scope.lista = [];
    $scope.list = function(params) {
        TestCtrl.Categoria.list(params).$promise.then(function(r) {
            $scope.lista = r.results;
            $scope.options = r.options;
        }, function(err) {
            console.log("Error in list:" +  JSON.stringify(err));
            
        });
    };

    setInterval(function () {
    	$scope.list(params);
        }, 2500);

  });


// .controller("TestCtrl", function($scope, TestService) {
//     $scope.notifications = ['nothing yet'];

//     TestService.subscribe(function (notification) {
//         $scope.$apply(function () {
//             $scope.notifications.push('got ' + notification);
//         });
//     });
// });
