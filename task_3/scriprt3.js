

//================================= Задача 3 ====================================


// Задача 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

const userValue = parseInt(prompt("Введіть кількість елементів"))

const arrFirstNumberFive = new Array(userValue).fill(1)
arrFirstNumberFive.fill(7, 5)

document.write(
  `<p>Масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками: <span> [${arrFirstNumberFive}]</span></p>`
)