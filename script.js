// Liste des malus avec leurs images
const phrasesWithImages = [
  { phrase: "Map aléatoire", image: "images/house.png" },
  { phrase: "-1 preuve", image: "images/print.png" },
  { phrase: "-1 preuve", image: "images/print.png" },
  { phrase: "-1 preuve", image: "images/print.png" },
  { phrase: "Photo fantôme physique obligatoire", image: "images/ghost.png" },
  { phrase: "Os obligatoire", image: "images/bone.png" },
  { phrase: "3 objets baissent d'un tier", image: "images/repairing.png" },
  { phrase: "3 objets baissent d'un tier", image: "images/repairing.png" },
  { phrase: "-2 encens", image: "images/smudge.png" },
  { phrase: "Tout les objets sont à un seul exemplaire", image: "images/one.png" },
  { phrase: "Utilisation de l'objet maudit obligatoire", image: "images/cursed.png" },
  { phrase: "-2s de période de grâce", image: "images/grace.png" },
  { phrase: "-1s de période de grâce", image: "images/grace.png" },
  { phrase: "-1 cachette", image: "images/hide.png" },
  { phrase: "-1 cachette", image: "images/hide.png" },
  { phrase: "Perte d'un objet", image: "images/steal.png" },
  { phrase: "Perte d'un objet", image: "images/steal.png" },
  { phrase: "Perte d'un objet", image: "images/steal.png" },
  { phrase: "-10% pilules", image: "images/pill.png" },
  { phrase: "-10% pilules", image: "images/pill.png" },
  { phrase: "2/3 objectifs", image: "images/objective.png" },
  { phrase: "Moniteur de santé off", image: "images/screen.png" },
  { phrase: "Moniteur d'activité off", image: "images/screen.png" },
  { phrase: "-25% de santé mentale", image: "images/sanity.png" },
  { phrase: "-25% de santé mentale", image: "images/sanity.png" },
  { phrase: "-25% de santé mentale", image: "images/sanity.png" },
  { phrase: "+25% de vitesse pour le fantôme", image: "images/speed.png" },
  { phrase: "+25% de vitesse pour le fantôme", image: "images/speed.png" },
  { phrase: "Lumières interdites", image: "images/dark.png" },
  { phrase: "Photo fantôme translucide obligatoire", image: "images/ghost.png" },
  { phrase: "Photo fantôme ombre obligatoire", image: "images/ghost.png" },
  { phrase: "Capter une bougie soufflée par vidéo et son", image: "images/action.png" },
  { phrase: "Prendre en vidéo un crucifix brûlé", image: "images/camera.png" },
  { phrase: "Prendre en vidéo un objet lancé", image: "images/camera.png" },
  { phrase: "Prendre en vidéo une lumière se briser", image: "images/camera.png" },
  { phrase: "Capter un rire", image: "images/sound-system.png" },
  { phrase: "Capter une phrase", image: "images/sound-system.png" },
  { phrase: "Capter un chant", image: "images/sound-system.png" },
];

// Liste des défis du tarot et leurs bonus
const phrasesWithBonus = [
{ phrase: "Ouvre 2 cases en plus", bonus: "Ça suffit déjà" },
{ phrase: "Vous restez toujours collé ensemble", bonus: "Annulation d'une case au choix" },
{ phrase: "Un seul objet à la fois", bonus: "-1 case au prochain tirage" },
{ phrase: "Toujours fermer la porte derrière soi", bonus: "-1 case au prochain tirage" },
{ phrase: "Interdiction de se cacher dans la même cachette deux fois", bonus: "-1 case au prochain tirage" },
{ phrase: "Interdiction de parler au fantôme", bonus: "-1 case au prochain tirage" },
{ phrase: "Tout le monde utilise uniquement les objets du fantôme tiré", bonus: "-2 cases au prochain tirage" },
{ phrase: "Pas d'objets électroniques", bonus: "Annulation d'une case au choix" },
{ phrase: "Objets électroniques uniquement", bonus: "Annulation d'une case au choix" },
{ phrase: "Tarot obligatoire, et vous faites un tarot russe", bonus: "Annulation de 2 cases au choix" },
{ phrase: "Une chasse maudite à faire", bonus: "-1 case au prochain tirage" },
{ phrase: "Challenge le fantôme durant une chasse", bonus: "-1 case au prochain tirage" },
{ phrase: "Ranger tout le matériel dans le camion correctement avant de partir", bonus: "Annulation d'une case au choix" },
{ phrase: "Vous passez d'une base pro à une base cauchemar", bonus: "Annulation de 2 cases au choix" },
{ phrase: "Une voyelle dans le nom = un objet de preuve possible", bonus: "Annulation d'une case au choix" },
{ phrase: "Faire 10 photos 3 étoiles sans en rater une seule", bonus: "Annulation d'une case au choix" },
];

