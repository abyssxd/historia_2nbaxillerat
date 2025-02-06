// Datos de Flashcards - Figuras Retóricas
const flashcards = [
  { title: "Aliteración", spanish: "Repetición de sonidos consonantes.<br>Ejemplo: 'Mi mamá me mima'.", english: "Repetition of consonant sounds.<br>Example: 'Peter Piper picked a peck of pickled peppers.'", learnt: false },
  { title: "Anadiplosis", spanish: "Repetición de la última palabra de una oración al inicio de la siguiente.<br>Ejemplo: 'Temprano levantó la muerte el vuelo, temprano madrugó la madrugada.'", english: "Repetition of the last word of one sentence at the beginning of the next.<br>Example: 'Fear leads to anger. Anger leads to hate.'", learnt: false },
  { title: "Anáfora", spanish: "Repetición de una o varias palabras al comienzo de varias oraciones.<br>Ejemplo: 'Temprano levantó la muerte el vuelo. Temprano madrugó la madrugada.'", english: "Repetition of one or more words at the beginning of several sentences.<br>Example: 'Every day, every night, in every way, I am getting better and better.'", learnt: false },
  { title: "Antítesis", spanish: "Contraposición de ideas opuestas.<br>Ejemplo: 'Es tan corto el amor y es tan largo el olvido.'", english: "Juxtaposition of opposing ideas.<br>Example: 'It was the best of times, it was the worst of times.'", learnt: false },
  { title: "Apóstrofe", spanish: "Invocación directa a una persona o cosa ausente.<br>Ejemplo: '¡Oh muerte, muerte cruel!'", english: "Direct address to an absent person or thing.<br>Example: 'O Death, where is thy sting?'", learnt: false },
  { title: "Asíndeton", spanish: "Omisión de conjunciones para dar rapidez al discurso.<br>Ejemplo: 'Veni, vidi, vici.'", english: "Omission of conjunctions to speed up the discourse.<br>Example: 'I came, I saw, I conquered.'", learnt: false },
  { title: "Enumeración", spanish: "Listado de elementos relacionados.<br>Ejemplo: 'Vine, vi, vencí.'", english: "Listing of related elements.<br>Example: 'He bought apples, oranges, bananas, and grapes.'", learnt: false },
  { title: "Epanadiplosis", spanish: "Repetición de la palabra final al inicio de la misma oración.<br>Ejemplo: 'Confío en el amor, amor que me da fuerza.'", english: "Repetition of the final word at the beginning of the same sentence.<br>Example: 'The king is dead, long live the king.'", learnt: false },
  { title: "Epífora", spanish: "Repetición de palabras al final de varias oraciones.<br>Ejemplo: 'No puedo vivir sin ti, no puedo morir sin ti.'", english: "Repetition of words at the end of several sentences.<br>Example: 'See no evil, hear no evil, speak no evil.'", learnt: false },
  { title: "Epíteto", spanish: "Adjetivo que resalta una cualidad inherente del sustantivo.<br>Ejemplo: 'La blanca nieve.'", english: "Adjective that highlights an inherent quality of the noun.<br>Example: 'The silent night.'", learnt: false },
  { title: "Eufemismo", spanish: "Sustitución de una palabra o expresión por otra menos ofensiva.<br>Ejemplo: 'Pasar a mejor vida' en lugar de 'morir'.", english: "Substitution of a word or expression with a less offensive one.<br>Example: 'Passed away' instead of 'died.'", learnt: false },
  { title: "Hipérbaton", spanish: "Alteración del orden lógico de las palabras en una oración.<br>Ejemplo: 'De verdes sauces hay una espesura.'", english: "Alteration of the logical order of words in a sentence.<br>Example: 'Sweet was the night.'", learnt: false },
  { title: "Hipálage", spanish: "Atribución de una cualidad a una palabra diferente de la que le corresponde.<br>Ejemplo: 'Viento helado' en lugar de 'viento frío'.", english: "Attribution of a quality to a word different from the one it corresponds to.<br>Example: 'Cold wind' instead of 'wind that is cold.'", learnt: false },
  { title: "Hipérbole", spanish: "Exageración de una idea para darle énfasis.<br>Ejemplo: 'Tengo tanta hambre que podría comerme un elefante.'", english: "Exaggeration of an idea to give it emphasis.<br>Example: 'I'm so hungry I could eat a horse.'", learnt: false },
  { title: "Interrogación Retórica", spanish: "Pregunta que no espera respuesta real.<br>Ejemplo: '¿Quién no ama la paz?'", english: "Question that does not expect a real answer.<br>Example: 'Isn't it a beautiful day?'", learnt: false },
  { title: "Ironía", spanish: "Expresar lo contrario de lo que se quiere decir.<br>Ejemplo: '¡Qué puntual!' cuando alguien llega tarde.", english: "Expressing the opposite of what is meant.<br>Example: 'Great job!' when someone makes a mistake.", learnt: false },
  { title: "Lítote o Atenuación", spanish: "Expresión que niega lo contrario para afirmar algo de manera suave.<br>Ejemplo: 'No está mal' en lugar de 'Está bien'.", english: "Expression that negates the opposite to affirm something softly.<br>Example: 'Not bad' instead of 'Good.'", learnt: false },
  { title: "Metáfora", spanish: "Comparación implícita entre dos elementos sin usar palabras comparativas.<br>Ejemplo: 'Tus ojos son dos luceros.'", english: "Implicit comparison between two elements without using comparative words.<br>Example: 'Time is a thief.'", learnt: false },
  { title: "Metonimia", spanish: "Sustitución de un término por otro relacionado.<br>Ejemplo: 'La Casa Blanca anunció...' en lugar de 'El presidente anunció...'.", english: "Substitution of one term for another related term.<br>Example: 'The White House announced...' instead of 'The president announced...'", learnt: false },
  { title: "Oxímoron", spanish: "Unión de dos términos contradictorios.<br>Ejemplo: 'Silencio atronador.'", english: "Combination of two contradictory terms.<br>Example: 'Deafening silence.'", learnt: false },
  { title: "Paradoja", spanish: "Declaración que parece contradictoria pero encierra verdad.<br>Ejemplo: 'Menos es más.'", english: "Statement that seems contradictory but holds truth.<br>Example: 'Less is more.'", learnt: false },
  { title: "Paralelismo", spanish: "Repetición de estructuras gramaticales similares.<br>Ejemplo: 'Quiero vivir, quiero soñar, quiero amar.'", english: "Repetition of similar grammatical structures.<br>Example: 'I came, I saw, I conquered.'", learnt: false },
  { title: "Paronomasia", spanish: "Uso de palabras similares en sonido pero diferentes en significado.<br>Ejemplo: 'Vino con sabor a violeta.'", english: "Use of words that sound similar but have different meanings.<br>Example: 'A pun is its own reword.'", learnt: false },
  { title: "Personificación", spanish: "Atribución de cualidades humanas a animales o cosas.<br>Ejemplo: 'El sol sonríe en el cielo.'", english: "Attribution of human qualities to animals or things.<br>Example: 'The wind whispered through the trees.'", learnt: false },
  { title: "Políptoton", spanish: "Repetición de palabras derivadas de la misma raíz.<br>Ejemplo: 'Hombre hombre que nunca quiere ser hombre.'", english: "Repetition of words derived from the same root.<br>Example: 'With eager feeding food doth choke the feeder.'", learnt: false },
  { title: "Polisíndeton", spanish: "Uso excesivo de conjunciones.<br>Ejemplo: 'Y ríe y llora y canta.'", english: "Excessive use of conjunctions.<br>Example: 'He ran and jumped and laughed.'", learnt: false },
  { title: "Pleonasmo", spanish: "Uso de palabras redundantes para enfatizar.<br>Ejemplo: 'Subir arriba.', 'Bajar abajo.'", english: "Use of redundant words to emphasize.<br>Example: 'Cease and desist.', 'Free gift.'", learnt: false },
  { title: "Quiasmo", spanish: "Disposición cruzada de conceptos en una frase.<br>Ejemplo: 'Cuando hablamos somos los buenos, cuando callamos somos los sabios.'", english: "Cross arrangement of concepts in a sentence.<br>Example: 'Ask not what your country can do for you; ask what you can do for your country.'", learnt: false },
  { title: "Símil o Comparación", spanish: "Comparación explícita usando 'como', 'cual', etc.<br>Ejemplo: 'Valiente como un león.'", english: "Explicit comparison using 'like', 'as', etc.<br>Example: 'Brave as a lion.'", learnt: false },
  { title: "Sinestesia", spanish: "Fusión de dos sentidos en una sola expresión.<br>Ejemplo: 'Vio el sabor del azul.'", english: "Fusion of two senses in a single expression.<br>Example: 'The loud colors.'", learnt: false },
  { title: "Zeugma", spanish: "Uso de una palabra para relacionar dos conceptos diferentes.<br>Ejemplo: 'Tomó su sombrero y la decisión.'", english: "Use of one word to relate two different concepts.<br>Example: 'He stole my heart and my wallet.'", learnt: false },
];

