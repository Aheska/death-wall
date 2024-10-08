// Liste des 27 phrases avec leurs images associées
const phrasesWithImages = [
    { phrase: "Map aléatoire", image: "images/house.png" },
    { phrase: "-1 preuve", image: "images/print.png" },
    { phrase: "-1 preuve", image: "images/print.png" },
    { phrase: "-1 preuve", image: "images/print.png" },
    { phrase: "Photo fantôme obligatoire", image: "images/ghost.png" },
    { phrase: "Os obligatoire", image: "images/bone.png" },
    { phrase: "3 objets baissent d'un tier", image: "images/ghost.png" },
    { phrase: "3 objets baissent d'un tier", image: "images/ghost.png" },
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
    { phrase: "Bloquer une chasse par un crucifix", image: "images/crucifix.png" },
    { phrase: "Avoir le fantôme qui souffle une bougie", image: "images/candle.png" },
    { phrase: "+25% de vitesse pour le fantôme", image: "images/speed.png" },
    { phrase: "+25% de vitesse pour le fantôme", image: "images/speed.png" },
    { phrase: "Lumières interdites", image: "images/dark.png" },
];

const phrasesWithBonus = [
  { phrase: "Ouvre 2 cases en plus", bonus: "Ça suffit déjà" },
  { phrase: "Vous restez toujours collé ensemble", bonus: "Annulation d'une case au choix" },
  { phrase: "Un seul objet à la fois", bonus: "-1 case au prochain tirage" },
  { phrase: "Toujours fermer la porte derrière soi", bonus: "-1 case au prochain tirage" },
  { phrase: "Interdiction de te cacher dans la même cachette deux fois", bonus: "-1 case au prochain tirage" },
  { phrase: "Interdiction de parler au fantôme", bonus: "-1 case au prochain tirage" },
  { phrase: "Tout le monde utilise uniquement les objets du fantôme tiré", bonus: "-2 cases au prochain tirage" },
  { phrase: "Pas d'objets électroniques", bonus: "Annulation d'une case au choix" },
  { phrase: "Objets électroniques uniquement", bonus: "Annulation d'une case au choix" },
  { phrase: "Tarot obligatoire, et vous faites un tarot russe", bonus: "Annulation de 2 cases au choix" },
  { phrase: "Une chasse maudite à faire", bonus: "-1 case au prochain tirage" },
  { phrase: "Challenge le fantôme durant une chasse", bonus: "-1 case au prochain tirage" },
  { phrase: "Le fantôme doit souffler 3 bougies uniquement en chasse", bonus: "Annulation d'une case au choix" },
  { phrase: "Ranger tout le matériel dans le camion correctement avant de partir ", bonus: "Annulation d'une case au choix" },
];

const objets = [
  "Lampe torche", "UV", "Caméra", "Trépied", "Appareil photo", 
  "Spirit box", "Thermomètre", "EMF", "Livre", "DOTS", 
  "Sel", "Encens", "Bougie", "Crucifix", "Pilules", "Équipement de tête",
  "Micro parabolique", "Détecteur de mouvement", "Capteur sonore"
];

const fantomes = [
  "Esprit", "Spectre", "Fantôme", "Poltergeist", "Banshee", "Djinn", 
  "Cauchemar", "Revenant", "Ombre", "Démon", "Yurei", "Oni", "Yokai",
  "Hantu", "Goryo", "Myling", "Onryo", "Jumeaux", "Raiju", "Obake",
  "Mimic", "Moroï", "Deogen", "Thayé"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(phrasesWithImages);

const gridContainer = document.getElementById("grid");

for (let i = 0; i < 27; i++) {
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
    phraseText.innerText = phrasesWithImages[i].phrase;

    const number = document.createElement('div');
    number.classList.add('backnumber');
    number.innerText = (i + 1);

    back.appendChild(number);
    back.appendChild(image); 
    back.appendChild(phraseText);

    gridItem.appendChild(front);
    gridItem.appendChild(back);

    gridItem.addEventListener('click', function() {
        gridItem.classList.add('flipped');
    });

    gridContainer.appendChild(gridItem);
}

function revelerCartes(){
    const cartes = document.querySelectorAll('.grid-item');
    cartes.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('flipped');  // Retourne la case
        }, index * 300);  // Ajoute un délai de 300ms entre chaque case
      });
}

document.getElementById('reveal').addEventListener('click', revelerCartes);

function getRandomPhraseWithBonus() {
  const randomIndex = Math.floor(Math.random() * phrasesWithBonus.length);
  return phrasesWithBonus[randomIndex];
}

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