class QuestionBuilder{
    parentElement: HTMLElement;
    questionField: HTMLElement;
	categoryDropDown: HTMLElement;
    answersField: HTMLElement;
    addAnswerButton: HTMLElement;
    compileQuestionButton: HTMLElement;
    outputArea: HTMLElement;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
    }

    initialize() {
        this.questionField = this.createQuestionField();
		this.categoryDropDown = this.createCategoryDropDown();
        this.answersField = this.createAnswersField();
        this.addAnswerButton = this.createAddAnswerButton();
        this.compileQuestionButton = this.createCompileQuestionButton();
        this.outputArea = this.createOutputArea();

        this.parentElement.appendChild(this.questionField);
        this.parentElement.appendChild(document.createElement('br'));
		this.parentElement.appendChild(this.categoryDropDown);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.answersField);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.addAnswerButton);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.compileQuestionButton);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.outputArea);
    }

    createQuestionField() {
        var questionInputContainer = document.createElement('div');
        questionInputContainer.innerHTML = "Question: ";
        var questionInput = document.createElement('textarea');
        questionInput.id = "questionInput";
        questionInput.cols = 100;
        questionInput.rows = 5;
        questionInputContainer.appendChild(questionInput);
		return questionInputContainer;
    } 

    createAnswersField() {
        var answerInput = document.createElement('div');
		answerInput.id = "answerContainer";
		return answerInput;
    }

    createCompileQuestionButton() {
        var compileButton = document.createElement('button');
        compileButton.innerHTML = "Compile Question";
        compileButton.onclick = () => { var q = this.getQuestionFromInputs(); this.setOutputText(JSON.stringify(q));};
		return compileButton;
    }
	
	createCategoryDropDown() {
        var catergoryDropDown = document.createElement('select');
        for(var each in QuestionCategory){
			if(isNaN(Number(each))){
				var eachOption = document.createElement('option');
				eachOption.innerHTML = each;
				catergoryDropDown.appendChild(eachOption);
			}
		}
		return catergoryDropDown;
    }
    
    createAddAnswerButton() {
        var addAnswerButton = document.createElement('button');
        addAnswerButton.innerHTML = "+";
        addAnswerButton.onclick = () => {this.addAnswerField()};
		return addAnswerButton;
    }

    addAnswerField() {
        var answerFieldContainer = document.createElement('div');
        var answerField = document.createElement('textarea');
        answerField.rows = 5;
        answerField.cols = 100;
        var isCorrect = document.createElement('input');
        isCorrect.type = "checkbox";
        answerFieldContainer.appendChild(answerField);
        answerFieldContainer.appendChild(isCorrect);
        this.answersField.appendChild(document.createElement('br'));
        this.answersField.appendChild(answerFieldContainer);
    } 

    createOutputArea() {
        var outputDiv = document.createElement('textarea');
		outputDiv.rows = 8;
		outputDiv.cols = 100;
		return outputDiv;
    }

    getQuestionFromInputs(): Question{
        var questionString = (<HTMLTextAreaElement>this.questionField.children[0]).value;
        var category = (<HTMLSelectElement> this.categoryDropDown).options[(<HTMLSelectElement> this.categoryDropDown).selectedIndex].innerHTML;
        var newQuestion: Question = new Question(questionString, QuestionCategory[category]);
        var answerChildren = this.answersField.children; 
        for (var i = 0; i < answerChildren.length; i++){
            if (i % 2 == 1) {
                var answerString = (<HTMLTextAreaElement>answerChildren[i].firstChild).value;    
                var correct = (<HTMLInputElement>answerChildren[i].children[1]).checked;
                newQuestion.addAnswer(answerString, correct);
            }
        }
        return newQuestion;
    } 

    setOutputText(text: string) {
        (<HTMLInputElement>this.outputArea).value = text;
    }

}

//var q = new QuestionBuilder(document.body);
//q.initialize();

