let weight = document.getElementById('weight');
let height = document.getElementById('height');

let calculate = document.getElementById('calculate');

let value = document.getElementById('bmi-value');
let status = document.getElementById('bmi-status');

calculate.addEventListener('click', () => {

	let w = parseFloat(weight.value);
	let h = parseFloat(height.value);
	
	if (isNaN(w) || isNaN(h) || w <= 0 || h <=0){
		value.textContent = 0;
		status.textContent = "Please enter valid weight and height!"
	}else{
		let bmiresult = weight.value / (height.value / 100) ** 2
		value.textContent = bmiresult.toFixed(2)
		if (bmiresult < 16){
			status.textContent = "Severely underweight"
		}else if (bmiresult >= 16.0 && bmiresult <= 16.9){
			status.textContent = "Moderately underweight"
		}else if (bmiresult >= 17.0 && bmiresult <= 18.4){
			status.textContent = "Mildly underweight"
		}else if (bmiresult >= 18.5 && bmiresult <= 24.9){
			status.textContent = "Normal weight"
		}else if (bmiresult >= 25.0 && bmiresult <= 29.9){
			status.textContent = "Overweight"
		}else if (bmiresult >= 30.0 && bmiresult <= 34.9) {
			status.textContent = "Obese Class I (Moderate)"
		}else if (bmiresult >= 35.0 && bmiresult <= 39.9){
			status.textContent = "Obese Class II (Severe)"
		}else if (bmiresult >= 40) {
			status.textContent = "Obese Class III (Very severe or morbid obesity)"
		}else {
			value.textContent = 0
			status.textContent = "Please type your weight and height!"
		}
	}
})