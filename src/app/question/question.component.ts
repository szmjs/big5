import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent {
  @Input() question: string;
  @Input() id: Number;

  receivedAnswer;
  answerWithQID = [];
  @Output() answerWithQIDEmitter = new EventEmitter<Array<2>>();
  receiveAnswer($event){
    this.receivedAnswer = $event
    //console.log(this.id+": "+this.receivedAnswer)
    this.answerWithQID[0] = this.id
    this.answerWithQID[1] = this.receivedAnswer
    //console.log(this.answerWithQID)
    this.answerWithQIDEmitter.emit(this.answerWithQID);
  }
 

  





  

 
 

}
