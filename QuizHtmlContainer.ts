
class QuizHtmlContainer {
    parentElement: HTMLElement;
    containerElement: HTMLElement;
    headerElement: HTMLElement;
    bodyElement: HTMLElement;
    questionElement: HTMLElement;
    answerContainer: HTMLElement;
    answerChoices: HTMLElement[];
    previousButton: HTMLElement;
    underAnswersContainer: HTMLElement;
    nextButton: HTMLElement;
    submitButton: HTMLElement;
    resultText: HTMLElement;

    headerHeightPercent: number = 8;
    bodyMarginLeftPercent: number = 2;
    questionFontSizePercent: number = 5;
    questionMarginTopPercent: number = 3;
    questionMarginBottomPercent: number = 3;
    answerFontSizePercent: number = 2;
    answerBoxSizeHeightPercent: number = 3;
    answerBoxSizeWidthPercent: number = 40;
    answerMarginPercent: number = 1;
    buttonWidthPercent: number = 4;

    isShowingAnswers: boolean;

    HEIGHT: number;
    WIDTH: number;

    // answers: string[] = new Array()
    questions: Question[] = new Array();
    currentQuestionIndex: number = 0;
    areAnswersSelected: boolean[] = new Array();

    constructor(parentElement: HTMLElement, height: number, width: number) {
        this.parentElement = parentElement;
        this.HEIGHT = height;
        this.WIDTH = width;
    }

    initialize() {
        this.initializeContainer();

        this.parentElement.appendChild(this.containerElement);

        this.initializeHeader();
        this.initializeCSS();
        this.containerElement.appendChild(this.headerElement);
        var question1 = new Question("question 1");
        question1.addAnswer("answer 1", true);
        question1.addAnswer("answer 2", false);
        question1.addAnswer("answer 3", false);
        question1.addAnswer("answer 4", false);

        var question2 = new Question("question 2");
        question2.addAnswer("answer 5", false);
        question2.addAnswer("answer 6", false);
        question2.addAnswer("answer 7", false);
        question2.addAnswer("answer 8", true);

        var question3 = new Question("question 3");
        question3.addAnswer("answer 9", false);
        question3.addAnswer("answer 10", true);
        question3.addAnswer("answer 11", true);
        question3.addAnswer("answer 12", false);

        this.questions.push(question1);
        this.questions.push(question2);
        this.questions.push(question3);

        this.initializeBody();
        this.initializeQuestion();
        this.initializeAnswers();
        this.initializeNextButton();
        this.initializePrevButton();
        this.initializeSubmitButton();
        this.initializeResultText();
        this.initializeUnderAnswerContainer();

        this.bodyElement.appendChild(this.questionElement);
        this.answerContainer = document.createElement("div");

        for (var i = 0; i < this.answerChoices.length; i++) {
            this.answerContainer.appendChild(this.answerChoices[i]);
        }

        this.makeDivInvisible(this.nextButton);
        this.makeDivInvisible(this.resultText);

        this.underAnswersContainer.appendChild(this.resultText);
        this.underAnswersContainer.appendChild(this.nextButton);
        this.underAnswersContainer.appendChild(this.submitButton);

        this.bodyElement.appendChild(this.answerContainer);
        this.bodyElement.appendChild(this.underAnswersContainer);
        //this.bodyElement.appendChild(this.previousButton);

        this.containerElement.appendChild(this.bodyElement);

    }

    currentQuestion(): Question{
        return this.questions[this.currentQuestionIndex];
    }

    initializeContainer() {
        this.containerElement = document.createElement("div");
    }

    initializeHeader() {
        this.headerElement = document.createElement("div");
        this.headerElement.id = "header-element";
        this.headerElement.style.width = "100%";
        this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
        this.headerElement.style.background = "#0275d8";
        this.headerElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
    }


    initializeBody() {
        this.bodyElement = document.createElement("div");
        this.bodyElement.style.marginTop = "0 px";
        this.bodyElement.style.marginLeft = this.getHeightPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }

