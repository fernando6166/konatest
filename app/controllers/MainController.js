'use strict';

app.controller('MainController', function ($scope,$http) {
$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

   $http.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
    .then(function(response) {
       $scope.employees = response.data;
    });
	
});


app.controller('EmployeeController', function ($scope,$http) {
			   
			    $scope.sendEmployee = function(){	
			            var data = $scope.employee ;
			            var config = {
			                headers : {
			                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			                }
			            }
			            $http.post('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb', data, config)
			            .success(function (data, status, headers, config) {
			                $scope.PostDataResponse = data;
			                window.alert("success");
			            })
			  
			            .error(function (data, status, header, config) {
			                $scope.ResponseDetails = "Data: " + data +
			                    "<hr />status: " + status +
			                    "<hr />headers: " + header +
			                    "<hr />config: " + config;
			                    window.alert("error");
			            });
				};


  	});
  	  	