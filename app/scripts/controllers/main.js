'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    
    $scope.tags = ["Javascript","HTML","CSS","Funny","Github","Ruby"];
  	
  	$scope.clicklink = function (tag) {
  		$rootScope.category = tag;
  		window.location.href = "#/categories";
  	};

  });
