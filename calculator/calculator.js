module.exports = {
  add,
};

// function add(args) {// using the word arguments will grab the parameters by defualt
//   return Array.from(arguments).reduce((sum, value) => {
//     return sum + value;
//   }, 0)
// }


function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((sum, value) => {
    return sum + value;
  }, 0);
}

// this was not needed, the above function passes all tests ^ by default?
// function add(a = 0, b = 0) {
//   if (a + b) {
//   return a + b ;
//   }
//   if (a || b) {
//     return a || b
//   }
// }