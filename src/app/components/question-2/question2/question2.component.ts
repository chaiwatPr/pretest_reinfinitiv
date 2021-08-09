import { Component, OnInit,Pipe  } from '@angular/core';
import { MasterServiceService } from 'src/app/services/master-service.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  data: any=[];
  items: any=[];
  inputText:string = "";
  constructor(private masterService:MasterServiceService) { }

  ngOnInit(): void {
   this.getData();

  }

  getData(){
    this.data = this.masterService.getDataCategories().subscribe((res:any) => {
      this.data = res;
      this.filter(this.inputText);
    });

  }

  copyData(){
    this.items = this.data;
  }

  filter(value:string){
    this.copyData();
    if(value !== ''){
      this.items = this.items.filter(
        (item:any) => item.indexOf(value) > -1
      )
    }
  }

}
