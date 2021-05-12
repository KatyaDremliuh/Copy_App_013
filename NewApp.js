/*
var test = new List<Test>
            {
                new Test()
                {
                    Keys = new[] {1, 4},
                    Question = "fwefwefew"
                },
                new Test()
                {
                    Keys = new[] {1, 4},
                    Question = "fwefwefew"
                }
            };
            */

var questions = [
    {
        question: 'вопрос1',
        options: ['опция 1', 'опция 2', 'опция 3', 'опция 4', 'опция 5'],
        keys: [0, 1],
        ['мпацпуцпцу  АУЦАЦУАЦУ']: "DWFEWFWEF",
        ['keys1']: 235325
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
    var questsLength = 5;
    for (var indexQ = 0; indexQ < questsLength; indexQ++) {
        var question = '';
        var answsArr = [];
        const answersKeyInts = [];

        question = prompt(`Введите текст ${indexQ + 1 + questsLength} вопроса: `, 'БЛА ЛА ЛА АЛА'); // чё-то не то
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
            if (!correctAnsw) {
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

}

function clickStartTest() {
    console.log('clickStartTest', questions)
}

