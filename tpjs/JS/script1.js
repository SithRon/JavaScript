function afficher(pVal){
			console.log(pVal);
			//document.write(pVal); //<-- écrit dans la page en écrasant le reste
			(document.getElementById("spanMsg")).innerHTML = pVal;
			alert(pVal);
			}