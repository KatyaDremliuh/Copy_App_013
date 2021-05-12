// кнопка добавить вопрос
var button = document.createElement("button"); // сама кнопка
var text = document.createTextNode("Добавить вопрос"); // создать текст на кнопке
var text = document.createTextNode("Начать тест"); // кнопка начать тест
button.appendChild(text); // чтобы текст появился на кнопке
button.body.appendChild(button); // приделать эту кнопку к html ???


// ОШИБКИ
var СС1 = "Вы не ввели текст вопроса.\nПопробуйте ввести вопрос заново.";
var СС2 = "Вы не ввели текст *N варианта ответа.\nПопробуйте добавить вопрос заново.";
var СС3 = "*N - номер вопроса.";
var СС4 = "Вы не ввели правильные варианты ответов.\nПопробуйте добавить вопрос заново.";
var СС5 = "Все вопросы должны иметь хотя бы один выбранный вариант ответа. \nПроверьте правильность заполнения.";
var СС6 = "Ваш результат<количество правильно отвеченных вопросов> из <количества всех вопросов>. \nВы молодец!";
var СС7 = "Поле может содержать только уникальные\nцифры 1, 2, 3, 4, разделенные запятой.\nПопробуйте добавить вопрос заново.";
// НЕ РАБОТАЕТ
function showErrors(message) {
  return alert(message);
}


// функция ВВЕСТИ ВОПРОС
function createQuestion() {
  // массив вопр. по умолчанию 5 вопросов
  var defaultQArr = [];
  var defaultLenght = 5;
  defaultQArr[0] = "вопрос1";
  defaultQArr[1] = "вопрос2";
  defaultQArr[2] = "вопрос3";
  defaultQArr[3] = "вопрос4";
  defaultQArr[4] = "вопрос5";
  // массив новых вопросов
  var createQArr = []; // для вопросов
  var questsLength = 5; // длина массива (кол-во вопросов)
  for (var indexQ = 0; indexQ < questsLength; indexQ++) {
    var inputQValue = prompt(`Введите текст ${indexQ + 1 + questsLength} вопроса: `, defaultQArr[indexQ]); // чё-то не то
    /* проверить, что вопрос ввели */
    if (inputQValue === "" || inputQValue === null) {
      showErrors(CC1); // не РАБОТАЕТ
      //confirm("Вы не ввели текст вопроса. Попробуйте ввести вопрос заново."); // вернет булевое значение (нах мне эта информацяи)
      createQuestion();
    } else if (inputQValue !== "" && inputQValue !== null) {
      createQArr.push(formatInputStr(inputQValue)); // НЕ РАБОТАЕТ формат(может уже работает??) положить вопрос в массив с вопросами
    }
  }
  var allQArr = defaultQArr.concat(createQArr);
  return allQArr.forEach; // вернуть массив всех вопросов
}


// подрезать пробелы в введеной строке с обоих концов (вроде заработало??)
function formatInputStr(untrimmedStr) {
  var formatedStr = untrimmedStr.trim();
  return formatedStr;
}


// функция ЗАДАТЬ ВАР-ТЫ ОТВЕТОВ
function createAnswerOption() {
  var answsArr = [];
  // дописать по умолчанию ответы???
  var answsLength = 4;
  for (var indexA = 0; indexA < answsLength; indexA++) {
    var inputAnswValue = prompt(`Введите текст ${indexA + 1} варианта ответа`);
    if (inputAnswValue === "" || inputAnswValue === null) {
      //showErrors(CC2); // НЕ РАБОТАЕТ
      createQuestion(); // НЕ РАБОТАЕТ
    } else if (inputAnswValue !== "" && inputAnswValue !== null) {
      answsArr.push(formatInputStr(inputAnswValue));
    }
  }
  return answsArr.forEach; // вернуть массив вар-тов ответов
}