    initializeUnderAnswerContainer() {
        this.underAnswersContainer = document.createElement("div");
        this.underAnswersContainer.style.width = this.getHeightPxFromPercent(this.answerBoxSizeWidthPercent) + "px";
        this.underAnswersContainer.style.marginTop = "0 px";
        this.underAnswersContainer.style.marginLeft = this.getHeightPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }

    initializeNextButton() {
        this.nextButton = document.createElement("div");
        this.nextButton.className = "downOnClick";
        this.nextButton.id = "next-button";
        this.nextButton.style.marginTop = "0 px";
        this.nextButton.style.font = "Helvetica";
        this.nextButton.style.color = "white";
        this.nextButton.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
        //this.nextButton.style.marginLeft = (this.getHeightPxFromPercent(this.answerBoxSizeWidthPercent) - (this.getHeightPxFromPercent(this.buttonWidthPercent))) -  + "px";
        this.nextButton.style.width = this.getHeightPxFromPercent(this.buttonWidthPercent) + "px";
        this.nextButton.style.verticalAlign = "middle";
        this.nextButton.style.paddingLeft = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.borderRadius = "5px";
        this.nextButton.style.background = "#2ecc71";
        this.nextButton.style.border = "1px solid black";
        this.nextButton.style.display = "inline-block";
        this.nextButton.style.cssFloat = "right";
        this.nextButton.style.position = "relative";
        this.nextButton.style.userSelect = "none";
        this.nextButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        this.nextButton.onclick = (function (element, htmlContainer) {
            return () => {
                htmlContainer.loadNextQuestion();
                htmlContainer.changeNextToSubmit();
                htmlContainer.makeDivInvisible(htmlContainer.resultText);
                htmlContainer.isShowingAnswers = false;
            }
        }(this.nextButton, this));
        this.nextButton.innerHTML = "Next";
    }

    initializePrevButton() {
        this.previousButton = document.createElement("div");
        this.previousButton.className = "downOnClick";
        this.previousButton.style.marginTop = "0 px";
        this.previousButton.style.font = "Helvetica";
        this.previousButton.style.color = "white";
        this.previousButton.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
        this.previousButton.style.width = this.getHeightPxFromPercent(this.buttonWidthPercent) + "px";
        this.previousButton.style.verticalAlign = "middle";
        this.previousButton.style.paddingLeft = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.borderRadius = "5px";
        this.previousButton.style.background = "#e74c3c";
        this.previousButton.style.border = "1px solid black";
        this.previousButton.style.display = "inline-block";
        this.previousButton.style.position = "relative";
        this.previousButton.style.userSelect = "none";
        this.previousButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        this.previousButton.innerHTML = "Prev";
        this.previousButton.onclick = (function (element, htmlContainer) {
            return () => {
                htmlContainer.loadPrevQuestion();
            }
        }(this.nextButton, this));
    }


    initializeSubmitButton() {
        this.submitButton = document.createElement("div");
        this.submitButton.className = "downOnClick";
        this.submitButton.id = "submit-button";
        this.submitButton.style.marginTop = "0 px";
        this.submitButton.style.font = "Helvetica";
        this.submitButton.style.color = "white";
        this.submitButton.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
        this.submitButton.style.width = this.getHeightPxFromPercent(this.buttonWidthPercent + 1.5) + "px";
        this.submitButton.style.verticalAlign = "middle";
        this.submitButton.style.paddingLeft = this.getHeightPxFromPercent(1) + "px";
        this.submitButton.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        //this.submitButton.style.marginLeft = ((this.getHeightPxFromPercent(this.answerBoxSizeWidthPercent) - (this.getHeightPxFromPercent(this.buttonWidthPercent + 1.5)/2)- this.getHeightPxFromPercent(this.bodyMarginLeftPercent))  + "px");
        this.submitButton.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.submitButton.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
        this.submitButton.style.paddingLeft = this.getHeightPxFromPercent(0.5) + "px";
        this.submitButton.style.borderRadius = "5px";
        this.submitButton.style.background = "#2ecc71";
        this.submitButton.style.border = "1px solid black";
        this.submitButton.style.display = "inline-block";
        this.submitButton.style.cssFloat = "right";
        this.submitButton.style.position = "relative";
        this.submitButton.style.userSelect = "none";
        this.submitButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        this.submitButton.innerHTML = "Submit";
        this.submitButton.onclick = (function (element, htmlContainer) {
            return () => {
                htmlContainer.revealAnswers();
                htmlContainer.changeSubmitToNext();
                htmlContainer.makeDivVisible(htmlContainer.resultText);
                htmlContainer.isShowingAnswers = true;
                if (htmlContainer.areSelectedAnswersCorrect()) {
                    htmlContainer.resultText.innerHTML = "Correct!";
                }
                else {
                    htmlContainer.resultText.innerHTML = "Incorrect!";
                }

            }
        }(this.submitButton, this));
    }


