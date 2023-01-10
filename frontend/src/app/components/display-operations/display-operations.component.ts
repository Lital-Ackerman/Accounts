import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OperationModel } from 'src/app/model/operation-model';
import { OperationService } from 'src/app/Services/operation.service';

@Component({
  selector: 'app-display-operations',
  templateUrl: './display-operations.component.html',
  styleUrls: ['./display-operations.component.css']
})
export class DisplayOperationsComponent {
  accountId:number;
  myOperations:OperationModel[];
  infoMessage:string;
  @ViewChild ('accountInput') accountInput:HTMLInputElement;
  accountDataAdded: number | string


  //Checking if display should be according to last added operation
  constructor(private operationService: OperationService, private router:Router){
    this.accountDataAdded= this.router.getCurrentNavigation()?.extras.state?.['data'];
  };
  
  ngOnInit(){
    //Display operations according to last operation
    if(this.accountDataAdded){
      console.log(this.accountDataAdded)
      this.accountId=+this.accountDataAdded;
      this.getOperations()
      }
    
  }

  //Request to Service in order to get operations List by accountId
  getOperations(){
    this.myOperations=undefined;
    this.infoMessage=undefined;
    this.operationService.getUserOperations(this.accountId)
      .subscribe({
        next: (value)=>{
          this.myOperations=value
          console.log(value)
        },
        error: (err)=>{
          console.log(err);
          this.infoMessage= err.error.message? err.error.message :err.error}
    })
  }

  //Clear board, info Message and input when user clicks "Clear"
  clear(){
    this.myOperations= undefined;
    this.infoMessage=undefined;
    this.accountId= undefined;
  }

  //Clear board/info Message when input is empty
  clearBoard(){
    if(!this.accountInput.value){
      this.clear()
    }
  }
}
