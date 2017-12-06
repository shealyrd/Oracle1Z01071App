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

}