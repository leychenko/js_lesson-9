//================================= Задача 10 ====================================
// Задача 10.Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

const priceGRN = [1200,568,2500,650,900,451,70,198]
const taxAllPrice = getTaxPrice(priceGRN)

function getTaxPrice(prices) {
	const tax = 0.2
	let countAllTax = 0
	const countTax = prices.map((element) => element * tax)
	for (const allTax of countTax) {
		countAllTax += allTax
  }
	return countAllTax
}



document.write(`<p>Дано масив: [${priceGRN}]</p>`)
document.write(
  `<p>Величину сплаченого податку: <span>${taxAllPrice.toFixed(2)} грн</span></p>`
)