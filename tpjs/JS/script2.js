function calculerOperation(pOperation)
	{
		var a = document.querySelector("#a").value
		//(document.getElementById("a")).value; 
		var b = document.querySelector("#b").value 
		//(document.getElementById("b")).value;
		
		var res = 0;
		if (pOperation == '+')
			{
				res = Number(a) + Number(b); //conversion en number
			}
		else if (pOperation == '*')
			{
				res = a * b;
			}
		document.querySelector("#spanResultat").innerHTML = res;
	}

function calculerMultiplication()
	{
		calculerOperation("*");
	}

function initComportementJs()
	{
		var btnMultiplication = document.querySelector("#btnMultiplication")
		//on enregistre le déclement de la fonction calculerMultiplication()
		btnMultiplication.addEventListener("click", calculerMultiplication, false)
		//en l'associant à l'évenement "click" sur la zone dont l'id est btnMultiplication
	}