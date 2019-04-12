$(document).ready(function() {

function Pizza(size, sauce, cheese, toppings, price) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.price = price;
}


//check size prototype (add base price for each size)

//check sauce prototype

//check cheese prototype

//check toppings protoype
  //if size = small add $2 per topping
  //if size = med add $3 per topping
  //if size = large, add $4 per topping
  //if size = XL add $5/topping
Pizza.prototype.checkSize = function() {
  if (this.size == "4") {
    this.price += 10;
  }
  else if (this.size == "3") {
    this.price += 12;
  }
  else if (this.size == "2") {
    this.price += 14;
  }
  else {
    this.price += 16;
  }
}



// on form submit take in values from each form group to the pizza object
  $("form#orderForm").click(function(event) {
    event.preventDefault();

    var pizzaPrice = 0;
    // grab values of size, sauce, cheese, toppings.
  });
});


//  var nameInput = document.getElementById('sauce2');
//
// document.querySelector('form#orderForm').addEventListener('submit', function (e) {
  //
  //     e.preventDefault();
  //
  //     console.log(nameInput.value);


  //   size.id = this.assignId();
  // Pizza.prototype.addSize = function(size) {
    //   this.sizes.push(size);
    // }
    // Pizza.prototype.addSauce = function(sauce) {
      //   sauce.id = this.assignId();
      //   this.sauces.push(sauce);
      // }
      // Pizza.prototype.addCheese = function(cheese) {
        //   cheese.id = this.assignId();
        //   this.cheese.push(cheese);
        // }
        // Pizza.prototype.addTopping = function(topping) {
          //   topping.id = this.assignId();
          //   this.topping.push(topping);
          // }

          // Pizza.prototype.assignId = function() {
            //   this.sizeId += 1;
            //   this.sauceId += 1;
            //   this.cheeseId += 1;
            //   this.toppingId += 1;
            //   return this.sizeId;
            //   return this.sauceId;
            //   return this.cheeseId;
            //   return this.toppingId;
            // }
