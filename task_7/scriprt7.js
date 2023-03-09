

//=================================Задача 7====================================
// Задача 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

const prices = [200,3454,1200,458,2410,1800,362,1110,1001]
const sizeDiscont = 0.3
document.write(`<p>Дано масив: [${prices}]</p>`)
prices.forEach((element, index, arrRef)=>{
	if(element > 1000) arrRef[index] = (element - element * sizeDiscont).toFixed(2)
	
})
document.write(` <p>Отриманий результат:<span>[${prices}]</span></p>`)