// Variables de Estado
let currentIndex = 0;
let trackProgress = false;
let translateToEnglish = false;
let currentDeck = flashcards.slice(); // Inicializa con todas las flashcards

// Elementos del DOM
const flashcardContainer = document.getElementById("flashcards-container");
const knowCounter = document.getElementById("know-counter");
const stillLearningCounter = document.getElementById("still-learning-counter");
const currentCardCounter = document.getElementById("current-card-counter");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const resetBtn = document.getElementById("reset-btn");
const trackProgressToggle = document.getElementById("track-progress");
const translateBtn = document.getElementById("translate-btn");
const markLearntBtn = document.getElementById("mark-learnt-btn");
const markNotLearntBtn = document.getElementById("mark-not-learnt-btn");
const markButtonsContainer = document.querySelector(".mark-buttons");
const navigationButtonsContainer = document.querySelector(".navigation-buttons");

// Elementos del Modal
const modal = document.getElementById("completion-modal");
const closeButton = document.querySelector(".close-button");
const modalResetBtn = document.getElementById("modal-reset-btn");

// Inicializar Contadores
function updateCounters() {
  const learntCount = flashcards.filter(card => card.learnt).length;
  const stillLearningCount = flashcards.length - learntCount;

  knowCounter.textContent = `Know: ${learntCount}`;
  stillLearningCounter.textContent = `Still Learning: ${stillLearningCount}`;
  currentCardCounter.textContent = `${currentIndex + 1}/${currentDeck.length}`;
}

