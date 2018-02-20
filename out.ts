class Algorithms{
    static shuffle (array) {
    var i = 0
        , j = 0
        , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
		}
	}
}enum QuestionCategory{

	ALL_TOPICS,
	ORACLE_AND_STRUCTURED_QUERY_LANGUAGE,
	RESTRICTING_AND_SORTING_DATA,
	USING_SINGLE_ROW_FUNCTIONS_TO_CUSTOMIZE_OUTPUT,
	USING_CONVERSION_FUNCTIONS_AND_CONDITIONAL_EXPRESSIONS,
	REPORTING_AGGREGATED_DATA_USING_THE_GROUP_FUNCTIONS,
	DISPLAYING_DATA_FROM_MULTIPLE_TABLES,
	USING_SUBQUERIES_TO_SOLVE_QUERIES,
	USING_THE_SET_OPERATORS,
	MANIPULATING_DATA,
	USING_DDL_STATEMENTS_TO_CREATE_AND_MANAGE_TABLES,
	MANAGING_OBJECTS_WITH_DATA_DICTIONARY_VIEWS,
	CONTROLLING_USER_ACCESS,
	MANAGING_SCHEMA_OBJECTS,
	MANIPULATING_LARGE_DATA_SETS

}
class Question{
    private answers: string[] = new Array();
    private question: string;
    private correctAnswerIndexes: boolean[] = new Array();
	private category: QuestionCategory;
	
    constructor(question: string, category: QuestionCategory){
        this.question = question;
		this.category = category;
    }

    addAnswer(answer: string, correct: boolean){
        this.correctAnswerIndexes.push(correct);
        this.answers.push(answer);
    }

    getCorrectAnswerIndex():boolean[]{
        return this.correctAnswerIndexes;
    }

    getAnswers(): string[]{
        return this.answers;
    }

    getQuestion(): string{
        return this.question;
    }
	
	getCategory(): QuestionCategory{
        return this.category;
    }
	
    randomize() {
        var i = 0
            , j = 0
            , temp = null
            , temp2 = null

        for (i = this.answers.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = this.answers[i]
            temp2 = this.correctAnswerIndexes[i]

            this.answers[i] = this.answers[j]
            this.correctAnswerIndexes[i] = this.correctAnswerIndexes[j]

            this.answers[j] = temp
            this.correctAnswerIndexes[j] = temp2

        }
    }	

	static fromJSON(obj: any): Question{
		var question: Question = new Question(obj.question, obj.category);
		for(var answerIDX in obj.answers){
			var eachAnswer = obj.answers[answerIDX];
			question.addAnswer(eachAnswer, obj.correctAnswerIndexes[answerIDX]);
        }
        question.randomize();
		return question;
	}
	
	static fromJSONArray(obj: any, category: QuestionCategory): Question[]{
		var result = new Array();
		for(var idx in obj){
			var question = Question.fromJSON(obj[idx]);
			if(category == QuestionCategory.ALL_TOPICS){
				result.push(Question.fromJSON(obj[idx]));
			}
			else if(question.getCategory() == category){
				result.push(Question.fromJSON(obj[idx]));
			}
		}
		return result;
	}
}var QuestionDatabase =

