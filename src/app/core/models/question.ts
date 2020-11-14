export class Question {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  //property is not used
  isCorrectAnswer = null;

  constructor(question: string, correctAnswer: string, incorrectAnswers: string[]) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }
}
