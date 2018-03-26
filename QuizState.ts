class QuizState{

	questions: Question[];
	currentSelectedIndex: number;
	selectedAnswers: boolean[];
	showingAnswers: boolean;

	
	static fromJSON (jsonTxt: string){
		var obj = JSON.parse(jsonTxt);
		var result: QuizState;
		result.questions = obj["questionList"];
		result.currentSelectedIndex = obj["currentSelectedIndex"];
		result.selectedAnswers = obj["selectedAnswers"];
		return result;
    };
	
	getQuestions(){
		return this.questions;
	}
	
	isShowingAnswers(){
		return this.showingAnswers;
	}
	
	getSelectedAnswers(){
		return this.selectedAnswers;
	}
	
	getCurrentQuestionIndex(){
		return this.currentSelectedIndex;
	}
}