const r = { flour: 500, sugar: 200, eggs: 1 };
const a = { flour: 1000, sugar: 1200, eggs: 5, milk: 200 };
// for (recipe in r) {
//   console.log(recipe);
// }
// const bake = (r, a) => {
//   const recipe = Object.keys(r);
//   const avaial = Object.keys(a);

//   let total = 0;
//   recipe.forEach((x, i) => {
//     for (let i = 0; i <= avaial.length; i++) {
//       if (x != avaial[0]) {
//         total += 0;
//       }
//     }
//     total++;
//   });
//   return total;
// };

// const t1 = bake(r, a);
// console.log(t1);
const bake = (recipe, available) => {
  let total = Infinity;

  for (let r in recipe) {
    if (!available[r]) {
      return 0;
    }

    let possibleCakes = Math.floor(available[r] / recipe[r]);

    total = Math.min(total, possibleCakes);
  }

  return total;
};
console.log(bake(r, a));

/* 


  function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}
*/