// Cargar Flashcard Actual
function loadFlashcard() {
  if (currentDeck.length === 0) {
    flashcardContainer.innerHTML = "<p>¡Todas las tarjetas han sido marcadas como aprendidas! Resetea para comenzar de nuevo.</p>";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    markButtonsContainer.style.display = "none";
    showModal();
    return;
  }

  const card = currentDeck[currentIndex];
  const description = translateToEnglish ? card.english : card.spanish;

  flashcardContainer.innerHTML = `
    <div class="flashcard" onclick="flipCard()">
      <div class="front">${card.title}</div>
      <div class="back">${description}</div>
    </div>
  `;

  // Mostrar u ocultar botones de marcado según Track Progress
  if (trackProgress) {
    markButtonsContainer.style.display = "flex";
    navigationButtonsContainer.style.display = "none";
  } else {
    markButtonsContainer.style.display = "none";
    navigationButtonsContainer.style.display = "flex";
  }

  // Actualizar estado de botones de navegación
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === currentDeck.length - 1;

  // Actualizar contadores
  updateCounters();

  // Verificar si todas las tarjetas están aprendidas
  if (flashcards.every(card => card.learnt)) {
    showModal();
  }
}

// Voltear Flashcard
function flipCard() {
  const flashcard = document.querySelector(".flashcard");
  flashcard.classList.toggle("flipped");
}

