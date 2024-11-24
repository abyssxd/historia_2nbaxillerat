function showAnswer(button, answer) {
    const answerElement = document.createElement('p');
    answerElement.textContent = answer;
    answerElement.style.color = 'green';
    button.parentNode.appendChild(answerElement);
    button.disabled = true;
    button.style.backgroundColor = '#ddd';
}