// Liste des objets Phasmophobia
const objets = [
"Lampe torche", "UV", "Caméra", "Trépied", "Appareil photo", 
"Spirit box", "Thermomètre", "EMF", "Livre", "DOTS", 
"Sel", "Encens", "Bougie", "Crucifix", "Pilules", "Équipement de tête",
"Micro parabolique", "Détecteur de mouvement", "Capteur sonore"
];

// Liste des fantômes Phasmophobia
const fantomes = [
"Esprit", "Spectre", "Fantôme", "Poltergeist", "Banshee", "Djinn", 
"Cauchemar", "Revenant", "Ombre", "Démon", "Yurei", "Oni", "Yokai",
"Hantu", "Goryo", "Myling", "Onryo", "Jumeaux", "Raiju", "Obake",
"Mimic", "Moroï", "Deogen", "Thayé"
];

// Mélange des phrases pour garder les 27 premières
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Réalisation du mélange
shuffleArray(phrasesWithImages);

// Création de la grille
const gridContainer = document.getElementById("grid");

for (let i = 0; i < phrasesWithBonus.length; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');

  const front = document.createElement('div');
  front.classList.add('front');
  front.innerText = "Case " + (i + 1);

  const back = document.createElement('div');
  back.classList.add('back');

  const image = document.createElement('img');
  image.src = phrasesWithImages[i].image;
  image.alt = "Image associée à " + phrasesWithImages[i].phrase;

  const phraseText = document.createElement('div');
  phraseText.classList.add('text');
  phraseText.innerText = phrasesWithImages[i].phrase;

  const number = document.createElement('div');
  number.classList.add('backnumber');
  number.innerText = (i + 1);

  back.appendChild(number);
  back.appendChild(image); 
  back.appendChild(phraseText);

  gridItem.appendChild(front);
  gridItem.appendChild(back);

  gridContainer.appendChild(gridItem);
}

document.querySelectorAll('.grid-item').forEach((card) => {
card.addEventListener('click', function () {
  if (!this.classList.contains('flipped')) {
    this.classList.add('flipped');
  } else if (!this.classList.contains('canceled')) {
    this.classList.add('canceled');
  }
});
});

// Réléver les cartes unes à unes
function revelerCartes() {
const cartes = document.querySelectorAll('.grid-item');
let delay = 0;

cartes.forEach((carte) => {
  if (!carte.classList.contains('flipped')) {
    setTimeout(() => {
      carte.classList.add('flipped');
    }, delay);
    delay += 300; // Délai entre chaque carte
  }
});
}

document.getElementById('reveal').addEventListener('click', revelerCartes);

// Obtenir des phrases aléatoires au Tarot
function getRandomPhraseWithBonus() {
const randomIndex = Math.floor(Math.random() * phrasesWithBonus.length);
return phrasesWithBonus[randomIndex];
}

// Fonction pour retourner les cartes selon son type
function flipCard(card, type) {
  card.classList.toggle('flipped');

  const back = card.querySelector('.back');
  if (card.classList.contains('flipped')) {
    // Afficher une phrase aléatoire pour Tarot
    if (type === 'tarot') {
      const { phrase, bonus } = getRandomPhraseWithBonus();
      back.innerHTML = `
          <p>${phrase}</p>
          <p><em>Bonus:</em><br> ${bonus}</p>
      `;
    } 
    // Afficher un fantôme aléatoire pour la carte Fantôme
    else if (type === 'fantome') {
      const randomGhost = fantomes[Math.floor(Math.random() * fantomes.length)];
      back.textContent = randomGhost;
    } 
    // Afficher un objet aléatoire pour la carte Objet
    else if (type === 'objet') {
      const randomObject = objets[Math.floor(Math.random() * objets.length)];
      back.textContent = randomObject;
    }
  } else {
    // Réinitialiser le texte lorsque la carte est retournée à l'avant
    back.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} aléatoire ici`;
  }
}

document.getElementById('tarot-card').addEventListener('click', function() {
flipCard(this, 'tarot');
});
document.getElementById('ghost-card').addEventListener('click', function() {
flipCard(this, 'fantome');
});
document.getElementById('object-card').addEventListener('click', function() {
flipCard(this, 'objet');
});