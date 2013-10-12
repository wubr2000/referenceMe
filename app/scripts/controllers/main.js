'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    
  	$scope.tags = ["Javascript","HTML","CSS","Funny"];
  	$scope.clicklink = function (tag) {
  		$rootScope.category = tag;
  	};

    //$scope.hipchatLinks = hipchatLinks;

    //console.log($scope.hipchatLinks[1].url);
    //console.log($scope.hipchatLinks[1]);
  });
