function showAnswer(button, answer) {
    const answerElement = document.createElement('p');
    answerElement.textContent = answer;
    answerElement.style.color = 'green';
    button.parentNode.appendChild(answerElement);
    button.disabled = true; // Evita múltiples clics
    button.style.backgroundColor = '#ddd';
}
