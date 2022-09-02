angular.module("userServices", [])
.factory('User', function(){
    userFactory = {};

    userFactory.create = function(){
        return $http.post('/api/users',regData);
    }

    return userFactory;
})