// Marcar como Aprendido
function markAsLearnt() {
  const card = currentDeck[currentIndex];
  card.learnt = true;
  updateCounters();
  checkCompletion();
  goToNextCard();
}

// Marcar como No Aprendido
function markAsNotLearnt() {
  const card = currentDeck[currentIndex];
  card.learnt = false;
  updateCounters();
  goToNextCard();
}

// Navegar a la Tarjeta Anterior
function goToPreviousCard() {
  if (currentIndex > 0) {
    currentIndex--;
    loadFlashcard();
  }
}

// Navegar a la Siguiente Tarjeta
function goToNextCard() {
  currentIndex++;
  if (currentIndex >= currentDeck.length) {
    // Ha completado el ciclo actual, revisar tarjetas no aprendidas
    const notLearntCards = flashcards.filter(card => !card.learnt);
    if (notLearntCards.length > 0) {
      currentDeck = notLearntCards.slice(); // Crear una nueva copia
      currentIndex = 0;
    } else {
      // Todas las tarjetas están aprendidas
      showModal();
      return;
    }
  }
  loadFlashcard();
}

// Resetear Todas las Tarjetas
function resetFlashcards() {
  flashcards.forEach(card => (card.learnt = false));
  currentDeck = flashcards.slice();
  currentIndex = 0;
  updateCounters();
  loadFlashcard();
}

// Alternar Track Progress
function toggleTrackProgress() {
  trackProgress = !trackProgress;
  trackProgressToggle.textContent = `Track Progress: ${trackProgress ? "ON" : "OFF"}`;
  if (trackProgress) {
    trackProgressToggle.classList.add("active");
    markButtonsContainer.style.display = "flex";
    navigationButtonsContainer.style.display = "none";
  } else {
    trackProgressToggle.classList.remove("active");
    markButtonsContainer.style.display = "none";
    navigationButtonsContainer.style.display = "flex";
  }
  loadFlashcard();
}

// Alternar Traducción al Inglés
function toggleTranslate() {
  translateToEnglish = !translateToEnglish;
  translateBtn.textContent = `Translate: ${translateToEnglish ? "ON" : "OFF"}`;
  if (translateToEnglish) {
    translateBtn.classList.add("active");
  } else {
    translateBtn.classList.remove("active");
  }
  loadFlashcard();
}

// Mostrar Modal
function showModal() {
  modal.style.display = "block";
}

// Cerrar Modal
function closeModal() {
  modal.style.display = "none";
}

// Event Listeners para Modal
closeButton.addEventListener("click", closeModal);
modalResetBtn.addEventListener("click", () => {
  resetFlashcards();
  closeModal();
});

// Cerrar Modal al Hacer Clic Fuera de Él
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Verificar Compleción
function checkCompletion() {
  if (flashcards.every(card => card.learnt)) {
    showModal();
  }
}

// Event Listeners para Botones
prevBtn.addEventListener("click", goToPreviousCard);
nextBtn.addEventListener("click", goToNextCard);
resetBtn.addEventListener("click", resetFlashcards);
trackProgressToggle.addEventListener("click", toggleTrackProgress);
translateBtn.addEventListener("click", toggleTranslate);
markLearntBtn.addEventListener("click", markAsLearnt);
markNotLearntBtn.addEventListener("click", markAsNotLearnt);

// Carga Inicial
document.addEventListener("DOMContentLoaded", () => {
  updateCounters();
  loadFlashcard();
});

