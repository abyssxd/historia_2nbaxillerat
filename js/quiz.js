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
            <div class="btnContainer">
            <button id="next-btn" style="display: none;">Següent</button>
            </div>
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

        document.querySelectorAll(".option").forEach((button, index) => {
            button.disabled = true;
            if (index === questions[currentQuestionIndex].answer) {
                button.style.border = "2px solid rgba(76, 175, 80, 0.8)"; 
                button.style.backgroundColor = "rgba(76, 175, 80, 0.2)"; 
                button.style.color = "black";
            } else if (index === selectedIndex && index !== questions[currentQuestionIndex].answer) {
                button.style.border = "2px solid rgba(244, 67, 54, 0.8)";
                button.style.backgroundColor = "rgba(244, 67, 54, 0.2)";
                button.style.color = "black";
            }
        });

        if (selectedIndex === questions[currentQuestionIndex].answer) {
            feedback.innerHTML = `<p style="color: rgba(76, 175, 80, 0.9);">Correcte! ${questions[currentQuestionIndex].explanation}</p>`;
        } else {
            feedback.innerHTML = `<p style="color: rgba(244, 67, 54, 0.9);">Incorrecte! ${questions[currentQuestionIndex].explanation}</p>`;
        }

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
