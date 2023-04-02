// Отримання числа від користувача
let number = prompt("Введіть число:");

// Функція для розрахунку суми цифр числа
function sumOfDigits(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i], 10);
  }
  return sum;
}

// Розрахунок суми цифр числа
let result = sumOfDigits(number);

// Виведення результату
alert("Сума цифр числа " + number + " дорівнює " + result);
