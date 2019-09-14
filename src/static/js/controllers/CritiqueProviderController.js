/**
 * Created by bharatbatra on 6/2/16.
 */
(function(){

    'use strict';

    angular
        .module('critinderApp')
        .controller('CritiqueProviderController', CritiqueProviderController);

    CritiqueProviderController.$inject = ['$rootScope', '$scope', '$log'];

    function CritiqueProviderController($rootScope, $scope, $log) {
        var vm = this;
        //vars
        vm.toggleHeart = [];
        vm.toggleGridUp = [];
        vm.toggleGridDown = []
        for(var i=0; i<6; i++)
        {
            vm.toggleGridUp[i]=true;
            vm.toggleGridDown[i]=true;
            vm.toggleHeart[i]= true;
        }


        vm.pressHeart = function(index){
            for(var i=0; i<6; i++)
            {
                if(i===index)
                    vm.toggleHeart[i]=false;
                else
                    vm.toggleHeart[i]=true;
            }
        }

        //functions
        vm.toggleSelectorUp = function (index){
            console.log("gonna press " + index);
            vm.toggleGridUp[index] = !(vm.toggleGridUp[index]);
            if(vm.toggleGridDown[index] === vm.toggleGridUp[index]){
              vm.toggleGridDown[index] = !vm.toggleGridDown[index]
            }
        }

      vm.toggleSelectorDown = function (index){
        console.log("gonna press " + index);
        vm.toggleGridDown[index] = !(vm.toggleGridDown[index]);
        if(vm.toggleGridDown[index] === vm.toggleGridUp[index]){
          vm.toggleGridUp[index] = !vm.toggleGridUp[index]
        }
      }
    }
})();