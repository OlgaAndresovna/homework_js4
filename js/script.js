/*Задача 1  */
for (let i = 0; i < 11; i++) {
    if (i === 0) {
          console.log(`${i} - это ноль`);
      } else if (Number.isInteger(i / 2)) {
          console.log(`${i} - нечетное число`);
      } else {
          console.log(`${i} - четное число`);
    }
  }