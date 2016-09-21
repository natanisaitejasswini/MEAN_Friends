app.controller('listcontroller', ['$scope', 'friendsfactory','$location', '$route',
    function ($scope, friendsfactory,$location, $route){

    	friendsfactory.index(function(friends){
    		console.log(friends);
    		$scope.friends =friends;
    	})
		
		$scope.newFriend = function(){
			$location.url('/new');
		}

		$scope.deleteFriend = function(id){
		  friendsfactory.delete(id, function(){
		  	$route.reload();
		  });
		}

		$scope.updateFriend = function(id){
			$location.url('/edit/'+id);
		}

		$scope.showFriend = function(id){
			$location.url('/show/'+id);
		}


}])