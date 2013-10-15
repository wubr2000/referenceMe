'use strict';

angular.module('referenceMeApp')
  .controller('CategoriesCtrl', function ($scope, $routeParams) {

  	$scope.hipchatdata = hipchatLinks;
  	$scope.selectedTagThroughURL = $routeParams.selectedTagInURL;

  });