[
// Chapter 1
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"SELECT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"INSERT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"UPDATE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"DELETE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"MERGE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"CREATE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"ALTER is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"DROP is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"RENAME is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"TRUNCATE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"GRANT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"REVOKE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"FLASHBACK is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"PURGE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"COMMENT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,false,true],"question":"COMMIT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,false,true],"question":"ROLLBACK is a _____ type of SQL command."},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,false,true,false],"question":"Which SQL command is used to instantiate a new database object, such as a user, table, view, index, or synonym?","category":0},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to modify an existing database object's structure or attributes?","category":0},
{"answers":["DELETE","DROP","ALTER","PURGE","REVOKE","ROLLBACK"],"correctAnswerIndexes":[false,true,false,false,false,false],"question":"Which SQL command is used to remove an object from the database?","category":0},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,false,true,false],"question":"Which SQL command is used to instantiate a new database object, such as a user, table, view, index, or synonym?","category":0},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to modify an existing database object's structure or attributes?","category":0},
{"answers":["DELETE","DROP","PURGE","ALTER","ROLLBACK"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to remove an object from the database?","category":0},
{"answers":["ALTER","UPDATE","RENAME","COMMENT","CREATE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to alter the name of an existing database object?","category":0},
{"answers":["TRUNCATE","DELETE","ROLLBACK","DROP","PURGE"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Which SQL command is used to immediately remove all records from a table, partition or subpartition?","category":0},
{"answers":["REVOKE","ALTER","CREATE","SELECT","GRANT"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Which SQL command is used to provide privileges, or rights, to user objects?","category":0},
{"answers":["DELETE","TRUNCATE","REVOKE","DROP","REMOVE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to remove privileges that have been issued to a user object?","category":0},
{"answers":["RESTORE","FLASHBACK","ROLLBACK","UPDATE","REVERT"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to restore a table or database to a previous version?","category":0},
{"answers":["TRUNCATE","EMPTY","PURGE","DROP","COMMIT"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to irreversibly remove an object from the recycle bin?","category":0},
{"answers":["ALTER","COMMENT","UPDATE","REFERENCE","ANNOTATE"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to add a comment to the data dictionary for a database object?","category":0},
{"answers":["INSERT","DATA","SELECT","SHOW","DISPLAY"],"correctAnswerIndexes":[false,false,false,false,false],"question":"Which SQL command is used to display data in a table or view?","category":0},
{"answers":["CREATE","INSERT","ALERT","UPDATE","ROW"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to add new rows to a table?","category":0},
{"answers":["UPDATE","ALTER","MODIFY","INSERT","RENAME"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Which SQL command modifies existing rows in a table?","category":0},
{"answers":["TRUNCATE","DROP","DELETE","REMOVE","PURGE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command iteratively removes a subset of existing rows from a table, as optionally defined by a WHERE clause?","category":0},
{"answers":["UPDATE","INSERT","ALTER","MERGE","DELETE"],"correctAnswerIndexes":[false,false,false,true,false],"question":"Which SQL command selects rows from one or more sources for update, insertion, or exclusion into a table?","category":0},
{"answers":["SAVE","SAVEPOINT","COMMIT","ROLLBACK","EXECUTE IMMEDIATE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command saves the set of DML statements executed in the current database session?","category":0},
{"answers":["DELETE","FLASHBACK","REVOKE","RESET","ROLLBACK"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Which SQL command revokes the set of DML statements executed in the current databse session?","category":0},
{"answers":["FLASHBACK","SAVEPOINT","COMMIT","TRANSACTION","ROLLBACK"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command marks a position in the current session to which a future ROLLBACK will revert?","category":0},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A CONSTRAINT is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A SEQUENCE is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"An INDEX is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A PRIVATE SYNONYM is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A TABLE is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A VIEW is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[false,true],"question":"A ROLE is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[false,true],"question":"A PUBLIC SYNONYM is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[false,true],"question":"A USER is a _______ object.","category":9},

// Chapter 2
{"answers":["Schema","Nonschema"],"correctAnswerIndexes":[true,false],"question":"______ objects are those that can be owned by a user.","category":10},
{"answers":["Schema","Nonschema"],"correctAnswerIndexes":[false,true],"question":"_______ objects are those that cannot be owned by a user.","category":10},
{"answers":["A USER object can own itself","A USER object can be owned by another USER object","A USER object is a nonschema object","A USER object can own a PRIVATE SYNONYM"],"correctAnswerIndexes":[false,false,true,true],"question":"Which of the following are true about USER objects?","category":10},
{"answers":["PUBLIC","DUAL","SYSTEM","SYS","INTERNAL"],"correctAnswerIndexes":[true,false,false,false,false],"question":"A PUBLIC SYNONYM is owned by the special user account _______.","category":10},
{"answers":["Object names are case sensitive","All database objects MUST have a name.","Names can contain letters, '$', '_' or '#'.","Object names MUST start with a letter.","Object names can contain spaces."],"correctAnswerIndexes":[false,true,true,true,false],"question":"Which of the following are true of UNQUOTED database object names?","category":10}

]; class QuizHtmlContainer {
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

    initialize(category: QuestionCategory) {
        this.initializeContainer();

        this.parentElement.appendChild(this.containerElement);

        this.initializeHeader();
        this.initializeCSS();
        this.containerElement.appendChild(this.headerElement);
		
		this.questions = Question.fromJSONArray(QuestionDatabase, category);
		
		Algorithms.shuffle(this.questions);

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
        var cssElement = this.parentElement.ownerDocument.createElement('style');
        var cssText = "";
        cssText += ".downOnClick:active {transform: translateY(2px);}";
        cssElement.innerHTML = cssText;
        this.parentElement.ownerDocument.getElementsByTagName('head')[0].appendChild(cssElement);
    }
}
class QuizStartMenuContainer {
    parentElement: HTMLElement;
    headerElement: HTMLElement;
    buttonContainer: HTMLElement;

	HEIGHT: number;
    WIDTH: number;

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
	
	controller: QuizGlobalController;
	
	constructor(controller: QuizGlobalController, parentElement: HTMLElement, height: number, width: number) {
        this.parentElement = parentElement;
        this.HEIGHT = height;
        this.WIDTH = width;
		this.controller = controller;
    }
	
	initialize(){
		this.initializeHeader();
        this.initializeCSS();
        this.initializeButtonContainer();
		
		this.addButton("All Topics", "all-topics-button");
		this.addButton("Oracle and Structured Query Language (SQL)", "topic-0-button");
		this.addButton("Restricting and Sorting Data", "topic-1-button");
		this.addButton("Using Single-Row Functions to Customize Output", "topic-2-button");
		this.addButton("Using Conversion Functions and Conditional Expressions", "topic-3-button");
		this.addButton("Reporting Aggregated Data Using the Group Functions", "topic-4-button");
		this.addButton("Displaying Data from Multiple Tables", "topic-5-button");
		this.addButton("Using Subqueries to Solve Queries", "topic-6-button");
		this.addButton("Using the Set Operators", "topic-7-button");
		this.addButton("Manipulating Data", "topic-8-button");
		this.addButton("Using DDL Statements to Create and Manage Tables", "topic-9-button");
		this.addButton("Managing Objects with Data Dictionary Views", "topic-10-button");
		this.addButton("Controlling User Access", "topic-11-button");
		this.addButton("Managing Schema Objects", "topic-12-button");
        this.addButton("Manipulating Large Data Sets", "topic-13-button");

        this.parentElement.appendChild(this.headerElement);
        this.parentElement.appendChild(this.buttonContainer);
    }

    addButton(innerText: string, id: string) {
        var buttonElement = document.createElement("div");
        buttonElement.id = id;
        buttonElement.innerHTML = innerText;

        buttonElement.className = "downOnClick";
        buttonElement.style.font = "Helvetica";
        buttonElement.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
        buttonElement.style.marginTop = this.getHeightPxFromPercent(this.answerMarginPercent) + "px";
        buttonElement.style.marginBottom = this.getHeightPxFromPercent(this.answerMarginPercent) + "px";
        buttonElement.style.background = "aliceblue";
        buttonElement.style.verticalAlign = "middle";
        buttonElement.style.width = this.getHeightPxFromPercent(this.answerBoxSizeWidthPercent) + "px";
        buttonElement.style.paddingLeft = this.getHeightPxFromPercent(2) + "px";
        buttonElement.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        buttonElement.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        buttonElement.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
        buttonElement.style.borderRadius = "5px";
        buttonElement.style.border = "1px solid #84c5fe";
        buttonElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        buttonElement.onclick = (function (element, controller) {
            return () => {controller.gotoQuiz(element.id)};
        }(buttonElement, this.controller));  
            
        this.buttonContainer.appendChild(buttonElement);
    }
	
    getHeightPxFromPercent(percent: number): number{
        return this.HEIGHT * (percent/100);
    }

    initializeButtonContainer() {
        this.buttonContainer = document.createElement("div");
    }

	initializeHeader() {
        this.headerElement = document.createElement("div");
        this.headerElement.id = "header-element";
        this.headerElement.style.width = "100%";
        this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
        this.headerElement.style.background = "#0275d8";
        this.headerElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
    }
	
	initializeCSS(){
        var cssElement = this.parentElement.ownerDocument.createElement('style');
        var cssText = "";
        cssText += ".downOnClick:active {transform: translateY(2px);}";
        cssElement.innerHTML = cssText;
        this.parentElement.ownerDocument.getElementsByTagName('head')[0].appendChild(cssElement);
    }
}class QuizGlobalController{
	parentElement: HTMLElement;
	startMenuIFrame: HTMLIFrameElement;
	quizIFrame: HTMLIFrameElement;
	
	startMenu: QuizStartMenuContainer;
	quizContainer: QuizHtmlContainer;
	
	HEIGHT: number;
	WIDTH: number;
	
	constructor(parentElement: HTMLElement, height: number, width: number){
		this.parentElement = parentElement;
		this.HEIGHT = height;
		this.WIDTH = width;
	}
	
    start() {
        this.startMenuIFrame = document.createElement('iframe');
        this.quizIFrame = document.createElement("iframe");

		this.startMenuIFrame.scrolling = "no";
		this.startMenuIFrame.frameBorder = "0";
		this.startMenuIFrame.style["seamless"] = "seamless";
        this.startMenuIFrame.style.overflow = "hidden";
        this.startMenuIFrame.height = this.HEIGHT + "";
        this.startMenuIFrame.width = this.WIDTH + "";
        this.startMenuIFrame.style.margin = "0px";
                
        this.quizIFrame.scrolling = "no";
		this.quizIFrame.frameBorder = "0";
		this.quizIFrame.style["seamless"] = "seamless";
        this.quizIFrame.style.overflow = "hidden";
        this.quizIFrame.height = this.HEIGHT + "";
        this.quizIFrame.width = this.WIDTH + "";
        this.quizIFrame.style.margin = "0px";
        
        this.parentElement.appendChild(this.startMenuIFrame);
        this.parentElement.appendChild(this.quizIFrame);

        setTimeout(() => {
            this.startMenu = new QuizStartMenuContainer(this, this.startMenuIFrame.contentDocument.body, this.HEIGHT, this.WIDTH);
            this.startMenu.initialize();
        }, 10);
	}

	gotoQuiz(id: string){
		this.makeDivInvisible(this.startMenuIFrame);
		
		
		this.quizIFrame.innerHTML = "";
		this.quizContainer = new QuizHtmlContainer(this.quizIFrame.contentWindow.document.body, this.HEIGHT, this.WIDTH);	
		
		if(id == "all-topics-button"){
			this.quizContainer.initialize(QuestionCategory.ALL_TOPICS);
		}
		else{
			var categoryStr = id.substring(5, 6);
			this.quizContainer.initialize(+categoryStr);
		}
		
		this.makeDivVisible(this.quizIFrame);
	}
	
	gotoStartMenu(){
		this.makeDivInvisible(this.quizIFrame);
		this.makeDivInvisible(this.startMenuIFrame);
	}
	
	makeDivInvisible(elem: HTMLElement){
        elem.style.visibility = "hidden";
        elem.style.display = "none";
    }

    makeDivVisible(elem: HTMLElement){
        elem.style.visibility = "visible";
        elem.style.display = "inline-block";
    }

}

document.body.style.margin = "0";
new QuizGlobalController(document.body, screen.height, screen.width).start();class QuestionBuilder{
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