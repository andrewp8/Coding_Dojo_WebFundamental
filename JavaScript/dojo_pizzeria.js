function pizzaOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}

var pizza_1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza_2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza_3 = pizzaOven("crunchy", "red and spicy", ["mozzarella"], ["mushrooms", "pineapple", "bacon", "ham"]);
var pizza_4 = pizzaOven("thin", "red and spicy", ["mozzarella"], ["mushrooms", "olives", "onions", "pepperoni", "mint"]);

console.log("Pizza 1:", pizza_1);
console.log("Pizza 2:", pizza_2);
console.log("Pizza 3:", pizza_3);
console.log("Pizza 4:", pizza_4);
