

//================================= Задача 6 ====================================
// Задача 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2.

const arrValues = [12,42,51,3,11,7,34,15]
const arrMultiplyValues = []
	arrValues.forEach((element,index,arrRaf) => {
		if(element > arrRaf[0]) arrMultiplyValues.push(arrRaf[index] * 2)
	})





document.write(
  `<p>Данний массив <span>[${arrValues}]</span></p><p>Усі елементи, які більші за перший елемент помножити на 2: <span>[${arrMultiplyValues}]</span></p> `
)