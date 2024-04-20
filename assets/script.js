const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// clique droit et gauche dans la console

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

arrow_left.addEventListener("click", () => {
  console.log("click gauche");
});

arrow_right.addEventListener("click", () => {
  console.log("click droit");
});


// Initialisation des valeurs (images)

const imageBanner = document.querySelector(".banner-img");
// on fait une variable pour récupérer l'image avec la class .banner-img
imageBanner.src = "assets/images/slideshow/" + slides[0].image;
//on indique à la variable la source de l'image (le chemin relatif + ce à quoi elle correspond dans le tableau pr avoir la bonne image, on commence à l'index 0 pour avoir la première image)


// Initialisation des valeurs (bullet)
let compteur = 0;
let bullet = document.querySelector(".dots");
//on fait une variable qui sélectionne la div avec la class dots

for (let i = 0; i < slides.length; i++) {
  //boucle pour indiquer le nombre de bullet à placer, tant que i est inférieur à la taille du tableau, on ajoute +1 à i
  let el = document.createElement("div");
  // on crée nos div dans une variable
  el.classList.add("dot");
  bullet.appendChild(el);
  //on ajoute les div .dot à l'intérieur de la div .dots
  //console.log(el);

  if (i == compteur) el.classList.add("dot_selected");
  //Condition si i est égale au numéro compteur, la div avec la class .dot aura la class .dot_selected.
}


// changement de bullet au déroulement du slide

function changeDotSelected() {
  let lstDots = document.querySelectorAll(".dot");
  //fonction avec une variable  qui récupère toutes les div  avec la class .dot
  //console.log(lstDots);

  for (let i = 0; i < lstDots.length; i++) {
    lstDots[i].classList.remove("dot_selected");
    //le nombre correspondant à la div dot ne doit pas avoir la class .dot_selected sauf si ( voir condition en dessous)
    if (i == compteur) lstDots[i].classList.add("dot_selected");
    // condition qui indique que si i est égale au numéro que compteur, la div .dot prend la class .dot_selected
  }
}


// changement d'images et texte au clic

const text = document.getElementById("banner").querySelector("p");

arrow_left.addEventListener("click", function () {
  if (compteur == 0) {
    compteur = slides.length - 1;
  } else {
    compteur = compteur - 1;
    //quand cpt est à zéro, cpt correspond à la taille de mon tableau -1, donc le dernier index, sinon on enlève -1 à la valeur de cpt
  }

  imageBanner.src = "assets/images/slideshow/" + slides[compteur].image;
  // on indique la source à afficher selon le numéro du compteur.
  text.innerHTML = slides[compteur].tagLine;
  //modification du texte selon image. On prend la tagline dans le tableau qu'on injecte à la variable text grâce à innerHTML
  changeDotSelected();
  // on appelle la fonction pour que le changement de bullet fonctionne
});

arrow_right.addEventListener("click", function () {
  if (compteur == slides.length - 1) {
    compteur = 0;
  } else {
    compteur = compteur + 1;
  }
  //quand le compteur est au dernier index du tableau (longueur du tableau -1), on remet à zéro sinon on lui ajoute +1

  imageBanner.src = "assets/images/slideshow/" + slides[compteur].image;
  text.innerHTML = slides[compteur].tagLine;

  changeDotSelected();
});
