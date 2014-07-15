/*
 * The MIT License
 *
 * Copyright (c) 2013, Sebastian Sdorra
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

angular.module('dashboard', [
  'adf', 'widgets.news', 'widgets.randommsg',
  'widgets.weather', 'widgets.markdown',
  'widgets.linklist', 'widgets.github',
  'LocalStorageModule', 'structures', 'ngRoute'
])
.config(function($routeProvider, localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('adf');
  
}).controller('mainCtrl', function($scope, localStorageService){

    var name = 'dashboard';
    var model = localStorageService.get(name);
    if (!model) {
      // set default model
      model = {
        title: "Dashboard",
        structure: "4-8",
        first_show: true
      };
    }
    $scope.name = name;
    $scope.model = model;
    $scope.collapsible = false;

    $scope.$on('adfDashboardChanged', function (event, name, model) {
      model.first_show = false;
      localStorageService.set(name, model);
    });
  });
