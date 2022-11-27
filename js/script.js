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

/*Задача 2
const arr = [1, 2, 3, 4, 5, 6, 7];
arr2 = [].concat(arr.slice(0, 3), arr.slice(5, 7));
console.log(arr2);*/

/*Задача 3
const array = [];
for (let i = 0; i < 5; i++) {
    array[i] = Math.floor(Math.random() * 9);
}
console.log(array);

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(`Сумма массива ${sum}`);

let minNumber = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
        minNumber = array[i];
    }
}
console.log(minNumber)

let findNumber = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log(`В массиве есть число 3`)
        break;
    }
}
*/
/*Задача 4
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
    let result;

    if (elem % 2 == 0) {
        result = elem * elem;
    } else if (elem % 3 == 0) {
        result = elem * elem * elem;
    } else {
        continue;
    }
    console.log(result);
}*/
/*Задача 5
const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
let count = 0;
for (let elem of arr) {
    if (elem == 3) {
        counter++
    } else if (elem == 2) {
        count++
    }
}
console.log(`В массиве ${counter} цифры 3`);*/

/*Задача 6
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);*/

/* Необязательное задание*/
for (let i = 0; i < 21; i++) {
    console.log('x'.repeat(i));
}