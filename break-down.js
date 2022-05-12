const products = [
    {name: 'asuss laptop', price:45000},
    {name: 'apple watch', price:9000},
    {name: 'smart watch', price:6000},
    {name: 'samsung watch', price:5000},
    {name: 'microsoft laptop', price:4000},
    {name: 'hp laptop', price:55000},
    {name: 'iphone 14', price:115000},
    {name: 'one plus phone 4', price:25000},
];

// for (const product of products){
//     if(product.price < 5000){
//         break;
//     }
//     console.log(product);
// }

// for(const product of products){
//     if(product.price < 10000){
//         continue;
//     }
//     console.log(product);
// }

console.log('after the loop');
// opopopopopopoppopo

function compare(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
  const result1 = compare(15, "15");
  console.log(result1);

  function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   
   const result = compare(25, 25);
   console.log(result);

//    const a = 9 ;
//    console.log(a.toString);
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}