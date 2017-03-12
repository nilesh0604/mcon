"use strict";

angular.module('mcon', ['ui.bootstrap'])
    .controller('MainCtrl', function($scope) {

        $scope.employees = [{
            'id': 1,
            'name': 'Nilesh Shinde',
            'designation': 'Architect',
            'level': '4',
            'manager': 'Makarand Natu',
            'dob': '06-05-1985'
        }, {
            'id': 2,
            'name': 'Thrinadh Kumar',
            'designation': 'DevOps',
            'level': '3',
            'manager': 'Makarand Natu',
            'dob': '03-06-1983'
        }, {
            'id': 3,
            'name': 'Sunil Mujnani',
            'designation': 'Developer',
            'level': '2',
            'manager': 'Makarand Natu',
            'dob': '08-02-1982'
        }];

        $scope.showDetails = function(current){
        	window.alert("Employee Name : " + current.employee.name);
        };
    });