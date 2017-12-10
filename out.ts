class Question{
    private answers: string[] = new Array();
    private question: string;
    private correctAnswerIndexes: number[] = new Array();

    constructor(question: string){
        this.question = question;
    }

    addAnswer(answer: string, correct: boolean){
        if(correct){
            this.correctAnswerIndexes.push(this.answers.length);
        }
        this.answers.push(answer);
    }

    getAnswers(): string[]{
        return this.answers;
    }

    getQuestion(): string{
        return this.question;
    }

}class QuizHtmlContainer {
    parentElement: HTMLElement;
    containerElement: HTMLElement;
    headerElement: HTMLElement;
    bodyElement: HTMLElement;
    questionElement: HTMLElement;
    answerContainer: HTMLElement;
    answerChoices: HTMLElement[];
    previousButton: HTMLElement;
    nextButton: HTMLElement;

    headerHeightPercent: number = 8;
    bodyMarginLeftPercent: number = 2;
    questionFontSizePercent: number = 5;
    questionMarginTopPercent: number = 3;
    questionMarginBottomPercent: number = 3;
    answerFontSizePercent: number = 2;
    answerBoxSizeHeightPercent: number = 3;
    answerBoxSizeWidthPercent: number = 40;
    answerMarginPercent: number = 1;

    HEIGHT: number;
    WIDTH: number;

    // answers: string[] = new Array();
    question: Question;
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
        this.question = new Question("What was the question?");
        this.question.addAnswer("answer 1", false);
        this.question.addAnswer("answer 2", false);
        this.question.addAnswer("answer 3", false);
        this.question.addAnswer("answer 4", false);

        this.initializeBody();
        this.initializeQuestion();
        this.initializeAnswers();

        this.bodyElement.appendChild(this.questionElement);
        this.answerContainer = document.createElement("div");

        for (var i = 0; i < this.answerChoices.length; i++) {
            this.answerContainer.appendChild(this.answerChoices[i]);
        }
        this.bodyElement.appendChild(this.answerContainer);
        this.containerElement.appendChild(this.bodyElement);

    }

    setQuestion(question: Question) {
        this.question;
    }

    initializeContainer() {
        this.containerElement = document.createElement("div");
    }

    initializeHeader() {
        this.headerElement = document.createElement("div");
        this.headerElement.id = "header-element";
        this.headerElement.style.width = "100%";
        this.headerElement.style.height = this.getHeightPxFromPercent(this.headerHeightPercent) + "px";
        this.headerElement.style.background = "#0275d8";
        this.headerElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
    }

    initializeBody() {
        this.bodyElement = document.createElement("div");
        this.bodyElement.style.marginTop = "0 px";
        this.bodyElement.style.marginLeft = this.getHeightPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }

    initializeQuestion() {
        this.questionElement = document.createElement("div");
        this.questionElement.style.font = "Helvetica";
        this.questionElement.style.fontSize = this.getHeightPxFromPercent(this.questionFontSizePercent) + "px";
        this.questionElement.style.marginTop = this.getHeightPxFromPercent(this.questionMarginTopPercent) + "px";
        this.questionElement.style.marginBottom = this.getHeightPxFromPercent(this.questionMarginBottomPercent) + "px";
        this.questionElement.innerHTML = this.question.getQuestion();
    }

    initializeAnswers() {
        this.answerChoices = new Array();
        this.areAnswersSelected = new Array();
        for (var i = 0; i < this.question.getAnswers().length; i++) {
            var answerChoice = document.createElement("div");
            answerChoice.className = "answer";
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
            answerChoice.style.border = "1px solid #84c5fe";
            answerChoice.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
            answerChoice.onclick = (function (element, htmlContainer) {
                return () => {
                    if (htmlContainer.hasAnswerSelected(element)) {
                        htmlContainer.unselectAnswer(element);
                    }
                    else {
                        htmlContainer.setAnswerSelected(element);
                    }
                }
            }(answerChoice, this));
            answerChoice.innerHTML = this.question.getAnswers()[i];
            this.areAnswersSelected[this.answerChoices.length] = false;
            this.answerChoices.push(answerChoice);
        }
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

    getHeaderHeight(): number{
        return document.getElementById("header-element").clientHeight;
    }

    getHeightPxFromPercent(percent: number): number{
        return this.HEIGHT * (percent/100);
    }

    getWidthPxFromPercent(percent: number): number{
        return this.WIDTH * (percent/100);
    }

    loadQuestion(question: Question){
        this.question = question;
        this.questionElement.innerHTML = this.question.getQuestion();
        this.answerContainer.innerHTML = "";
        for (var i = 0; i < this.answerChoices.length; i++) {
            this.answerContainer.appendChild(this.answerChoices[i]);
        }
    }

    initializeCSS(){
        var cssElement = document.createElement('style');
        var cssText = "";
        cssText += ".answer:active {transform: translateY(4px);}";
        cssElement.innerHTML = cssText;
        document.getElementsByTagName('head')[0].appendChild(cssElement);
    }
}

document.body.style.margin = "0";
new QuizHtmlContainer(document.body, screen.height, screen.width).initialize();