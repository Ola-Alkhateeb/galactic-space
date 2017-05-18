var app = angular.module('myApp', 
['ngRoute',
 'firebase',
 'myApp.news',
 'myApp.data',
 'myApp.posts'
 ]);

app.constant('fbURL', 'https://space-56061.firebaseio.com');

app.factory('Posts', function ($firebase, fbURL) {
    return $firebase(new Firebase(fbURL)).$asArray();
});

app.config(function ($routeProvider) {
    $routeProvider
         .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'dataContorller'
        })
        .when('/news', {
            templateUrl: 'app/news/news.html',
            controller: 'newsController'
        })
         .when('/posts' , {
            templateUrl: 'app/posts/posts.html',
            controller:'PostsController'
         })

        .otherwise({
            redirectTo: '/'
        })
});


