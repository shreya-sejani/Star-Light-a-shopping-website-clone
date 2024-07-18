//copy menu for mobile
function copyMenu(){
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML=mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML=topNav.innerHTML;

}
copyMenu();


//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click',toggle));

//show mobile menu
const menubutton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
        addclass=document.querySelector('.site');
menubutton.addEventListener('click',function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click',function(){
    addclass.classList.remove('showmenu')
})

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

// var dropdowns = document.querySelectorAll('.header-top .right ul ul');

// // Loop through each dropdown menu
// for (var i = 0; i < dropdowns.length; i++) {
//   // When the menu is displayed, adjust its z-index
//   dropdowns[i].addEventListener('transitionstart', function() {
//     // Get the position of the header-nav element
//     var navPos = document.querySelector('.header-nav').getBoundingClientRect();

//     // If the dropdown menu overlaps the header-nav element, set its z-index to a higher value
//     if (this.getBoundingClientRect().top < navPos.bottom) {
//       this.style.zIndex = 10000000;
//     }
//   });
// }

//swiper
const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
    
  });



//cart
var app = angular.module('ws',[]);
    app.controller('cal',function($scope){
        
        $scope.names = [
            {id:1,product:'red shirt', category:'clothing', photo:'images/products/appreal7.PNG', load:0, rate:500},
            {id:2,product:'sofa set', category:'home', photo:'images/products/home1.jpg', load:0, rate:3000},
            {id:3,product:'laptop', category:'electronics', photo:'images/products/electronic1.jpg', load:0, rate:65000},
            {id:4,product:'It ends with us', category:'books', photo:'images/products/img1.PNG', load:0, rate:350},
            {id:5,product:'It starts with us', category:'books', photo:'images/products/img2.PNG', load:0, rate:300},
            {id:6,product:'The fault in our stars', category:'books', photo:'images/products/img3.PNG', load:0, rate:375},
            {id:7,product:'Let me lie', category:'books', photo:'images/products/img4.PNG', load:0, rate:350},
            {id:8,product:'headphones', category:'electronics', photo:'images/products/electronic3.jpg', load:0, rate:300},
            {id:9,product:'shoes', category:'shoes', photo:'images/products/shoe3.jpg', load:0, rate:375},  
            {id:10,product:'chair', category:'home', photo:'images/products/home4.jpg', load:0, rate:450}];

        $scope.cart=[];

        $scope.getCost = function(x) {
            return x.load * x.rate;
        };

        var findItemById = function(items, id) {
            return _.find(items, function(item) {
            return item.id == id;
            });
        };

        $scope.addItem = function(itemToAdd) {
            if (itemToAdd.load > 0) {
                var found = findItemById($scope.cart, itemToAdd.id);
                if (found) {
                    found.load += itemToAdd.load;
                }
                else {
                    $scope.cart.push(angular.copy(itemToAdd));}
            }    
        };

        $scope.getTotal = function() {
            var total =  _.reduce($scope.cart, function(sum, item) {
            return sum + $scope.getCost(item);
            }, 0);
            console.log('total: ' + total);
            return total;
        };

        $scope.clearCart = function() {
            $scope.cart.length = 0;
        };
        $scope.count=function(){
            var c=0;
            angular.forEach($scope.cart,function(s){
                c=c+s.load;
            });
            return c
        }
        $scope.removeItem = function(x) {
            var index = $scope.cart.indexOf(x);
            $scope.cart.splice(index, 1);
        };
  });