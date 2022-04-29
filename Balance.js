const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)
const balanse = (braces) => {
  let stack = [];
  let size = 0;
  for (let i = 0; i < braces.length; i++) {
    if (openingSymbols.indexOf(braces[i]) !== -1) {
      stack[size] = braces[i];
      size++;
    } else if (closingSymbols.indexOf(braces[i]) !== -1) {
      if (size === 0) { return false; }
      let index = closingSymbols.indexOf(braces[i]);
      if (stack[size - 1] === openingSymbols[index]) {
        size--;
      } else {
        return false;
      }
    }
  }

  return size === 0;
};
export default balanse;

// strings.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.

// Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

// Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
// Скобки должны закрываться в правильном порядке.
// import isBracketStructureBalanced from './strings.js';

// // Пример вложенности
// isBracketStructureBalanced('(>');  // false
// isBracketStructureBalanced('()');  // true
// isBracketStructureBalanced('[()]');  // true
// isBracketStructureBalanced('({}[])');  // true
// isBracketStructureBalanced('{<>}}'); // false
// isBracketStructureBalanced('([)]'); // false
// Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.
