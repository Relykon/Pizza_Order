function Pizza() {
  this.sizes = [];
  this.sizeId = 0;
  this.sauces = [];
  this.sauceId = 0;
  this.cheeses = [];
  this.cheeseId = 0;
  this.toppings = [];
  this.toppingId = 0;
}

Pizza.prototype.assignId = function() {
  this.sizeId += 1;
  this.sauceId += 1;
  this.cheeseId += 1;
  this.toppingId += 1;
  return this.sizeId;
  return this.sauceId;
  return this.cheeseId;
  return this.toppingId;
}

Pizza.prototype.addSize = function(size) {
  size.id = this.assignId();
  this.sizes.push(size);
}
Pizza.prototype.addSauce = function(sauce) {
  sauce.id = this.assignId();
  this.sauces.push(sauce);
}
Pizza.prototype.addCheese = function(cheese) {
  cheese.id = this.assignId();
  this.cheese.push(cheese);
}
Pizza.prototype.addTopping = function(topping) {
  topping.id = this.assignId();
  this.topping.push(topping);
}
