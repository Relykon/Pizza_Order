function Pizza(size, sauce, cheese, toppings, price) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppings = toppings;
  this.price = price;
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
  if (this.toppings.length === 0) {
    this.price = this.price;
  }
  else if (this.toppings.length === 1) {
    this.price += 1;
  }
  else if (this.toppings.length === 2) {
    this.price += 2;
  }
  else if (this.toppings.length === 3) {
    this.price += 3;
  }
  else if (this.toppings.length === 4) {
    this.price += 4;
  }
  else {
    this.price += 5;
  }
}

$(document).ready(function() {
$("form#orderForm").submit(function(event) {
    event.preventDefault();

    var topping = document.getElementsByName('topping');
    var toppings = [];
    for (var i = 0; i < topping.length; i++) {
      if (topping[i].checked) {
        toppings.push(topping[i].value);
      };
    };
    const size = $('input[name=size]:checked').val();
    const sauce = $('input[name=sauce]:checked').val();
    const cheese = $('input[name=cheese]:checked').val();
    var price = 0;
    var finishedPizza = new Pizza (size, sauce, cheese, toppings, price);
    finishedPizza.checkSize();
    finishedPizza.checkToppings();
    alert("Your Total is" + " $" + finishedPizza.price);
    });
  });
