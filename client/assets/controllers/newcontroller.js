app.controller('newcontroller', ['$scope', 'friendsfactory','$location', '$route',
    function ($scope, friendsfactory,$location, $route){

		$scope.createFriend = function(){
			friendsfactory.create($scope.friendInfo,function(){
				$scope.friendInfo = {};
				$location.url('/')
			})
		}
		$scope.goBack = function(){
			$location.url('/');
		}


}])