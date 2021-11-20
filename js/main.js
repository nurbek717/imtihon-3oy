
// ///Pokemons________________________________________________________
var pokemons = [
	{
		"name": "Bulbasaur",
		"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
		"type": [
			"Grass",
			"Poison"
		],
	},
	{
		"name": "Ivysaur",
		"img": "http://www.serebii.net/pokemongo/pokemon/002.png",
		"type": [
			"Grass",
			"Poison"
		],
	},
	{
		"name": "Venusaur",
		"img": "http://www.serebii.net/pokemongo/pokemon/003.png",
		"type": [
			"Grass",
			"Poison"
		],
	},
	{
		"name": "Charmander",
		"img": "http://www.serebii.net/pokemongo/pokemon/004.png",
		"type": [
			"Fire"
		],
	},
	{
		"name": "Charmeleon",
		"img": "http://www.serebii.net/pokemongo/pokemon/005.png",
		"type": [
			"Fire"
		],
	},
	{
		"name": "Charizard",
		"img": "http://www.serebii.net/pokemongo/pokemon/006.png",
		"type": [
			"Fire",
			"Flying"
		],
	},
	{
		"name": "Squirtle",
		"img": "http://www.serebii.net/pokemongo/pokemon/007.png",
		"type": [
			"Water"
		],
	},
	{
		"name": "Wartortle",
		"img": "http://www.serebii.net/pokemongo/pokemon/008.png",
		"type": [
			"Water"
		],
	},
	{
		"name": "Blastoise",
		"img": "http://www.serebii.net/pokemongo/pokemon/009.png",
		"type": [
			"Water"
		],
	},
	{
		"name": "Caterpie",
		"img": "http://www.serebii.net/pokemongo/pokemon/010.png",
		"type": [
			"Bug"
		],
	},
	{
		"name": "Metapod",
		"img": "http://www.serebii.net/pokemongo/pokemon/011.png",
		"type": [
			"Bug"
		],
	},
	{
		"name": "Butterfree",
		"img": "http://www.serebii.net/pokemongo/pokemon/012.png",
		"type": [
			"Bug",
			"Flying"
		],
	},
	{
		"name": "Weedle",
		"img": "http://www.serebii.net/pokemongo/pokemon/013.png",
		"type": [
			"Bug",
			"Poison"
		],
	},
	{
		"name": "Kakuna",
		"img": "http://www.serebii.net/pokemongo/pokemon/014.png",
		"type": [
			"Bug",
			"Poison"
		],
	},
	{
		"name": "Beedrill",
		"img": "http://www.serebii.net/pokemongo/pokemon/015.png",
		"type": [
			"Bug",
			"Poison"
		],
	},
	{
		"name": "Pidgey",
		"img": "http://www.serebii.net/pokemongo/pokemon/016.png",
		"type": [
			"Normal",
			"Flying"
		],
	},
	{
		"name": "Pidgeotto",
		"img": "http://www.serebii.net/pokemongo/pokemon/017.png",
		"type": [
			"Normal",
			"Flying"
		],
	},
	{
		"name": "Pidgeot",
		"img": "http://www.serebii.net/pokemongo/pokemon/018.png",
		"type": [
			"Normal",
			"Flying"
		],
	},
	{
		"name": "Rattata",
		"img": "http://www.serebii.net/pokemongo/pokemon/019.png",
		"type": [
			"Normal"
		],
	},
	{
		"name": "Raticate",
		"img": "http://www.serebii.net/pokemongo/pokemon/020.png",
		"type": [
			"Normal"
		],
	},
	{"name": "Onix",
	"img": "http://www.serebii.net/pokemongo/pokemon/095.png",
	"type": [
		"Rock",
		"Ground"
	]}
]

var elCardImg = document.querySelector("#card__img");
for (let i = 0; i < 21; i++) {

	var newDiv = document.createElement("div");
	var newH2 = document.createElement("h2");
	var newp = document.createElement("p");
	var newIMG = document.createElement("img");

	newIMG.setAttribute("src", pokemons[i].img);
	newDiv.appendChild(newIMG);



	newH2.textContent = "Name : " + pokemons[i].name;
	newDiv.appendChild( newH2);

	newp.textContent = "Type : " + pokemons[i].type;
	newDiv.appendChild(newp);



	newDiv.classList.add("list__item");

	elCardImg.appendChild(newDiv);
}

console.log(elCardImg);
// .classList.add("list__item");

