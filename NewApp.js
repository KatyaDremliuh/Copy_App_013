var questions = [
    {
        question: 'вопрос1',
        options: ['опция 1', 'опция 2', 'опция 3', 'опция 4', 'опция 5'],
        keys: [0, 1]
    },
    {
        question: 'вопрос2',
        options: ['опция 1', 'опция 2', 'опция 3', 'опция 4', 'опция 5'],
        keys: [0, 1]
    },
    {
        question: 'вопрос3',
        options: ['опция 1', 'опция 2', 'опция 3', 'опция 4', 'опция 5'],
        keys: [0, 1]
    },
    {
        question: 'вопрос4',
        options: ['опция 1', 'опция 2', 'опция 3', 'опция 4', 'опция 5'],
        keys: [0, 1]
    },
    {
        question: 'вопрос5',
        options: ['опция 1', 'опция 2', 'опция 3', 'опция 4', 'опция 5'],
        keys: [0, 1]
    }
];


function createQuestion() {
    console.log('createQuestion ', questions)
    var question = '';
    var answsArr = [];
    const answersKeyInts = [];

    question = prompt(`Введите текст вопроса: `, 'БЛА ЛА ЛА АЛА'); // чё-то не то
    /* проверить, что вопрос ввели */
    if (!question) {
        // переспросить
        alert('валидация вопроса'); // не РАБОТАЕТ
        // переспросить
        //confirm("Вы не ввели текст вопроса. Попробуйте ввести вопрос заново."); // вернет булевое значение (нах мне эта информацяи)

    } else {
        var answsLength = 4;
        for (var indexA = 0; indexA < answsLength; indexA++) {
            var inputAnswValue = prompt(`Введите текст ${indexA + 1} варианта ответа`);
            if (!inputAnswValue) {
                alert('валидация варианта ответа');
            } else if (inputAnswValue !== "" && inputAnswValue !== null) {
                answsArr.push(inputAnswValue);
            }
        }
        var correctAnsw = prompt("Введите номера правильных ответов\nчерез запятую. Нумерация начинается с\n1");
        if (correctAnsw === null) {
            console.log('cancel')
        }
        else if (!correctAnsw) {
            alert('валидация ключей');
        } else {
            const answersStrings = correctAnsw.split(',');
            for (var i = answersStrings.length; i >= 0; --i) {
                var answerInt = parseInt(answersStrings[i])
                if (answerInt) {
                    answersKeyInts.push(answerInt)
                }
            }
        }
    }

    // доплонительная валидация
    // потом
    questions.push({
        question: question,
        options: answsArr,
        keys: answersKeyInts
    });
    console.log('Q added', JSON.stringify(questions, "  "))
}

function clickStartTest() {
    disableButton('add-question');
    disableButton('start-test');
    var testContainer = document.getElementById('test')

    // нарисовать вопросы
    for (let indexQ = 0; indexQ < questions.length; indexQ++) {
        var br =  document.createElement("br");
        testContainer.append(br);
        var labelQ = createLabel(questions[indexQ].question);
        testContainer.append(labelQ);
        // нарисовать ответы
        var indexA = 0;
        do {
            var brInner =  document.createElement("br");
            testContainer.append(brInner);
            var labelA = createLabel(questions[indexQ].options[indexA]); // создать лейбл вар-та ответа 
            var checkboxA = createCheckbox(indexQ, indexA);
            testContainer.append(checkboxA); // появление чекбокса
            testContainer.append(labelA); // появление лейбла
            indexA++;
        }
        while (indexA < 4);
        testContainer.append(br);
        // answsArr = answsArr.splice(0, 4); // удалим 4 элемента, начиная с индекса 0
    }
    var button = document.createElement("button");
    button.onclick = submit;
    button.textContent = "отправить";
    testContainer.appendChild(button);

    console.log('clickStartTest', questions)
}


// функция СОЗДАТЬ ЛЕЙБЛ (для вар-тов ответа и для вопроса тоже???)
function createLabel(taskName) {
    var labelA = document.createElement("label");
    labelA.textContent = taskName;
    return labelA;
}


// функция СОЗДАТЬ ЧЕКБОКСы ДЛЯ ОТВЕТОВ
function createCheckbox(questionIndex, optionIndex) {
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.name = questionIndex;
    checkbox.value = optionIndex;

    return checkbox;
}

function submit() {
    var count = 0;
    for(let indexQ = 0; indexQ < questions.length; indexQ++) {
        var checkedCb = document.querySelectorAll(`input[name="${indexQ}"]:checked`);
        // добавить валидацию
        var userAnswers = [];
        for(var i = 0; i < checkedCb.length; i++){
            userAnswers.push(parseInt(checkedCb[i].value));
        }
        if(!isAnswersCorrect(questions[indexQ].keys, userAnswers)) {
            count++;
        }
    }

    console.log('-userAnswers', userAnswers)
    if(count > 0) {
    console.log('-count', count)
        alert('U r looser!!')
    }

    enableButton('add-question');
    enableButton('start-test');
}

function isAnswersCorrect(keys, answers) {
    keys.sort();
    answers.sort();
    if(keys.length !== answers.length) {
        return false;
    }
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        if(element !== answers[i]) {
            return false;
        }
    }

    return true;
  }

function disableButton(id) {
    var button = document.getElementById(id);
    button.disabled = true;
}

function enableButton(id) {
    var button = document.getElementById(id);
    button.disabled = false;
}

