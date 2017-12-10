class Question{
    private answers: string[] = new Array();
    private question: string;
    private correctAnswerIndexes: boolean[] = new Array();

    constructor(question: string){
        this.question = question;
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

}