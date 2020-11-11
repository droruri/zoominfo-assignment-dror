export class Question {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  isCorrectAnswer = null;

  constructor(question: string, correctAnswer: string, incorrectAnswers: string[]) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }
}
