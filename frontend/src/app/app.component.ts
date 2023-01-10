import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationModel } from './model/operation-model';
import { OperationService } from './Services/operation.service';
// import { ConvertDatePipe } from './convert-date.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web Account';
  constructor(private router:Router){}
  
  ngOnInit(){
    this.router.navigateByUrl('/displayOperations')
  }

}
