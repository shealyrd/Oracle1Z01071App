class QuizAppInstance{
	containingIFrame: HTMLIFrameElement;
	controller: QuizGlobalController;
    width: number;
    height: number;
	state: QuizState;
	
    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;

        this.containingIFrame = document.createElement('iframe');

        this.containingIFrame.scrolling = "no";
		this.containingIFrame.frameBorder = "0";
		this.containingIFrame.style["seamless"] = "seamless";
        this.containingIFrame.height = this.height + "";
        this.containingIFrame.width = this.width + "";
        this.containingIFrame.style.margin = "0px";

        this.containingIFrame.style.width = width + "px";
        this.containingIFrame.style.height = height + "px";
	}
	
	getElement(): HTMLElement{
		return this.containingIFrame;
	}
	
	setState(state: QuizState){
		this.state = state;
	}
	
	
    start(state?: QuizState) {
        document.body.appendChild(this.containingIFrame);
		this.containingIFrame.contentDocument.body.style.margin = "0px";
        this.containingIFrame.contentDocument.body.style.padding = "0px";
        this.controller = new QuizGlobalController(this.containingIFrame.contentDocument.body, this.height, this.width);
		if(state != null){
			this.controller.start(state);	
		}
		else{
			this.controller.start();				
		}
	}
	
	exportState(): string{
		var state: QuizState = this.controller.quizContainer.exportState();
		return JSON.stringify(state);
	}	
}

document.body.style.margin = "0px";
document.body.style.padding = "0px";
new QuizAppInstance(screen.width, screen.height).start();