'use strict';

const restaurant = {
  namee: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/*---------------DESTRUCTURING ARRAY---------------*/

// const arr = [2, 3, 4];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const[starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, ,[j , k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p=1, q=2, m=3] = [8,9];
// console.log(p, q,m);


/*---------------DESTRUCTURING OBJECTS---------------*/

const {namee, starterMenu, categories} = restaurant;
console.log( namee, starterMenu, categories);

const {
  namee: restaurantName,
  starterMenu: menu,
  categories: categori
} = restaurant;
console.log(restaurantName, menu, categori);

// Default values 
const { menu1 = [], starterMenu: menu2 = []} = restaurant;
console.log(menu1, menu2);

// Mutating variables