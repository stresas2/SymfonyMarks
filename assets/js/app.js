/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';
import angular from 'angular';

const table = document.getElementById("table")
const status = document.getElementById("status")

const app = angular.module('myApp', []).config(($interpolateProvider) => {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('Ctrl', ($scope, $http) => {
    $http.get("/grades")
        .then((response) => {
            $scope.grades = response.data;
            status.classList.add('d-none');
            table.classList.remove('d-none');
        });
});