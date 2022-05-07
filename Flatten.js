// //arrays.js
// Реализуйте и экспортируйте функцию flatten(). Эта функция принимает на вход массив и выпрямляет его: если элементами массива являются массивы, то flatten сводит всё к одному массиву, раскрывая один уровень вложенности.

// В js эта функция реализована как метод flat() у массивов. Его использовать нельзя.

// import { flatten } from '../arrays.js';
 
// // Для пустого массива возвращается []
// flatten([]); // []
// flatten([1, [3, 2], 9]); // [1, 3, 2, 9]
// flatten([1, [[2], [3]], [9]]); // [1, [2], [3], 9]
// Реализуйте добавление элементов вложенного массива в результирующий через spread-оператор.

export const flatten = (arr) => {
  if (arr.length === 0) {
    return arr;
  }

  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = [...result,...item];
  } else {
      result = [...result,item];
  }
}
return result;
};


//тесты 

// test('flatten', () => {
//   expect(flatten([])).toEqual([]);
//   expect(flatten([1, [3, 2], 9])).toEqual([1, 3, 2, 9]);
//   // expect(flatten([[9, 8], [], [0], 10])).toEqual([9, 8, 0, 10]);
//   // expect(flatten([1, [[2], [3]], [9]])).toEqual([1, [2], [3], 9]);
// });
