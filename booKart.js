var myapp=angular.module("myapp",["ngRoute","ngAnimate"]);
// $rootScope is global
myapp.config(function($routeProvider){
	$routeProvider
		.when("/books",{
			templateUrl: "books.html",
			controller: "BookListController"})
	        .when("/Kart",{
			templateUrl: "kart.html",
			controller: "KartListController"})
	        .otherwise({
			redirectTo: "/books"});
	
});
myapp.controller("headercontrol",function($scope, $location)
{
	$scope.appDetails={
		title: "BookList",
		tagline: "One stop shop for science books"
	};
	$scope.nav={};
	$scope.nav.isActive = function(path)
	{
		if(path === $location.path())
		{
			return true;
		}
		return false;
	}
});
myapp.factory("kartService",function()
{
	
	var kart=[];
        return{
		getKart: function(){
			return kart;		
		},
		addToKart: function(book){
			kart.push(book);
		},
		buy: function(){
			alert("Thanks for buying: ",books.bookJounre);
		}
	}
});
myapp.factory("bookService",function()
{
	
	var books=[
		{		
			imgUrl: "jobhunt.png",
			bookJounre: "JOBS",
			releaseDate: "12-02-2003",
			publisher: "Paperback",
			price: "599",
			rating: "5/5",
			author: "Dr. A Khan"
		},
		{
				
			imgUrl: "certi.png",
			bookJounre: "Science",
			releaseDate: "12-02-2013",
			publisher: "McGrawHill",
			price: "699",
			rating: "4.5/5",
			author: "Dr. S.Mukherjee"
		},
		{
			
			imgUrl: "network.png",
			bookJounre: "Education",
			releaseDate: "12-02-2008",
			publisher: "McMillan publishers",
			price: "999",
			rating: "3/5",
			author: "Dr. James Mathews"
		}
	];
        return{
		getBooks: function(){
			return books;		
		},
		addToKart: function(book){
					
		}
	}
});
myapp.controller("BookListController",function($scope, bookService)   // creates another object $scope as a dependency
{                                                        //bookService is the $injector
	$scope.books=[
		{		
			imgUrl: "jobhunt.png",
			bookJounre: "JOBS",
			releaseDate: "12-02-2003",
			publisher: "Paperback",
			price: "Rs. 599",
			rating: "5/5",
			author: "Dr. A Khan"
		},
		{
				
			imgUrl: "certi.png",
			bookJounre: "Science",
			releaseDate: "12-02-2013",
			publisher: "McGrawHill",
			price: "Rs. 699",
			rating: "4.5/5",
			author: "Dr. S.Mukherjee"
		},
		{
			
			imgUrl: "network.png",
			bookJounre: "Education",
			releaseDate: "12-02-2008",
			publisher: "McMillan publishers",
			price: "Rs. 999",
			rating: "3/5",
			author: "Dr. James Mathews"
		}
	];
});
myapp.controller("BookListController",function($scope, bookService, kartService)   //bookService is the $injector 
{
	$scope.books=bookService.getBooks();
	$scope.addToKart =function(book){
		kartService.addToKart(book);
		alert("Book added to Kart");
		
	}
	
});
myapp.controller("KartListController",function($scope, kartService)   // creates another object $scope as a dependency
{
	$scope.kart=kartService.getKart();
	$scope.buy =function(book){
		kartService.buy(book);
	}
	
});

