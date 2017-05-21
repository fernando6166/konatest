angular.module('MobileAngularUiExamples', []).controller('EmployeeController'), ['$scope', function ($scope) {
			$scope.addEmployee = function() {
				window.alert("addEmployee");
		 		/*
		 		$scope.employee = {
		 			balance : "balance",
				};
				*/

				window.alert($scope.employee.first);
				window.alert($scope.employee.last);
				window.alert($scope.employee.email);
				window.alert($scope.employee.address);
				window.alert($scope.employee.fecha);
				window.alert($scope.employee.balance);
			};		
]};		







	
//app.controller('EmployeeController', function ($scope,$http) {

//}

/*
function addEmployee($employee){
  		window.alert($employee);
}
*/
/*
window.alert($scope.epmployee);
*/