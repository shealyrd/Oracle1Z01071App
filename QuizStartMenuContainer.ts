class QuizStartMenuContainer {
    parentElement: HTMLElement;
    headerElement: HTMLElement;
    buttonContainer: HTMLElement;
	bannerElement: HTMLElement;
	selectTopicElement: HTMLElement;
	
	HEIGHT: number;
    WIDTH: number;

    headerHeightPercent: number = 8;
    bodyMarginLeftPercent: number = 2;
    questionFontSizePercent: number = 5;
    questionMarginTopPercent: number = 3;
    questionMarginBottomPercent: number = 3;
    answerFontSizePercent: number = 5;
    answerBoxSizeHeightPercent: number = 3;
    answerBoxSizeWidthPercent: number = 92;
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
		this.initializeBanner();
		this.initializeSelectTopicText();
		
		this.buttonContainer.appendChild(this.bannerElement);
		this.addButton("All Topics", "all-topics-button");
		this.buttonContainer.appendChild(this.selectTopicElement);
		this.addButton("Oracle and Structured Query Language (SQL)", "topic-0-button");
		this.addButton("Restricting and Sorting Data", "topic-2-button");
		this.addButton("Using Single-Row Functions to Customize Output", "topic-3-button");
		//this.addButton("Using Conversion Functions and Conditional Expressions", "topic-3-button");
		//this.addButton("Reporting Aggregated Data Using the Group Functions", "topic-4-button");
		this.addButton("Displaying Data from Multiple Tables", "topic-6-button");
		this.addButton("Using Subqueries to Solve Queries", "topic-7-button");
		this.addButton("Using the Set Operators", "topic-8-button");
		this.addButton("Manipulating Data", "topic-9-button");
		this.addButton("Using DDL Statements to Create and Manage Tables", "topic-10-button");
		this.addButton("Managing Objects with Data Dictionary Views", "topic-11-button");
		this.addButton("Controlling User Access", "topic-12-button");
		this.addButton("Managing Schema Objects", "topic-13-button");
        this.addButton("Manipulating Large Data Sets", "topic-14-button");

        this.parentElement.appendChild(this.headerElement);
        this.parentElement.appendChild(this.buttonContainer);
    }

    addButton(innerText: string, id: string) {
        var buttonElement = document.createElement("div");
        buttonElement.id = id;
        buttonElement.innerHTML = innerText;

        buttonElement.className = "downOnClick";
        buttonElement.style.font = "Helvetica";
        buttonElement.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent) + "px";
        buttonElement.style.marginTop = this.getRootPxFromPercent(this.answerMarginPercent + 5) + "px";
        buttonElement.style.marginBottom = this.getRootPxFromPercent(this.answerMarginPercent + 5) + "px";
        buttonElement.style.background = "aliceblue";
        buttonElement.style.verticalAlign = "middle";
        buttonElement.style.width = this.getWidthPxFromPercent(this.answerBoxSizeWidthPercent) + "px";
        buttonElement.style.paddingLeft = this.getHeightPxFromPercent(2) + "px";
        buttonElement.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        buttonElement.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        buttonElement.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
		buttonElement.style.textAlign = "center";
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

    getWidthPxFromPercent(percent: number): number{
        return this.WIDTH * (percent/100);
    }

    getRootPxFromPercent(percent: number): number{
        return Math.sqrt(this.HEIGHT * this.WIDTH) * (percent/100);
    }

    initializeButtonContainer() {
        this.buttonContainer = document.createElement("div");
		this.buttonContainer.style.overflow = "scroll";
		//this.buttonContainer.style.width = 100 + "%";
		this.buttonContainer.style.height = this.getHeightPxFromPercent(95) + "px";
		this.buttonContainer.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }

	initializeHeader() {
        this.headerElement = document.createElement("div");
        this.headerElement.id = "header-element";
        this.headerElement.style.width = "100%";
        this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
        this.headerElement.style.background = "#0275d8";
        this.headerElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
    }
	
	initializeBanner() {
        this.bannerElement = document.createElement("div");
        this.bannerElement.id = "banner-element";
		this.bannerElement.innerHTML = "Oracle 1Z0-071 Exam <br /> Flashcards";
        this.bannerElement.style.width = this.getWidthPxFromPercent(100 - (this.bodyMarginLeftPercent * 2)) + "px";
		this.bannerElement.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent + 2) + "px";
        this.bannerElement.style.marginTop = this.getRootPxFromPercent(this.answerMarginPercent + 8) + "px";
		this.bannerElement.style.verticalAlign = "middle";
		this.bannerElement.style.textAlign = "center";
		this.bannerElement.style.font = "Helvetica";
		this.bannerElement.style.fontWeight = "1000";
        //this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
		//this.bannerElement.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }
	
	initializeSelectTopicText() {
        this.selectTopicElement = document.createElement("div");
        this.selectTopicElement.id = "selecttopictext-element";
		this.selectTopicElement.innerHTML = "Select Topic:";
        this.selectTopicElement.style.width = this.getWidthPxFromPercent(100 - (this.bodyMarginLeftPercent * 2)) + "px";
		this.selectTopicElement.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent + 2) + "px";
        this.selectTopicElement.style.marginTop = this.getRootPxFromPercent(this.answerMarginPercent + 8) + "px";
		this.selectTopicElement.style.verticalAlign = "middle";
		this.selectTopicElement.style.textAlign = "center";
		this.selectTopicElement.style.fontWeight = "1000";
		this.selectTopicElement.style.font = "Helvetica";
        //this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
		//this.selectTopicElement.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }
	
	initializeCSS(){
        var cssElement = this.parentElement.ownerDocument.createElement('style');
        var cssText = "";
        cssText += ".downOnClick:active {transform: translateY(2px);}";
        cssElement.innerHTML = cssText;
        this.parentElement.ownerDocument.getElementsByTagName('head')[0].appendChild(cssElement);
    }
}