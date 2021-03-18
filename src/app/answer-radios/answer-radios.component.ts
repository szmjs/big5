import { Component, Output, EventEmitter, Input } from '@angular/core';
import {MatRadioChange} from '@angular/material/radio';
import {NgModel} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

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

  
  
  

   // let numVal = event.source._elementRef.nativeElement.id;
    
   // console.log(numVal);
    //console.log(regex.lastIndex);
    
    //let res: RegExpExecArray = regex.exec(numVal);
    //let buttonNum = parseInt(res[0])-50;
    //let questionNum = buttonNum/5;
    //let nums: RegExpExecArray = regex2.exec(buttonNum.toString());
    //console.log(nums);
    //console.log("parsed: "+parseInt(nums[0]), "remainder: "+buttonNum % 5);
    /*if (buttonNum % 5 == 0){
      console.log(parseInt(nums[0]), 5);
    }
    else {
      console.log(parseInt(nums[0])+1, buttonNum % 5);
    }*/
   // console.log(buttonNum+" out of 250");
    //console.log("one fifth: "+questionNum);
    //console.log(res);
    //console.log(event);


 }
