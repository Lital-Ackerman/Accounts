import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OperationModel } from 'src/app/model/operation-model';
import { OpertaionType } from 'src/app/model/operationType-model';
import { OperationService } from 'src/app/Services/operation.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})

export class AddOperationComponent {
  newOperation= new OperationModel();
  operationTypes: OpertaionType[];
  @ViewChild ('myForm') myForm:any;
 
constructor(private operationService: OperationService, private router:Router){}

//Request to Service in order to get the operation types for select input
ngOnInit(){
  this.operationService.getOperationTypes()
    .subscribe(
      (value)=>this.operationTypes=value
    )
}


//Request to Service in order to post new operation
//Navigating to 'displayOperations' component in order to see the new operation with all the rest operations in the same account
  onAdd(){
    try{
      console.log(this.newOperation);
      this.operationService.postOperation(this.newOperation)
      .subscribe({
        next:(value)=>{console.log(value);
          alert(`Operation #${value.objectId} has been Successfully added`)
          this.router.navigate(['/displayOperations'], {state:{data: value.accountNumber}})
          // this.myForm.reset()
        },
        error: (err)=>{
          let message= JSON.stringify(err.error);
          alert(message)}
        
    })
    }
    catch(err){
      console.log(err)
    }
  }

}
