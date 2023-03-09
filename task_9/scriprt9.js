//================================= Задача 9 ====================================

// Задача 9. Дано масив імен. Сформувати масив з перших літер цих імен.


const arrNames = ['Ivan','Sergey','Nataliy','Ana','Den','Koly']
const arrFirstLetersNames = []
arrNames.forEach((names) => {
	arrFirstLetersNames.push(names[0])
} )
document.write(`<p>Дано масив : <span>[${arrNames}]</span></p>`)
document.write(
  `<p>Масив з перших літер цих імен : <span>[${arrFirstLetersNames}]</span></p>`
)