function calculerAddition()
	{

		var a = (document.getElementById("a")).value;
		var b = (document.getElementById("b")).value;
		var res = Number(a) + Number(b);
		document.getElementById("spanResultat").innerHTML = res;
	}