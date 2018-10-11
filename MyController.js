var Uid = 0;
var app = angular.module("app", []);
	app.controller("MyController", function($scope) {
		$scope.contacts =[];
		$scope.newContact = null;
		$scope.save = function(){
			if($scope.newContact.id==null){
				Uid++;
				$scope.newContact.id = Uid;
				$scope.contacts.push($scope.newContact);
			}
			else{
				for(var i in $scope.contacts){
					if ($scope.contacts[i].id == $scope.newContact.id) {
						$scope.contacts[i]=$scope.newContact;
					}
				}
			}
			$scope.newContact=null;
		}

		$scope.edit = function(id){
			for(var i in $scope.contacts){
				if ($scope.contacts[i].id==id) {
					$scope.newContact= angular.copy($scope.contacts[i])
				}
			}
		}

		$scope.delete = function(id){
			for(var i in $scope.contacts){
				if ($scope.contacts[i].id==id) {
					$scope.contacts.splice(i,1);
					$scope.newContact=null;
				}
			}
		}

	}
);
