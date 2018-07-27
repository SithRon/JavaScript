function initComportementJs()
	{
		var btnEnregistrer = document.querySelector("#btnEnregistrer");
		btnEnregistrer.addEventListener("click", enregistrer, false);
	}

//function constructeur pour type d'objet "Client"
function Client(nom, prenom)
	{
		this.nom = nom;
		this.prenom = prenom;
	}

//déclaration d'un tableau 
var tabClients = []; 

function enregistrer()
	{
		var nom = document.querySelector("#nom").value; 
		var prenom = document.querySelector("#prenom").value;
		
		//var client = new Client(nom, prenom)//création d'une instance Client
		var client = 
		{
			nom : nom,
			prenom : prenom,
		}; //expression "objet littéral javascript" (très proche du format JSON)
		//peut remplacer le constructeur "Client"

		//on peut dynamiquement ajouter des propriétés supplémentaires sur l'objet client :
		client.telephone = document.querySelector("#telephone").value;
		client.adresse = document.querySelector("#adresse").value;
		client.email = document.querySelector("#email").value;
		//JSON.stringify() est une fonction prédéfinie par javascript qui construit
		//automatiquement une chaine de caractère au format JSON à partir de 
		// toutes les valeurs d'un objet javascript, ça ressemble un peu au
		//.toString() de java
		var clientAsJson = JSON.stringify(client);
		tabClients.push(client); // ajout var client dans tabClients

		document.querySelector("#spanResultat").innerHTML = clientAsJson;
		document.querySelector("#spanTableau").innerHTML = JSON.stringify(tabClients);
	}