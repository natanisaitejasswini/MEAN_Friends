app.factory('friendsfactory', ['$http', function($http){
  var factory = {};

  // new_friend is nothing but $scope.frienInfo
  // Here data.data.friend is ntg but object from db
  factory.create = function(new_friend,callback){
    $http.post('/friends',new_friend).then(function(data){
      if (typeof(callback) == 'function'){
          callback(data.data.friend);
      }
    })
  }
  factory.index = function(callback){
    $http.get('/friends').then(function(data){
      callback(data.data.friends);
    })
  }

  factory.delete = function(id, callback){
    $http.delete('/friends/'+id).then(function(data){
      callback(data.data.friend);
    })
  }

  factory.show = function(id,callback){
    $http.get('/friends/'+id).then(function(data){
      callback(data.data.friend);
    })
  }

  factory.edit = function(edit_friend,callback){
    $http.put('/friends/'+edit_friend._id, edit_friend).then(function(data){
      callback(data.data.friend);
    })
  }
  return factory;
}]);