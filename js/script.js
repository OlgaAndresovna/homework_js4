/*Задача 1  
for (let i = 0; i < 11; i++) {
    if (i === 0) {
          console.log(`${i} - это ноль`);
      } else if (Number.isInteger(i / 2)) {
          console.log(`${i} - нечетное число`);
      } else {
          console.log(`${i} - четное число`);
    }
  }*/

/*Задача 2*/
const arr = [1, 2, 3, 4, 5, 6, 7];
arr2 = [].concat(arr.slice(0, 3), arr.slice(5, 7));
console.log(arr2);