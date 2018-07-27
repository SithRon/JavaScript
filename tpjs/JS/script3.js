function initComportementJs()
	{
		var btnEnregistrer = document.querySelector("#btnEnregistrer");
		btnEnregistrer.addEventListener("click", enregistrer, false);
	}

function Client(nom, prenom)
	{
		this.nom = nom;
		this.prenom = prenom;
	}

function enregistrer()
	{
		var client = new Client(nom, prenom)
		client.nom = document.querySelector("#nom").value; 
		client.prenom = document.querySelector("#prenom").value;
		client.telephone = document.querySelector("#telephone").value;
		client.adresse = document.querySelector("#adresse").value;
		client.email = document.querySelector("#email").value;

		var clientAsJson = JSON.stringify(client);
		document.querySelector("#spanResultat").innerHTML = clientAsJson;
	}