    initializeQuestion() {
        this.questionElement = document.createElement("div");
        this.questionElement.style.font = "Helvetica";
        this.questionElement.style.fontSize = this.getHeightPxFromPercent(this.questionFontSizePercent) + "px";
        this.questionElement.style.marginTop = this.getHeightPxFromPercent(this.questionMarginTopPercent) + "px";
        this.questionElement.style.marginBottom = this.getHeightPxFromPercent(this.questionMarginBottomPercent) + "px";
        this.questionElement.innerHTML = this.currentQuestion().getQuestion();
    }

    initializeResultText() {
        this.resultText = document.createElement("div");
        this.resultText.style.font = "Helvetica";
        this.resultText.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
        // this.resultText.style.marginTop = this.getHeightPxFromPercent(this.questionMarginTopPercent) + "px";
        //this.questionElement.style.marginBottom = this.getHeightPxFromPercent(this.questionMarginBottomPercent) + "px";
        this.resultText.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.resultText.style.display = "inline-block";
        this.resultText.style.cssFloat = "left";
        this.resultText.style.marginLeft = this.getHeightPxFromPercent(1) + "px";
        this.resultText.style.fontWeight = "bold";
    }

    initializeAnswers() {
        this.answerChoices = new Array();
        this.areAnswersSelected = new Array();
        for (var i = 0; i < this.currentQuestion().getAnswers().length; i++) {
            var answerChoice = document.createElement("div");
            answerChoice.className = "downOnClick";
            answerChoice.style.font = "Helvetica";
            answerChoice.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
            answerChoice.style.marginTop = this.getHeightPxFromPercent(this.answerMarginPercent) + "px";
            answerChoice.style.marginBottom = this.getHeightPxFromPercent(this.answerMarginPercent) + "px";
            answerChoice.style.background = "aliceblue";
            answerChoice.style.verticalAlign = "middle";
            answerChoice.style.width = this.getHeightPxFromPercent(this.answerBoxSizeWidthPercent) + "px";
            answerChoice.style.paddingLeft = this.getHeightPxFromPercent(2) + "px";
            answerChoice.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
            answerChoice.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
            answerChoice.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
            answerChoice.style.borderRadius = "5px";
            answerChoice.style.border = "1px solid #84c5fe";
            answerChoice.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
            answerChoice.onclick = (function (element, htmlContainer) {
                return () => {
                    if (!htmlContainer.isShowingAnswers) {
                        if (htmlContainer.hasAnswerSelected(element)) {
                            htmlContainer.unselectAnswer(element);
                        }
                        else {
                            htmlContainer.setAnswerSelected(element);
                        }
                    }
                }
            }(answerChoice, this));
            answerChoice.innerHTML = this.currentQuestion().getAnswers()[i];
            var newDiv = document.createElement("div");
            newDiv.style.cssFloat = "right";
            answerChoice.appendChild(newDiv);
            this.areAnswersSelected[this.answerChoices.length] = false;
            this.answerChoices.push(answerChoice);
        }
    }

