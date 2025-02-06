document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const shuffledQuestions = shuffleArray(questions);
    let currentQuestionIndex = 0;

    function showQuestion() {
        const questionData = shuffledQuestions[currentQuestionIndex];
        const shuffledOptions = shuffleArray(
            questionData.options.map((option, index) => ({
                text: option,
                index: index 
            }))
        ); 

        quizContainer.innerHTML = `
            <div class="question">
                <h2>${questionData.question}</h2>
                <div class="options">
                    ${shuffledOptions
                        .map(
                            (option) =>
                                `<button class="option" data-index="${option.index}">${option.text}</button>`
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

        document.querySelectorAll(".option").forEach(button => {
            button.disabled = true;
            const buttonIndex = parseInt(button.getAttribute("data-index"));
            if (buttonIndex === shuffledQuestions[currentQuestionIndex].answer) {
                button.style.border = "2px solid rgba(76, 175, 80, 0.8)";
                button.style.backgroundColor = "rgba(76, 175, 80, 0.2)";
                button.style.color = "white";
            } else if (buttonIndex === selectedIndex && buttonIndex !== shuffledQuestions[currentQuestionIndex].answer) {
                button.style.border = "2px solid rgba(244, 67, 54, 0.8)";
                button.style.backgroundColor = "rgba(244, 67, 54, 0.2)";
                button.style.color = "white";
            }
        });

        if (selectedIndex === shuffledQuestions[currentQuestionIndex].answer) {
            feedback.innerHTML = `<p style="color: rgba(76, 175, 80, 0.9);"><strong>Correcte!</strong> <br><br> ${shuffledQuestions[currentQuestionIndex].explanation}</p>`;
        } else {
            feedback.innerHTML = `<p style="color: rgba(244, 67, 54, 0.9);"><strong>Incorrecte!</strong> <br><br> ${shuffledQuestions[currentQuestionIndex].explanation}</p>`;
        }

        document.getElementById("next-btn").style.display = "block";
        document.getElementById("next-btn").classList.add("visible");
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            quizContainer.innerHTML = `<h2>Has completat el qüestionari!</h2>`;
        }
    }

    function shuffleArray(array) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    showQuestion();
});
