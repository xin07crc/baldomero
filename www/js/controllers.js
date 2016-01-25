angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: '../WebService/dame_sala.php?param=valor',
    data: { param: 'valor' }
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.respuesta = response.data;
    console.log(response);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.respuesta = response.data;
    console.log(response);
  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