    makeDivInvisible(elem: HTMLElement){
        elem.style.visibility = "hidden";
        elem.style.display = "none";
    }

    makeDivVisible(elem: HTMLElement){
        elem.style.visibility = "visible";
        elem.style.display = "inline-block";
    }

    hasAnswerSelected(answerElement: HTMLElement) {
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        return this.areAnswersSelected[answerIndex];
    }

    unselectAnswer(answerElement: HTMLElement) {
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        this.areAnswersSelected[answerIndex] = false;
        answerElement.style.background = "aliceblue";
    }

    setAnswerSelected(answerElement: HTMLElement) {
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        this.areAnswersSelected[answerIndex] = true;
        answerElement.style.background = "#84c5fe";
    }

    changeSubmitToNext(){
        this.makeDivInvisible(this.submitButton);
        this.makeDivVisible(this.nextButton);
    }

    changeNextToSubmit(){
        this.makeDivInvisible(this.nextButton);
        this.makeDivVisible(this.submitButton);
    }

    getHeaderHeight(): number{
        return document.getElementById("header-element").clientHeight;
    }

    getHeightPxFromPercent(percent: number): number{
        return this.HEIGHT * (percent/100);
    }

    getWidthPxFromPercent(percent: number): number{
        return this.WIDTH * (percent/100);
    }

    renderCurrentQuestion(){
        this.questionElement.innerHTML = this.currentQuestion().getQuestion();
        this.answerContainer.innerHTML = "";
        this.initializeAnswers();
        for (var i = 0; i < this.answerChoices.length; i++) {
            this.answerContainer.appendChild(this.answerChoices[i]);
        }
    }

    loadNextQuestion(){
        var numQuestions = this.questions.length;
        var newIndex: number;
        if(this.currentQuestionIndex == (numQuestions - 1)){
            newIndex = this.questions.length - 1;
        }
        else{
            newIndex = this.currentQuestionIndex + 1;
        }
        this.currentQuestionIndex = newIndex;
        this.renderCurrentQuestion();
    }

    loadPrevQuestion(){
        var newIndex: number;
        if(this.currentQuestionIndex == 0){
            newIndex = 0;
        }
        else{
            newIndex = this.currentQuestionIndex - 1;
        }
        this.currentQuestionIndex = newIndex;
        this.renderCurrentQuestion();
    }

    areSelectedAnswersCorrect(): boolean{
        var questionIndexes = this.currentQuestion().getCorrectAnswerIndex();
        var result: boolean = true;
        for(var i = 0; i <= questionIndexes.length - 1; i++ ){
            if(questionIndexes[i] && !this.areAnswersSelected[i]){
                result = false;
            }
            else if(!questionIndexes[i] && this.areAnswersSelected[i]){
                result = false;
            }
        }
        return result;
    }

    revealAnswers(){
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.isAnswerCorrect(this.answerChoices[i])) {
                this.setAnswerRightDivInnerHTML(this.answerChoices[i], "c");
                this.answerChoices[i].style.background = "#69F0AE";
                this.answerChoices[i].style.border = "1px solid black";
            }
            else{
                this.setAnswerRightDivInnerHTML(this.answerChoices[i], "x");
                this.answerChoices[i].style.background = "#FF8A80";
                this.answerChoices[i].style.border = "1px solid black";
            }
        }
    }

    isAnswerCorrect(answerElement: HTMLElement){
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        var currentQuestion = this.currentQuestion();
        return currentQuestion.getCorrectAnswerIndex()[answerIndex];
    }

    setAnswerRightDivInnerHTML(answerElement: HTMLElement, content: string){
        answerElement.firstElementChild.innerHTML = content;
    }

    initializeCSS(){
        var cssElement = document.createElement('style');
        var cssText = "";
        cssText += ".downOnClick:active {transform: translateY(2px);}";
        cssElement.innerHTML = cssText;
        document.getElementsByTagName('head')[0].appendChild(cssElement);
    }
}

document.body.style.margin = "0";
new QuizHtmlContainer(document.body, screen.height, screen.width).initialize();