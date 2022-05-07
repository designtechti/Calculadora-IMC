	function calcular(){
		const peso = parseFloat(document.getElementById("peso").value);
		const altura = parseFloat(document.getElementById("altura").value);
		const imc = peso / altura ** 2;

		if(imc < 18.5) {	
			document.getElementById("result").style.display = 'block';
			document.getElementById("result").innerHTML= "Você está muito magro. Procure se alimentar!";
		} else if(imc >=18.5 && imc <= 24.99) {
			document.getElementById("result").style.display = 'block';
			document.getElementById("result").innerHTML= "Parabéns! Você está no peso ideal!";
		} else if(imc >= 25.0 && imc <= 29.99) {
			document.getElementById("result").style.display = 'block';
			document.getElementById("result").innerHTML= "Tá na hora de fazer uma dieta!";
		} else if (imc >= 30.0 && imc <= 39.99) {
			document.getElementById("result").style.display = 'block';
			document.getElementById("result").innerHTML= "Está faltando a academia, sem vergonha?";
		} else {
			document.getElementById("result").style.display = 'block';
			document.getElementById("result").innerHTML= "Você está muito acima do peso! Pare de comer bacon, desgraça!";
		}
	}