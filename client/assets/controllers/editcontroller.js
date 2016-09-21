app.controller('editcontroller', ['$scope', 'friendsfactory','$routeParams', '$location',
    function ($scope, friendsfactory,$routeParams, $location){
    	
    	friendsfactory.show($routeParams.id, function(friend){
    		$scope.friendInfo = friend;
    		$scope.friendInfo.birthday = new Date(friend.birthday);
    	})

		$scope.editFriend = function(){
			friendsfactory.edit($scope.friendInfo,function(){
				$location.url('/')
			})
		}
}])