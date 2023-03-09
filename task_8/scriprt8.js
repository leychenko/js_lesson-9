//================================= Задача 8 ====================================
// Задача 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

const startLetersNubrer = 'A'
const carNumbers = ['BA4521TM','AA4512KA','AT4587KP','CB6523IH','AO8963KC']

const arrFirstLeterA = []
carNumbers.forEach((numbers) => {
  if(numbers[0] === startLetersNubrer)  arrFirstLeterA.push(numbers)
})

document.write(`<p>Масив з номерами які починаються на 'A' : <span>[${arrFirstLeterA}]</span></p>`)