// функция ЗАДАТЬ ПРАВИЛЬНЫЕ ВАР-ТЫ ответов
function createСorrectAnsws() {
  var correctAnsw = prompt("Введите номера правильных ответов\nчерез запятую. Нумерация начинается с\n1");
  var cAArr = [];
  for (let indexCA = 0; indexCA < cAArr.length; indexCA++) {
    if ((correctAnsw !== "") && (correctAnsw !== null) &&
      (correctAnsw === "1" || correctAnsw === "2" || correctAnsw === "3" || correctAnsw === "4" ||
        correctAnsw === "1,2" || correctAnsw === "1,3" || correctAnsw === "1,4" ||
        correctAnsw === "2,3" || correctAnsw === "2,4" ||
        correctAnsw === "3,4" ||
        correctAnsw === "1,2,3" || correctAnsw === "2,3,4")) {
      cAArr[indexCA] = correctAnsw;
      return cAArr;
    } else {
      showErrors(СС7); // НЕ РАБОТАЕТ
      createQuestion();
    }
  }
  return cAArr.forEach; // вернуть массив коррект ответов
}


// действие кнопки начать тест
function clickStartTest() {

  // 1) надо заблокировать сразу обе кнопки. не понятно, как


  // 2) отвечать на вопрос
  changeCheckbox() {
    var checkbox = document.getElementById("idCheckbox")
    var checkbox = event.target;
    var isChecked = checkbox.checked;
    if (checkbox.checked && checkbox.onchange === isChecked) {

    } else {

    }
  }

  // 3) результат 
}


// СОЗДАТЬ ВОПРОСЫ и ОТВЕТЫ (видимые)
// taskName - это массивы???
function drawQuestsAndAnsws(taskName, allQArr, answsArr) {
  // нарисовать вопросы
  for (let indexQ = 0; indexQ < allQArr.length; indexQ++) {
    var labelQ = createLabel(allQArr[indexQ]);
    document.body.append(labelQ);
    var br = createElement("br");
    // нарисовать ответы
    indexA = 0;
    do {
      var labelA = createLabel(taskName); // создать лейбл вар-та ответа 
      var checkboxA = createCheckbox();
      var br = createElement("br");
      document.body.append(checkboxA); // появление чекбокса
      document.body.append(labelA); // появление лейбла
      indexA++;
    }
    while (indexA < 4);
    answsArr = answsArr.splice(0, 4); // удалим 4 элемента, начиная с индекса 0
  }
}


// функция СОЗДАТЬ ЛЕЙБЛ (для вар-тов ответа и для вопроса тоже???)
function createLabel(taskName) {
  var labelA = document.createElement("label");
  labelA.textContent = taskName;
  return labelA;
}


// функция СОЗДАТЬ ЧЕКБОКСы ДЛЯ ОТВЕТОВ
function createCheckbox() {
  var checkboxA = document.createElement("input")
  checkboxA.type = "checkbox";
  return checkboxA;
}



// ЭТО КАК-ТО ОТНОСИТСЯ К СТРОКЕ 121

// Это наши вопросы
var questions = [{
  text: [allQArr],
  answers: [answsArr], // не добавлены ответы по умолчанию из createAnswerOption стр. 59
  correctAnswer: [cAArr] // то же самое
}];


var userAnwer = new Array; // здесь ответы юзера
var score = 0; // баллы за верные ответы

function Engine(question, answer) {
  userAnwer[question] = answer;
}


function Score() {
  var answerText = "Вы неправильно ответили на вопросы:\n"; // showErrors(CC7), котрое не работает
  for (var m = 0; m < userAnwer.length; ++m) {
    var num = m + 1;
    answerText = answerText + "\n№" + num + ".";
    if (userAnwer[m] != questions[m].correctAnswer) {
      answerText = `${answerText} ${questions[m].text}\n`
    } else {
      answerText = answerText + ": Верно! \n"; // это не нужно
      ++score;
    }
  }


  answerText = answerText + "\nВаш результат " + score + " из " + userAnwer.length;

  alert(answerText);
  userAnwer = [];
  score = 0;
  clearForm("quiz");
}


function clearForm(name) {
  var f = document.forms[name];
  for (var i = 0; i < f.elements.length; ++i) {
    if (f.elements[i].checked)
      f.elements[i].checked = false;
  }
}


for (var q = 0; q < questions.length; ++q) {
  var question = questions[q];
  var idx = 1 + q;

  document.writeln('<li><span class="quest">' + question.text + '</span><br/>');
  for (var i in question.answers) {
    document.writeln('<input type=checkbox name="q' + idx + '" value="' + i +
      '" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>');
  }
}