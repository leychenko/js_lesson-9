//================================= Задача 2 ====================================
// Задача 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

const userValue = parseInt(prompt("Введіть кількість елементів"))

const arrNumbers = new Array(userValue).fill(1)
arrNumbers.fill(7, arrNumbers.length / 2)

document.write(`${arrNumbers}`)