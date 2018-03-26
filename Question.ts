class Question{
    private answers: string[] = new Array();
    private question: string;
    private correctAnswerIndexes: boolean[] = new Array();
	private category: QuestionCategory;
	private id: number;
	
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
	
	getId(): number{
        return this.id;
    }
	
	setId(id: number){
        this.id = id;
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
		question.setId(obj.id);
		for(var answerIDX in obj.answers){
			var eachAnswer = obj.answers[answerIDX];
			question.addAnswer(eachAnswer, obj.correctAnswerIndexes[answerIDX]);
        }
        question.randomize();
		return question;
	}
	
	static fromJSONArray(obj: any, category: QuestionCategory): Question[]{
		var result = new Array();
        for (var idx in obj) {
            if (obj[idx] != null) {
                var question = Question.fromJSON(obj[idx]);
                if(category == QuestionCategory.ALL_TOPICS){
                    result.push(Question.fromJSON(obj[idx]));
                }
                else if(question.getCategory() == category){
                    result.push(Question.fromJSON(obj[idx]));
                }
            }
		}
		return result;
	}
}