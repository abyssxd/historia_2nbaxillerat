document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    let currentQuestionIndex = 0;

    function showQuestion() {
        const questionData = questions[currentQuestionIndex];
        quizContainer.innerHTML = `
            <div class="question">
                <h2>${questionData.question}</h2>
                <div class="options">
                    ${questionData.options
                        .map(
                            (option, index) =>
                                `<button class="option" data-index="${index}">${option}</button>`
                        )
                        .join("")}
                </div>
                <div class="feedback" id="feedback"></div>
            </div>
            <button id="next-btn" style="display: none;">Següent</button>
        `;

        const optionButtons = document.querySelectorAll(".option");
        optionButtons.forEach(button => {
            button.addEventListener("click", checkAnswer);
        });
        const nextButton = document.getElementById("next-btn");
        nextButton.addEventListener("click", nextQuestion);
    }

    function checkAnswer(event) {
        const selectedIndex = parseInt(event.target.getAttribute("data-index"));
        const feedback = document.getElementById("feedback");

        if (selectedIndex === questions[currentQuestionIndex].answer) {
            feedback.innerHTML = `<p style="color: green;">Correcte! ${questions[currentQuestionIndex].explanation}</p>`;
        } else {
            feedback.innerHTML = `<p style="color: red;">Incorrecte! ${questions[currentQuestionIndex].explanation}</p>`;
        }

        document.querySelectorAll(".option").forEach(button => {
            button.disabled = true;
        });
        document.getElementById("next-btn").style.display = "block"; 
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            quizContainer.innerHTML = `<h2>Has completat el qüestionari!</h2>`;
        }
    }

    showQuestion();
});
