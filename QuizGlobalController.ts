class QuizGlobalController{
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
new QuizGlobalController(document.body, screen.height, screen.width).start();