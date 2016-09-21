app.controller('showcontroller', ['$scope', 'friendsfactory','$routeParams', '$location',
    function ($scope, friendsfactory,$routeParams, $location){
        
        friendsfactory.show($routeParams.id, function(friend){
            $scope.friendInfo = friend;
            $scope.friendInfo.birthday = new Date(friend.birthday);
        })

        $scope.goBack = function(){
            $location.url('/');
        }
}])