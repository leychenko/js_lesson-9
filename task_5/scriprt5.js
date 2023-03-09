//================================= Задача 5 ====================================
// Задача 5. Дано масив елементів. Знайти добуток додатних елементів


const valueArr = [21, -85, 4, 2, -99, 10, -265, 1, 8, -2, 9, -11]
let multiplicationValue = 1
for (const elem of valueArr) {
	if(elem > 0) multiplicationValue = multiplicationValue * elem
}

document.write(`<p>Дано масив : [${valueArr}]</p>`)
document.write(
  `<p>Добуток додатних елементів складає : <span>${multiplicationValue}</span></p>`
)