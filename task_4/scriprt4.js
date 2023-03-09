"use strict"

//================================= Задача 4 ====================================
// Задача 4.Дано масив елементів. Вивести на екран елементи, що більші за 100

const valueArr = [210,85,42,120,99,101,265,1,78,952,19,111]


const numberThanMore_100 = []
for (const elem of valueArr) {
	if (elem > 100) numberThanMore_100.push(elem)
}
document.write(`<p>Дано масив : [${valueArr}]</p>`)
document.write(`<p>Результат : [<span>${numberThanMore_100}</span>]</p>`)
