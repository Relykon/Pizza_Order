$(document).ready(function() {

function Pizza(size, sauce, cheese, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  // this.price = price;
}

Pizza.prototype.checkSize = function() {
  if (this.size == "S") {
    this.price += 10;
  }
  else if (this.size == "M") {
    this.price += 12;
  }
  else if (this.size == "L") {
    this.price += 14;
  }
  else {
    this.price += 16;
  }
}

Pizza.prototype.checkToppings = function() {
  if (toppings.length === 0) {
    this.price = this.price;
  }
  else if (toppings.length === 1) {
    this.price += 1;
  }
  else if (toppings.length === 2) {
    this.price += 2;
  }
  else if (toppings.length = 3) {
    this.price += 3;
  }
  else if (toppings.length = 4) {
    this.price += 4;
  }
  else {
    this.price += 5;
  }
}

// on form submit take in values from each form group to the pizza object
$("form#orderForm").submit(function(event) {
    event.preventDefault();
    var pizzaPrice = 0;
    
    var toppings = document.getElementsByName('topping');
    var toppingSelect = [];
    for (var i = 0; i < toppings.length; i++) {
      if (toppings[i].checked) {
        toppingSelect.push(toppings[i].value);
      };
    };
    const size = $('input[name=size]:checked').val();
    const sauce = $('input[name=sauce]:checked').val();
    const poop = $('input[name=cheese]:checked').val();
    var finishedPizza = new Pizza (size, sauce, poop, toppingSelect);

    console.log(finishedPizza);
// grab value of sauce
// grab v of size
// grab value of




    // document.querySelector('form#orderForm').addEventListener('submit', function (e) {
    //
    //   e.preventDefault();
    //
    //   console.log(nameInput.value);
    });
  });
// });




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
