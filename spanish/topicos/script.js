// Datos de Flashcards
const flashcards = [
  { title: "Amor post mortem", spanish: "Amor que sigue después de la muerte.", english: "Love that continues after death.", learnt: false },
  { title: "Aurea mediocritas", spanish: "La virtud del equilibrio y la moderación.", english: "The virtue of balance and moderation.", learnt: false },
  { title: "Beatus ille", spanish: "Vida feliz y sencilla en el campo.", english: "Simple, happy life in the countryside.", learnt: false },
  { title: "Carpe diem", spanish: "Aprovecha el momento presente.", english: "Seize the present moment.", learnt: false },
  { title: "Contemptus mundi", spanish: "Rechazo de lo material por lo espiritual.", english: "Rejection of the material for the spiritual.", learnt: false },
  { title: "Descriptio puellae", spanish: "Descripción ideal de la belleza femenina.", english: "Idealized description of female beauty.", learnt: false },
  { title: "Donna angelicata", spanish: "Mujer vista como pura y angelical.", english: "Woman seen as pure and angelic.", learnt: false },
  { title: "Homo viator", spanish: "El hombre como viajero en la vida.", english: "Man as a traveler through life.", learnt: false },
  { title: "Locus amoenus", spanish: "Lugar perfecto, idílico y bello.", english: "A perfect, idyllic, and beautiful place.", learnt: false },
  { title: "Omnia mors aequat", spanish: "La muerte iguala a todos.", english: "Death makes everyone equal.", learnt: false },
  { title: "Quotidie morimur", spanish: "Cada día estamos más cerca de la muerte.", english: "Every day brings us closer to death.", learnt: false },
  { title: "Somnium imago mortis", spanish: "El sueño como símbolo de la muerte.", english: "Sleep as a symbol of death.", learnt: false },
  { title: "Tempus fugit", spanish: "El tiempo vuela, pasa rápido.", english: "Time flies, passes quickly.", learnt: false },
  { title: "Theatrum mundi", spanish: "El mundo como un teatro.", english: "The world as a theater.", learnt: false },
  { title: "Ubi sunt", spanish: "¿Dónde están? Reflexión sobre lo perdido.", english: "Where are they? Reflection on what’s lost.", learnt: false },
  { title: "Vanitas vanitatum", spanish: "Todo es vanidad; nada dura para siempre.", english: "All is vanity; nothing lasts forever.", learnt: false },
  { title: "Venatus amoris", spanish: "El amor visto como un juego o caza.", english: "Love seen as a game or hunt.", learnt: false },
  { title: "Vita flumen", spanish: "La vida como un río que fluye.", english: "Life as a river that flows.", learnt: false },
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

