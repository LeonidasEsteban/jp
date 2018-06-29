const copy = [
  'Si ganara el premio por pereza, enviaría a alguien para que lo recogiera por mí.',
  'Cuando la gente me dice “te vas a arrepentir de eso por la mañana”, me duermo hasta despertar por la tarde, porque soy un solucionador de problemas.',
  'Hoy alguien me dijo que era flojo. Casi le contesto.',
  'Hice una enorme lista de cosas por hacer para hoy. Solamente que no puedo averiguar quién las va a hacer.',
  'Yo y mi cama somos perfectos el uno para el otro, pero mi despertador sigue tratando de separarnos.',
  'Solo quería que supieras que a alguien le importas. A mi no, pero a alguien sí.',
  'Por la noche, no puedo dormirme. Por la mañana, no puedo levantarme.',
  'No hacer nada es difícil, nunca se sabe cuando terminas.',
  'No soy perezoso, estoy en modo de ahorrar energía.',
  'Un día sin sol es, ya sabes, la noche.',
  'Procastinar es mantener el ritmo de ayer',
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomCopy = getRandomInt(10);
const randomImage = getRandomInt(19);


const $image = document.getElementById('image');
const $copy = document.getElementById('copy');

$image.setAttribute('src', `./images/${randomImage}.jpg`);
$copy.textContent = copy[randomCopy];
