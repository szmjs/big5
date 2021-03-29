import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-answer-radios',
  templateUrl: './answer-radios.component.html',
  styleUrls: ['./answer-radios.component.sass']
})
export class AnswerRadiosComponent {
  
  chosenAnswer: Number;
  answers: Number[] = [1, 2, 3, 4, 5];
  count: Number;
  @Output() answerEmitter = new EventEmitter<Number>();
  sendAnswer(){
    this.answerEmitter.emit(this.chosenAnswer);
  }
}
