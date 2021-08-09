import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  appForm: FormGroup = this.fb.group({
    number: new FormControl(''),
    typeCalulate: 1,
    resultFromCal: new FormControl(''),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  calculate(){
    let number = this.appForm.controls.number.value;

    //เช็คค่าติดลบ
    if(number <= -1){
      number = 1;
      this.appForm.patchValue({number : 1});
    }
    //การปัดทศนิยม
    number = number.toFixed( 0 );
    this.appForm.patchValue({number : number});

    let result = false;
    if(this.appForm.controls.typeCalulate.value == 1 ){
      result = this.isPrime(number);
    }else{
      result = this.isFibonacci(number);
    }
    this.appForm.patchValue({resultFromCal : result});

  }

  isPrime(num:number) {
      if(num < 2) return false;

      for (let k = 2; k < num; k++){
        if( num % k == 0){
          return false;
        }
      }
      return true;
  }

  isSquare(n:number) {
      return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  isFibonacci(numberToCheck:number)
  {
      return this.isSquare(5*numberToCheck*numberToCheck + 4) ||
              this.isSquare(5*numberToCheck*numberToCheck - 4);
  }

}
